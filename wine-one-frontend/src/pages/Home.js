// Components
import { Link } from 'react-router-dom';

function Home() {
  // const prospectiveId = '638b2bb468447d08f7496271';

  return (
    <div className="home">
      Welcome! Checkout how your predictions are tracking below.
      <div className="predictions">
        {/* Can enable this next year */}
        {/* <Link to={`../prospectives/${prospectiveId}/form`}>Submit your predictions</Link>
        <br /> */}
        <Link to="../prospectives">Your 2023 predictions</Link>
      </div>
    </div>
  );
}

export default Home;
