import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useCookies} from "react-cookie";
import axios from 'axios';
import { useEffect, useState } from 'react';
const Home = () => {
  const navigate = useNavigate();
  const[cookies,removeCookie] = useCookies([]);
  const[username, setUsername] = useState("");
  useEffect(()=>{
    const verifyCookie = async () =>{
      if(!cookies.token)
      {
        navigate("/auth");
      }
      const {data}  = await axios.post(
        "http://localhost:4000",
        {},
        {withCredentials:true}
      );
      const {status, user} = data;
      setUsername(user);
      return status;
    }
    verifyCookie();
  },[cookies,navigate, removeCookie]);
  const Logout = () =>{
    removeCookie("token");
    navigate("/auth");
  }
  return (
    <div className="home_page">
        <nav>
          <section><span>MedFist</span></section>
        </nav>
        <h4>
          {" "}
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
  )
}

export default Home