import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Login from './component/account/Login';
import Home from './component/Pages/Home';

function App() {
  return (
    <div style={{ marginTop: 20 }}>
      <Routes>
        <Route
          path="/"
          element={
            localStorage.getItem("auth_token") ? (
              <Home />
            ) : (
              <Navigate to="/auth" />
            )
          }
        />
        <Route path="/auth" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
