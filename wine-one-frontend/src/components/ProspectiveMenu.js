import { Link } from 'react-router-dom';
import withBreadcrumbs from './withBreadcrumbs';

function ProspectiveMenu() {
  return (
    <div>
      <Link to="form" relative="path">Submit predictions</Link><br />
      <Link to="questions-and-predictions" relative="path">Questions & predictions</Link>
    </div>
  );
}

const ProspectiveMenuWithBreadcrumbs = withBreadcrumbs(ProspectiveMenu);

export default ProspectiveMenuWithBreadcrumbs;
