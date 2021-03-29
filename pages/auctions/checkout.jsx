import HeadBoy from '@containers/HeadBoy';
import DefaultLayout from '@containers/layout/DefaultLayout';

function CheckOut() {
  return (
    <>
      <HeadBoy title="CheckOut" />
      <DefaultLayout>
        <div className="row">
          <div className="col-md-12">
            <div className="border border-secondary py-2 px-3">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="small">Welcome</h6>
                  <h6 className="text-primary">Albert Storey</h6>
                  <h6 className="small">Your Credit Balance:</h6>
                  <h6 className="text-primary">$3,760.50</h6>
                </div>
                <div className="col-md-6 text-right">
                  <h6 className="small">Sold for:</h6>
                  <h6 className="text-primary">$1250.00</h6>
                  <h6 className="small">Credits to be paid:</h6>
                  <h6 className="text-primary">24</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-6">
            <div className="border border-secondary p-3 h-100">
              <h2 className="text-primary text-uppercase text-center">
                congratulations!
              </h2>
              <h5 className="text-center">Items you have won in auctions</h5>
              <div className="row mt-4">
                <div className="col-md-6 w-100 text-center">
                  <figure
                    className="bg-secondary w-100"
                    style={{ height: '200px' }}
                  ></figure>
                  <h6 className="text-primary">New iPhone 11 Pro Max</h6>
                  <h5>Sold for:</h5>
                  <h6 className="text-primary">$440</h6>
                  <button className="btn btn-primary">Quit</button>
                </div>
                <div className="col-md-6 w-100 text-center">
                  <figure
                    className="bg-secondary w-100"
                    style={{ height: '200px' }}
                  ></figure>
                  <h6 className="text-primary">New iPhone 11 Pro Max</h6>
                  <h5>Sold for:</h5>
                  <h6 className="text-primary">$440</h6>
                  <button className="btn btn-primary">Quit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="text-primary">Delivery Address</h4>
            <form method="post">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="addressTypeField">Address Type</label>
                    <input
                      type="text"
                      name="address_type"
                      className="form-control"
                      placeholder="Address Type"
                      id="addressTypeField"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="countryField">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                      name="country"
                      id="countryField"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="cityField">City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      id="cityField"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="provinceField">Province</label>
                    <input
                      type="text"
                      className="form-control"
                      name="province"
                      id="provinceField"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="addressField">Address</label>
                <textarea
                  name="address"
                  id="addressField"
                  className="form-control"
                  rows="5"
                ></textarea>
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="paymentTNCField"
                  />
                  <label
                    htmlFor="paymentTNCField"
                    className="custom-control-label"
                  >
                    I have read, understood and agree to the{' '}
                    <a href="#paymenttc">payment terms and conditions</a>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="storeTNCField"
                  />
                  <label
                    htmlFor="storeTNCField"
                    className="custom-control-label"
                  >
                    I have read, understood and agree to the{' '}
                    <a href="#onlinetc">online store terms and conditions</a>
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Make Payment
              </button>
            </form>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export default CheckOut;
