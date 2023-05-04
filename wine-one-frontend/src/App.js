/* eslint-disable max-len */
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Link,
  useParams,
} from 'react-router-dom';
// import { CollectionContextProvider } from './context/CollectionContext';
import UsersContainer from './components/users-container';

// Pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './pages/Unauthorized';
import PredictionsForm from './components/PredictionsForm';
// import Generic from './pages/Generic';
import Prospectives from './pages/Prospectives';
import QuestionsAndPredictions from './pages/QuestionsAndPredictions';
import ProspectiveMenu from './pages/ProspectiveMenu';

function Root() {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* Protect these routes */}
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Home />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="/prospectives"
          element={<Prospectives />}
          handle={{ crumb: () => <Link to="/">Prospectives</Link> }}
        />
        <Route
          path="/prospectives/:prospectiveId"
          element={<ProspectiveMenu />}
          handle={{ crumb: (data) => {
            return <Link to={"/prospectives/"}>Test</Link>
          } }}
        />
        <Route
          path="/prospectives/:prospectiveId/form"
          element={<PredictionsForm />}
          handle={{ crumb: () => {
            const { prospectiveId } = useParams();
            return <Link to={'/prospectives/' + prospectiveId}>Form</Link>
          } }}
        />
        <Route path="/prospectives/:prospectiveId/questions-and-predictions" element={<QuestionsAndPredictions />} />
      </Route>
      {/* Only Admin */}
      <Route path="/" element={<RequireAuth isAdmin />}>
        <Route path="users" element={<UsersContainer />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
