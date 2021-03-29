import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import KidsShopWrapper from "@components/marketplace/kidsShop";

export default function MarketPlace() {
  return (
    <>
      <HeadBoy title="MarketPlace" />
      <DefaultLayout>
        <KidsShopWrapper />
      </DefaultLayout>
    </>
  );
}
