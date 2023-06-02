// Components
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      Welcome! Checkout how your predictions are tracking below.
      <div className="predictions">
        <Link to="../prospectives">Your 2023 predictions</Link>
      </div>
    </div>
  );
}

export default Home;
