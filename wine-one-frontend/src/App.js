/* eslint-disable max-len */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CollectionContextProvider } from './context/CollectionContext';
import UsersContainer from './components/users-container';

// Pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './pages/Unauthorized';
import PredictionsForm from './components/PredictionsForm';
import Generic from './pages/Generic';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            {/* public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protect these routes */}
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Home />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="/prospectives/:prospectiveId/form" element={<PredictionsForm />} />
            </Route>

            {/* Only Admin */}
            <Route path="/" element={<RequireAuth isAdmin />}>
              <Route path="users" element={<UsersContainer />} />
              <Route
                path="prospectives/*"
                element={(
                  <CollectionContextProvider>
                    <Generic
                      textKey="title"
                      collectionName="prospectives"
                      childRoute="questions"
                      formFields={['title']}
                    />
                  </CollectionContextProvider>
                )}
              >
                <Route
                  path="questions/:prospectiveId/*"
                  element={(
                    <CollectionContextProvider>
                      <Generic
                        parent="prospective"
                        textKey="text"
                        collectionName="questions"
                        childRoute="options"
                        formFields={['text']}
                      />
                    </CollectionContextProvider>
                  )}
                >
                  <Route
                    path="options/:questionId/*"
                    element={(
                      <CollectionContextProvider>
                        <Generic
                          parent="question"
                          textKey="text"
                          collectionName="options"
                          formFields={['text']}
                        />
                      </CollectionContextProvider>
                    )}
                  />
                </Route>
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
