import { useSelector } from 'react-redux';

function ErrorDisplay() {
  const error = useSelector((state) => (state as any).error?.error);

  return error?.message ? (
    <div className="alert alert-danger">{error.message}</div>
  ) : (
    <span></span>
  );
}

export default ErrorDisplay;
