/* eslint-disable max-len */
/*
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
import Prospectives from './pages/Prospectives';
import QuestionsAndPredictions from './components/QuestionsAndPredictions';
import ProspectiveMenu from './components/ProspectiveMenu';
import ProspectivesList from './components/ProspectivesList';

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
*/

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       {/* public routes */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       {/* Protect these routes */}
//       <Route element={<RequireAuth />}>
//         <Route path="/home" element={<Home />} />
//         <Route path="/unauthorized" element={<Unauthorized />} />
//         <Route
//           path="/prospectives"
//           element={<Prospectives currentPage="Prospectives" />}
//           handle={{ crumb: () => <Link to="/home">Home</Link> }}
//         >
//           <Route index element={<ProspectivesList />} />
//           <Route
//             path=":prospectiveId"
//             handle={{ crumb: () => <Link to="/prospectives">Prospectives</Link> }}
//           >
//             <Route index element={<ProspectiveMenu currentPage="Prospective menu" />} />
//             <Route
//               path="form"
//               element={<PredictionsForm />}
//             />
//             <Route
//               path="questions-and-predictions"
//               element={<QuestionsAndPredictions currentPage="Questions & predictions" />}
//               loader={({ params }) => params}
//               handle={{
//                 crumb: (data) => {
//                   const { prospectiveId } = data;
//                   return (
//                     <Link to={`/prospectives/${prospectiveId}`}>Prospective</Link>
//                   );
//                 },
//               }}
//             />
//           </Route>
//         </Route>
//       </Route>
//       {/* Only Admin */}
//       <Route element={<RequireAuth isAdmin />}>
//         <Route path="users" element={<UsersContainer />} />
//       </Route>
//     </Route>,
//   ),
// );


import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { hot } from 'react-hot-loader'

const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRouter/>
      </ThemeProvider>
    </BrowserRouter>
)}

export default hot(module)(App)
