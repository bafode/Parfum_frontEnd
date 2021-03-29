import React, { useState, useEffect } from "react";
import Card from "./Card";
import {
  getCategories,
  getFilteredProducts,
  getProducts,
  getTypes,
} from "../../api/apiCore";
import Checkbox from "./Checkbox";
import RadioBox from "./RadioBox";
import { prices } from "./fixedPrices";

export default function WomenShopWrapper() {
  const [myFilters, setMyFilters] = useState({
    filters: { subcategory: [], price: [] },
  });
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [productByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);

  const unit = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setCategories(data);
      }
    });
    getTypes().then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setTypes(data);
      }
    });
    getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data.data);
      }
    });
  };
  const loadMore = () => {
    let toSkip = skip + limit;
    // console.log(newFilters);
    getFilteredProducts(toSkip, limit, myFilters.filters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log("filtredData ", data.data);
        setFilteredResults([...filteredResults, ...data.data]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-warning mb-5">
          Load more
        </button>
      )
    );
  };

  const loadFilteredResults = (newFilters) => {
    // console.log(newFilters);
    getFilteredProducts(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log("filter result ", data.data);
        setFilteredResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  useEffect(() => {
    unit();
    loadFilteredResults(myFilters.filters);
  }, []);

  const handleFilters = (filters, filterBy) => {
    // console.log("SHOP", filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy === "price") {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    }
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };
  const handlePrice = (value) => {
    const data = prices;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };

  return (
    <div className="shop">
      <div className="row">
        <div className="col-3">
          <h4>Filter by categories</h4>
          <ul>
            <Checkbox
              categories={categories}
              handleFilters={(filters) => handleFilters(filters, "category")}
              categoryId="60101fd84bf6161110f701d8"
            />
          </ul>
          <h4>Filter by price range</h4>
          <div>
            <RadioBox
              prices={prices}
              handleFilters={(filters) => handleFilters(filters, "price")}
            />
          </div>
        </div>

        <div className="col-9">
          <h2 className="mb-4">Products</h2>
          <div className="row">
            {filteredResults.map((product, i) => (
              <div key={i} className="col-4 mb-3">
                <Card product={product} />
              </div>
            ))}
          </div>
          <hr />
          {loadMoreButton()}
        </div>
      </div>
    </div>
  );
}
