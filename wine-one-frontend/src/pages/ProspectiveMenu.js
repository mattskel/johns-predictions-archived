import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

function ProspectiveMenu() {
  return (
    <div>
      <h2>Prospective menu</h2>
      <Breadcrumbs />
      <Link to="form" relative="path">Submit predictions</Link><br />
      <Link to="questions-and-predictions" relative="path">Questions & predictions</Link>
    </div>
  );
}

export default ProspectiveMenu;
