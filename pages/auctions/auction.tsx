import HeadBoy from '@containers/HeadBoy';
import DefaultLayout from '@containers/layout/DefaultLayout';
import GlobalCarousel from '@components/carousel/carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Auction() {
  return (
    <>
      <HeadBoy title="Auction" />
      <DefaultLayout>
        <div className="row">
          <div className="col-md-12">
           <GlobalCarousel /> 
          </div>
          <h3 className="text-black text-center w-100 mt-3 mb-3">
            GoPro Hero 8 Black Edition
          </h3>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>
              Market Price: <span className="font-weight-normal">4000 TL</span>
            </h4>
            <h4>
              Start Price: <span className="font-weight-normal">400 TL</span>
            </h4>
            <h5 className="text-primary mt-3">Product Properties</h5>
            <div className="d-flex flex-wrap my-2">
              <h5 className="text-secondary font-weight-normal small">
                <FontAwesomeIcon icon="wrench" className="text-primary mr-1" />
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
                Serdivan, Sakarya
              </h5>
            </div>
            <div className="product-details-area">
              <h6 className="font-weight-normal text-secondary small">
                <span className="font-weight-bold text-primary">Display: </span>
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
              <button className="btn btn-outline-primary btn-light mt-2">
                More Product Details
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <h5 className="text-primary">
              Collection Offers - 2 days, 3 hrs, 12 mins, 13 secs
            </h5>
            <div className="row my-3">
              <div className="col-md-6">
                <button className="btn btn-outline-primary btn-light btn-block">
                  Enter Auction
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-success btn-light">
                  Share & Win Credits
                </button>
              </div>
            </div>
            <h5 className="text-primary">
              Minimum Required Participants:{' '}
              <span className="font-weight-normal text-secondary">433</span>
            </h5>
            <h5 className="text-primary">
              Minimum Bidders Required:{' '}
              <span className="font-weight-normal text-secondary">500</span>
            </h5>
            <h6 className="mt-3 text-secondary font-weight-bold">
              Auction maximum duration:{' '}
              <span className="font-weight-normal">1 hr</span>
            </h6>
            <h6 className="mt-3 text-secondary font-weight-bold">
              Auction maximum rounds:{' '}
              <span className="font-weight-normal">10</span>
            </h6>
            <h6 className="mt-3 text-secondary font-weight-bold">
              Auction entry fee:{' '}
              <span className="font-weight-normal">4 credits</span>
            </h6>
            <h6 className="mt-3 text-secondary font-weight-bold">
              Bidding fee per round:{' '}
              <span className="font-weight-normal">4 credits</span>
            </h6>
            <div className="row mt-4">
              <div className="col-md-6">
                <button className="btn btn-outline-primary btn-light">Buy Credits</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-success btn-light">Gifts Catalogue</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="card-deck">
            <div className="card bg-dark">
              <div className="card-body">
                <h4 className="card-title text-center text-capitalize text-primary font-weight-bold pb-2">
                  Today's Auctions
                </h4>
                <div className="item-container border rounded border-secondary p-2 mb-2">
                  <p className="text-secondary mb-0 small">
                    title, sale price, price, participants
                    <span className="font-weight-bold text-primary">
                      (113/500)
                    </span>
                    , credits
                  </p>
                  <div className="d-flex flex-wrap align-items-center mt-1">
                    <h6 className="small mr-2">
                      <span className="text-primary">Status: </span>
                      <span className="font-weight-normal">Ongoing</span>
                    </h6>
                    <h6 className="small text-primary">
                      <FontAwesomeIcon icon="clock" className="mr-1" />
                      <span className="text-secondary">30 mins 12 secs</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-dark">
              <div className="card-body">
                <h4 className="card-title text-center text-capitalize text-primary font-weight-bold pb-2">
                  Upcoming Auctions
                </h4>
                <div className="item-container border rounded border-secondary p-2 mb-2">
                  <p className="text-secondary mb-0 small">
                    title, sale price, price, participants
                    <span className="font-weight-bold text-primary">
                      (113/500)
                    </span>
                    , credits
                  </p>
                  <div className="d-flex flex-wrap align-items-center mt-1">
                    <h6 className="small mr-2">
                      <span className="text-primary">Status: </span>
                      <span className="font-weight-normal">Ongoing</span>
                    </h6>
                    <h6 className="small text-primary">
                      <FontAwesomeIcon icon="clock" className="mr-1" />
                      <span className="text-secondary">30 mins 12 secs</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-dark">
              <div className="card-body">
                <h4 className="card-title text-center text-capitalize text-primary font-weight-bold pb-2">
                  Open Auctions
                </h4>
                <div className="item-container border rounded border-secondary p-2 mb-2">
                  <p className="text-secondary mb-0 small">
                    title, sale price, price, participants
                    <span className="font-weight-bold text-primary">
                      (113/500)
                    </span>
                    , credits
                  </p>
                  <div className="d-flex flex-wrap align-items-center mt-1">
                    <h6 className="small mr-2">
                      <span className="text-primary">Status: </span>
                      <span className="font-weight-normal">Ongoing</span>
                    </h6>
                    <h6 className="small text-primary">
                      <FontAwesomeIcon icon="clock" className="mr-1" />
                      <span className="text-secondary">30 mins 12 secs</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export default Auction;
