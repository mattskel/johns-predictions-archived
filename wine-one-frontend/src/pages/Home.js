// Components
import { Link } from 'react-router-dom';

function Home() {
  const prospectiveId = '638b2bb468447d08f7496271';

  return (
    <div className="home">
      Welcome! Preamble...
      <div className="predictions">
        <Link to={`/prospectives/${prospectiveId}/form`}>Submit your predictions</Link>
      </div>
    </div>
  );
}

export default Home;
