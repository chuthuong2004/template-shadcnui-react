import DefaultLayout from "@/layouts/DefaultLayout";
import { routes } from "@/routes";
import { Fragment, ReactNode, Suspense } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          const Page = route.component;
          let Layout: React.FC<any> = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          let PrivateRoute = ({ children }: { children: ReactNode }) => {
            return children;
          };
          if (route.private) {
            PrivateRoute = RequireAuth;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute>
                  <Layout>
                    <Suspense fallback={<div>Loading...</div>}>
                      <Page />
                    </Suspense>
                  </Layout>
                </PrivateRoute>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;

function RequireAuth({ children }: Readonly<{ children: ReactNode }>) {
  const user = null;
  const location = useLocation();
  if (!user) {
    return <Navigate to={"/"} state={{ from: location }} replace={true} />;
  }
  return children;
}
