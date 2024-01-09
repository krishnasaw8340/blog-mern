import "./App.css";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Login from "./component/account/Login";
import Home from "./component/Pages/Home";
import { useState } from "react";
const PrivateRoute = ({ isAuthenticate, ...props }) => {
  return isAuthenticate ? <Outlet /> : <Navigate replace to="/auth" />;
};
function App() {
  const [isAuthenticate, isUserAuthenticate] = useState(false);
  return (
    <div style={{ marginTop: 20 }}>
      <Routes>
        <Route
          path="/auth"
          element={<Login isUserAuthenticated={isUserAuthenticate} />}
        />
        <Route
          path="/"
          element={<PrivateRoute isAuthenticate={isAuthenticate} />}
        >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
