import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaBackward } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {

  //to hold token from session stor
  const [token,setToken] = useState("")

 
  useEffect(()=>{
      setToken(sessionStorage.getItem('token'))
  },[token])
  console.log(token);
  return (
    <StyledWrapper className='notfound'>
      <div className="planet">
      </div>
      <p className='mt-5 text-center'>Error 404 Page not Found !</p>
     { token? <Link to={'/home'}><Button variant='outline-success'><FaBackward className='me-3'/>Back to Home</Button></Link>
     :  <Link to={'/'}><Button variant='outline-success'><FaBackward className='me-3'/>Back to Home</Button></Link>}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .planet {
    display: block;
    width: 125px;
    height: 125px;
    position: relative;
    transform-style: preserve-3d;
    border-radius: 50%;
    background: #fcc96b;
    background: #fcc96b;
    background: linear-gradient(
      180deg,
      #fcc96b 0%,
      #fcc96b 15%,
      #f7ae01 15%,
      #f7ae01 19%,
      #fcc96b 19%,
      #fcc96b 22%,
      #f7ae01 22%,
      #f7ae01 28%,
      #fcc96b 28%,
      #fcc96b 31%,
      #fcc96b 33%,
      #fcc96b 36%,
      #f7ae01 36%,
      #f7ae01 48%,
      #fcc96b 48%,
      #fcc96b 55%,
      #f7ae01 55%,
      #f7ae01 66%,
      #fcc96b 66%,
      #fcc96b 70%,
      #f7ae01 70%,
      #f7ae01 73%,
      #fcc96b 73%,
      #fcc96b 82%,
      #f7ae01 82%,
      #c7ba9d 86%,
      #fcc96b 86%
    );
    box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.25),
      inset 8px -4px 6px rgba(199, 128, 0, 0.5),
      inset -8px 4px 8px rgba(255, 235, 199, 0.5), inset 20px -5px 12px #f7ae01,
      0 0 100px #ffffff59;
    transform: rotateZ(-15deg);
  }

  .planet::before {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 16px solid #e1a519;
    border-top-width: 0;
    border-radius: 50%;
    box-shadow: 0 -2px 0 #c18620;
    animation: rings1 0.8s infinite linear;
  }

  .planet::after {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 8px solid #d48b0c;
    border-top-width: 0;
    border-radius: 50%;
    box-shadow: 0 -2px 0 #b99309;
    animation: rings2 0.8s infinite linear;
  }

  @keyframes rings1 {
    0% {
      transform: rotateX(65deg) rotateZ(0deg) scale(1.75);
    }

    100% {
      transform: rotateX(65deg) rotateZ(360deg) scale(1.75);
    }
  }

  @keyframes rings2 {
    0% {
      transform: rotateX(65deg) rotateZ(0deg) scale(1.7);
    }

    100% {
      transform: rotateX(65deg) rotateZ(360deg) scale(1.7);
    }
  }`;

export default NotFound;
