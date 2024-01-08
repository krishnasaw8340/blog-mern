import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Login from './component/account/Login';
import Home from './component/Pages/Home';

function App() {
  console.log("Auth Token:", localStorage.getItem("auth_token"));

  return (
    <div style={{ marginTop: 20 }}>
      <Routes>
        <Route
          path="/"
          element={
          
              <Home />}
        />
        <Route path="/auth" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
