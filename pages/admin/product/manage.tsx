import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import ManageProducts from "@components/admin/ManageProducts";

export default function Create() {
  return (
    <>
      <HeadBoy title="ManageProducts" />
      <DefaultLayout>
        <ManageProducts />
      </DefaultLayout>
    </>
  );
}
