import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import AdminDashboard from "@components/auth/AdminDashboard";

export default function MarketPlace() {
  return (
    <>
      <HeadBoy title="UserDashbord" />
      <DefaultLayout>
        <AdminDashboard />
      </DefaultLayout>
    </>
  );
}
