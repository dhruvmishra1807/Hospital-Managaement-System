import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../main';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Messages = () => {

  const [messages,setMessages]=useState([]);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  useEffect(()=>{
    const fetchMessages=async()=>{
      try {
      const {data}=await axios.get("http://localhost:4000/api/v1/message/getall",{withCredentials:true})
      setMessages(data.messages);
      } catch (error) {
        console.log("Error occured while fetching messages",err);
      }
    }
    fetchMessages();
  },[])
  if(!isAuthenticated){
    return <Navigate to={"/login"}/>
  }
  return (
    <section className='page messages'>
      <h1>MESSAGES</h1>
      <div className="banner">
        {
          messages&&messages.length>0?(messages.map((ele)=>{
            return (
              <div className="card">
                <div className="details">
                  <p>First Name: <span>{ele.firstName}</span></p>
                  <p>Last Name: <span>{ele.lastName}</span></p>
                  <p>Email: <span>{ele.email}</span></p>
                  <p>Phone: <span>{ele.phone}</span></p>
                  <p>Message: <span>{ele.message}</span></p>
                </div>
              </div>
            )
          })):(<h1>No Messages!</h1>)
        }
      </div>
      
    </section>
  )
}

export default Messages
