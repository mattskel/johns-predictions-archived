import { Outlet } from 'react-router-dom';

function Prospective(props) {
  const {prospectiveTitle} = props;
  return (
    <div className="prospective">
      <h1>{prospectiveTitle}</h1>
      <Outlet />
    </div>

  );
}

export default Prospective;
