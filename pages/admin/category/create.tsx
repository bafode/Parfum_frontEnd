import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import AddCategory from "@components/admin/AddCategory";

export default function Create() {
  return (
    <>
      <HeadBoy title="CreateCategory" />
      <DefaultLayout>
        <AddCategory />
      </DefaultLayout>
    </>
  );
}
