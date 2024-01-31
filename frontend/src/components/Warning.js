import React from 'react'
import "./warning.css"
function Warning({state}) {
  const { contract } = state;
 
    return (
      <>
       {!contract && <div className="warning">
          <div className="message">Connect to MetaMask !</div>
          <div
            className="cut"
            onClick={() => {
              let y = document.querySelector(".warning");
              y.classList.add("display");
            }}
          >
            X
          </div>
        </div>}
      </>
    );

 }


export default Warning
