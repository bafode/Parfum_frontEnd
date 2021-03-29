import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import AddProduct from "@components/admin/AddProduct";

export default function Create() {
  return (
    <>
      <HeadBoy title="CreateCategory" />
      <DefaultLayout>
        <AddProduct />
      </DefaultLayout>
    </>
  );
}
