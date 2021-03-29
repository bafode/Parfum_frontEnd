import { useState } from 'react';
import HeadBoy from '@containers/HeadBoy';
import DefaultLayout from '@containers/layout/DefaultLayout';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SimpleBar from 'simplebar-react';

function InProgressAuction() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = [
    {
      src:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 1',
      caption: 'Slide 1',
    },
    {
      src:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 2',
      caption: 'Slide 2',
    },
    {
      src:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 3',
      caption: 'Slide 3',
    },
  ];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => (
    <CarouselItem
      key={index}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      className="w-100 my-carousel-item"
    >
      <img
        src={item.src}
        alt={item.altText}
        className="w-100 h-100"
        style={{ objectFit: 'cover' }}
      />
      <CarouselCaption
        captionText={item.caption}
        captionHeader={item.altText}
      />
    </CarouselItem>
  ));

  const people = [
    {
      name: 'Melissa Fleming',
      isCurrentUser: false,
    },
    {
      name: 'Christopher Christiansen',
      isCurrentUser: false,
    },
    {
      name: 'Nerea Mendez',
      isCurrentUser: true,
    },
    {
      name: 'Wanda Maximoff',
      isCurrentUser: false,
    },
    {
      name: 'Shuri',
      isCurrentUser: false,
    },
    {
      name: 'Peter Parker',
      isCurrentUser: false,
    },
    {
      name: 'Tony Stark',
      isCurrentUser: false,
    },
    {
      name: 'Bruce Banner',
      isCurrentUser: false,
    },
    {
      name: 'Natasha Romanoff',
      isCurrentUser: false,
    },
    {
      name: 'Maria Hill',
      isCurrentUser: false,
    },
  ];
  return (
    <>
      <HeadBoy title="In Progress" />
      <DefaultLayout>
        <section className="border border-secondary p-2">
          <h5 className="text-center text-primary">In Action Now</h5>
          <h3 className="text-secondary text-center mb-4">iPhone 11 Pro Max</h3>
          <div className="row">
            <div className="col-md-6 text-center">
              <h6 className="text-secondary">
                <span>Remaining Auction Time: </span>
                <span className="font-weight-normal">20 mins</span>
              </h6>
              <h6 className="text-secondary">
                <span>Market Price: </span>
                <span className="font-weight-normal">$500</span>
              </h6>
              <h6 className="text-secondary">
                <span>Start Price: </span>
                <span className="font-weight-normal">$400</span>
              </h6>
              <h6 className="text-secondary">
                <span>Current Round: </span>
                <span className="font-weight-normal">2</span>
              </h6>
            </div>
            <div className="col-md-6 text-center">
              <h6 className="text-secondary">
                <span>Remaining Round Time: </span>
                <span className="font-weight-normal">5 mins</span>
              </h6>
              <h6 className="text-secondary">
                <span>Current Price: </span>
                <span className="font-weight-normal">$340</span>
              </h6>
              <h6 className="text-secondary">
                <span>Initial Bidders: </span>
                <span className="font-weight-normal">20</span>
              </h6>
              <h6 className="text-secondary">
                <span>Remaining Bidders: </span>
                <span className="font-weight-normal">15</span>
              </h6>
            </div>
          </div>
        </section>
        <section className="bidding-area mt-4">
          <div className="row">
            <div className="col-md-4">
              <div className="h-100 border border-secondary p-2">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />

                  {slides}
                  <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                  />
                  <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                  />
                </Carousel>
                <h4 className="text-primary text-center mt-4">
                  Product Properties
                </h4>
                <div className="d-flex flex-wrap justify-content-center my-3">
                  <h5 className="text-secondary font-weight-normal small">
                    <FontAwesomeIcon
                      icon="wrench"
                      className="text-primary mr-1"
                    />
                    Used
                  </h5>
                  <h5 className="text-secondary font-weight-normal mx-3 small">
                    <FontAwesomeIcon
                      icon="calendar-alt"
                      className="text-info mr-1"
                    />
                    September 2020
                  </h5>
                  <h5 className="text-secondary font-weight-normal small">
                    <FontAwesomeIcon
                      icon="map-marker-alt"
                      className="text-danger mr-1"
                    />
                    Used
                  </h5>
                </div>
                <div className="product-details-area">
                  <h6 className="font-weight-normal text-secondary small">
                    <span className="font-weight-bold text-primary">
                      Display:{' '}
                    </span>
                    <span>6.50"(1242x2688)</span>
                  </h6>
                  <h6 className="font-weight-normal text-secondary small">
                    <span className="font-weight-bold text-primary">
                      Processor:{' '}
                    </span>
                    <span>Apple A13 Bionic</span>
                  </h6>
                  <h6 className="font-weight-normal text-secondary small">
                    <span className="font-weight-bold text-primary">RAM: </span>
                    <span>4 GB</span>
                  </h6>
                  <h6 className="font-weight-normal text-secondary small">
                    <span className="font-weight-bold text-primary">
                      Battery Capacity:{' '}
                    </span>
                    <span>3969 mAh</span>
                  </h6>
                  <h6 className="font-weight-normal text-secondary small">
                    <span className="font-weight-bold text-primary">
                      Release Date:{' '}
                    </span>
                    <span>10th September 2019</span>
                  </h6>
                  <h6 className="font-weight-normal text-secondary small">
                    <span className="font-weight-bold text-primary">
                      Network Technology:{' '}
                    </span>
                    <span>GSM / CDMA / HSPA / EVDO / LTE</span>
                  </h6>
                  <button className="btn btn-primary btn-block text-dark mt-3">
                    More Product Details
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border border-secondary h-100">
                <div className="current-user-position">
                  <h5 className="text-primary text-center pt-2">
                    You on the list
                  </h5>
                  <SimpleBar
                    className="position-box py-2 px-3"
                    style={{ maxHeight: '200px', overflowY: 'auto' }}
                  >
                    {people.map((value, index) => (
                      <h6
                        className={
                          value.isCurrentUser
                            ? 'text-primary'
                            : 'text-secondary'
                        }
                        key={index}
                      >
                        {index + 1}. {value.name}
                      </h6>
                    ))}
                  </SimpleBar>
                </div>
                <h5 className="text-primary text-center pt-2">Quick Bid</h5>
                <div className="row py-2 px-3">
                  {Array.from(Array(10).keys())
                    .slice(1)
                    .map((value, index) => (
                      <div className="col-md-4 mb-2" key={index}>
                        <button className="btn btn-block btn-outline-secondary">
                          +{value}
                        </button>
                      </div>
                    ))}
                </div>
                <div className="px-3">
                  <form method="post" className="mb-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Amount"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          Bid
                        </button>
                      </div>
                    </div>
                  </form>
                  <button className="btn btn-primary btn-block">
                    Buy Tokens
                  </button>
                  <button className="btn btn-danger btn-block">
                    Exit Auction
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border border-secondary h-100">
                <h5 className="text-primary text-center pt-2">
                  List of bidders
                </h5>
                <SimpleBar
                  className="position-box py-2 px-3"
                  style={{ maxHeight: '100%', overflowY: 'auto' }}
                >
                  {people.map((value, index) => (
                    <h6
                      className={
                        value.isCurrentUser ? 'text-primary' : 'text-secondary'
                      }
                      key={index}
                    >
                      {index + 1}. {value.name}
                    </h6>
                  ))}
                </SimpleBar>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}

export default InProgressAuction;
