import HeadBoy from '@containers/HeadBoy';
import DefaultLayout from '@containers/layout/DefaultLayout';
import ShopWrapper from '@components/marketplace/shopwrapper'

export default function MarketPlace() {
   return (
    <>
      <HeadBoy title="MarketPlace" />
      <DefaultLayout>
        <ShopWrapper/>
      
      </DefaultLayout>
    </>
  );
}