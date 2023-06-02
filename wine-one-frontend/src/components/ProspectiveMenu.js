import { Link } from 'react-router-dom';

function ProspectiveMenu() {
  return (
    <div>
      <Link to="form" relative="path">Submit predictions</Link><br />
      <Link to="questions-and-predictions" relative="path">Questions & predictions</Link>
    </div>
  );
}

export default ProspectiveMenu;
