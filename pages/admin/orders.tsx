import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import Orders from "@components/admin/Orders";
export default function Order() {
  return (
    <>
      <HeadBoy title="ManageProducts" />
      <DefaultLayout>
        <Orders />
      </DefaultLayout>
    </>
  );
}
