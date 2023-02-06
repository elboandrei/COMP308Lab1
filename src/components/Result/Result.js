import React from 'react';
import { useLocation } from "react-router-dom";
import "./Result.css";
export default function Result() {
  const location = useLocation();
  let email = location.state.email;
  let comment = location.state.comment;
  return(
    <div className='result-wrapper'>
      <h1>Thank you,  {email}!</h1>
      <p>We appreciate your comment: {comment}</p>
    </div>
    
  );
}