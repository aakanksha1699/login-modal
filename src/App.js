import './App.css';
import React,{Component} from 'react';

class App extends Component{
  render(){
    return(
      <div className="container">

      <svg id="close" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/>
      </svg>

        <div className="login">Login to continue</div>

        <button type="submit" id="email">Login with Email account</button>
        <svg id="eb" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="white"/>
        </svg>

        <button type="submit" id="fb">Login with Facebook account</button>
        <svg id="fbb" width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.77778 24.113V13.5169H11.3333L11.8889 9.38995H7.77778V6.82456C7.77778 5.59764 8.11111 4.81687 9.77778 4.81687H12V1.02456C11.6667 1.02456 10.3333 0.913025 8.77778 0.913025C5.66667 0.913025 3.55556 2.80918 3.55556 6.37841V9.38995H0V13.5169H3.55556V24.113H7.77778Z" fill="white"/>
        </svg>

        <div className="option">or</div>

        <div className="pnumber">
          <div className="rcode">+91</div>
          <div className="number"><input type="text" placeholder="Enter your mobile number"></input></div>
          <svg  id="line" width="360" height="1" viewBox="0 0 360 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="-4.37114e-08" y1="0.5" x2="360" y2="0.499969" stroke="#07A6F0"/>
          </svg>

        <button type="submit" id="cont">Continue</button>

        </div>


      </div>
    );
  }
}
export default App;