import DefaultHeader from '@components/layout/DefaultHeader';
import DefaultFooter from '@components/layout/DeafultFooter';

function DefaultLayout({ children }) {
  return (

      <div id="page-wraper">
        <DefaultHeader />
        {children}
        <DefaultFooter />
    </div>
  );
}

export default DefaultLayout;
