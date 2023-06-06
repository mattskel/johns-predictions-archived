import { Link } from 'react-router-dom';

function ProspectiveMenu() {
  return (
    <div>
      <s> Submit predictions</s>
      Closed for 2023
      <br />
      <Link to="questions-and-predictions" relative="path">Questions & predictions</Link>
    </div>
  );
}

export default ProspectiveMenu;
