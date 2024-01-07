import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './component/account/Login';
import Home from './component/Pages/Home';
function App() {
  return (
    <div style={{marginTop:20}}>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element = {<Login/>}/>
     </Routes>
     
    </div>
  );
}
export default App;
