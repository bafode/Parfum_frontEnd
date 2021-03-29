import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import MenShopWrapper from "@components/marketplace/menShop";

export default function MarketPlace() {
  return (
    <>
      <HeadBoy title="MarketPlace" />
      <DefaultLayout>
        <MenShopWrapper />
      </DefaultLayout>
    </>
  );
}
