import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import AddType from "@components/admin/AddType";

export default function Create() {
  return (
    <>
      <HeadBoy title="CreateCategory" />
      <DefaultLayout>
        <AddType />
      </DefaultLayout>
    </>
  );
}
