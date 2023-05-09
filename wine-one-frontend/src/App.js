/* eslint-disable max-len */
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Link,
} from 'react-router-dom';
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
import QuestionsAndPredictions from './components/QuestionsAndPredictions';
import ProspectiveMenu from './components/ProspectiveMenu';

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

function Prospective() {
  return (
    <div className="prospective">
      <Outlet />
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
        <Route path="/home" element={<Home />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="/prospectives"
          element={<Prospectives />}
          handle={{ crumb: () => <Link to="/home">Home</Link> }}
        />
        <Route
          path="/prospectives/:prospectiveId"
          element={<Prospective />}
          handle={{ crumb: () => <Link to="/prospectives">Prospectives</Link> }}
        >
          <Route index element={<ProspectiveMenu />} />
          <Route
            path="form"
            element={<PredictionsForm />}
          />
          <Route
            path="questions-and-predictions"
            element={<QuestionsAndPredictions />}
            loader={({params}) => params}
            handle={{ crumb: (data) => {
              const { prospectiveId } = data;
              return (
                <Link to={`/prospectives/${prospectiveId}`}>Prospective</Link>
              );
            } }}
          />
        </Route>
      </Route>
      {/* Only Admin */}
      <Route element={<RequireAuth isAdmin />}>
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
