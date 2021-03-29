import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import UserDashboard from "@components/auth/UserDashboard";

export default function MarketPlace() {
  return (
    <>
      <HeadBoy title="UserDashbord" />
      <DefaultLayout>
        <UserDashboard />
      </DefaultLayout>
    </>
  );
}
