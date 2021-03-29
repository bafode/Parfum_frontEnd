import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import UniSexeShopWrapper from "@components/marketplace/uni-sexeShop";

export default function MarketPlace() {
  return (
    <>
      <HeadBoy title="MarketPlace" />
      <DefaultLayout>
        <UniSexeShopWrapper />
      </DefaultLayout>
    </>
  );
}
