import { Link } from 'react-router-dom';

function ProspectiveMenu() {
  return (
    <div>
      <h1>Prospective menu</h1>
      <Link to="form" relative="path">Submit predictions</Link><br />
      <Link to="questions-and-predictions" relative="path">Questions & predictions</Link>
    </div>
  );
}

export default ProspectiveMenu;
