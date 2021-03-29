import HeadBoy from '@containers/HeadBoy';
import DefaultLayout from '@containers/layout/DefaultLayout';
import SimpleBar from 'simplebar-react';

function Auction2() {
  return (
    <>
      <HeadBoy title="Auction 2" />
      <DefaultLayout>
        <div className="row mt-3">
          <div className="col-md-6">
            <h3 className="text-primary text-center">
              GoPro Hero 8 Black Edition
            </h3>
            <div
              className="border border-secondary mb-3 mt-2 d-flex align-items-center justify-content-center"
              style={{ height: '300px' }}
            >
              Coverflow Display Area
            </div>
            <h4>
              Market Price: <span className="font-weight-normal">4000 TL</span>
            </h4>
            <h4>
              Start Price: <span className="font-weight-normal">400 TL</span>
            </h4>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <button className="btn-block btn btn-primary">
                  Enter Auction
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-success btn-block">
                  Share & Win Credits
                </button>
              </div>
            </div>
            <h5 className="text-primary mt-3">
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
                <button className="btn btn-primary">Buy Credits</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-success">Gifts Catalogue</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="border border-secondary w-100 mt-4 rounded"
          style={{
            borderWidth: '3px',
            position: 'relative',
            height: '300px',
          }}
        >
          <span
            className="text-primary small p-1 rounded bg-dark font-weight-bold"
            style={{
              position: 'absolute',
              top: '-12px',
              left: '12px',
              zIndex: 15,
            }}
          >
            Group Chat
          </span>

          <SimpleBar
            className="p-3"
            style={{ maxHeight: '100%', lineHeight: '1.75' }}
          >
            {[...Array.from(Array(20).keys()).slice(1)].map((value, index) => (
              <div className="d-flex flex-wrap align-items-center" key={index}>
                <h6 className="text-primary m-0 p-0 mr-1 small">
                  John{value} Doe:{' '}
                </h6>
                <p className="m-0 p-0 small">I am having a blast</p>
              </div>
            ))}
          </SimpleBar>
        </div>
      </DefaultLayout>
    </>
  );
}

export default Auction2;
