import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Unauthorized = () => {

  useEffect(() => {
  }, []);

  return (
    <div className="unauthorized">
      <h3>Error 401 - Unauthorized</h3>
      <Link to="/">Return home</Link>
    </div>
  )
}

export default Unauthorized;