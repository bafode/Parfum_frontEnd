import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import WomenShopWrapper from "@components/marketplace/womenShop";

export default function MarketPlace() {
  return (
    <>
      <HeadBoy title="MarketPlace" />
      <DefaultLayout>
        <WomenShopWrapper />
      </DefaultLayout>
    </>
  );
}
