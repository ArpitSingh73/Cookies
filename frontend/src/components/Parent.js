import React from 'react'
import Buy from "./Buy";
import Txn from "./Txn";
import "./parent.css"
import Navbar from './Navbar';
import Warning from './Warning';
function Parent({state, wallet}) {
  return (
    <div className="parent">
      <Navbar></Navbar>
      <Warning
        state={state}
      ></Warning>
      <Buy state={state} wallet={wallet}></Buy>
      <Txn state={state}></Txn>
    </div>
  );
}

export default Parent
