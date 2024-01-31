import React, { useState } from "react";
import "./buy.css";
import { FixedNumber, ethers } from "ethers";
// import { ethers } from "ethers";

import Meta from "../images/meta.svg";
function Buy({ state, wallet }) {
  const [name, setName] = useState(null);
  const [msg, setMsg] = useState(null);
  const [amt, setAmt] = useState(null);

  //  let wallett = "Wallet address : " + String(wallet);
  const cookie = async (e) => {
    e.preventDefault();

    const { contract } = state;

    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    let amount = document.querySelector("#amount").value;

    try {
      if (name && message && amount) {
        if (parseInt(amount) < 0) {
          alert("Amount must be greater than 0eth");
          return;
        }
        amount = FixedNumber.fromString(amount);
        amount = { value: ethers.parseEther(String(amount)) };
        // const { ethereum } = window;
        // const account = await ethereum.request({
        //   method: "eth_requestAccounts",
        // });
        const transaction = await contract.buyCookies(name, message, amount);
        await transaction.waitForDeployment();
      } else {
        alert("Please Fill the details !");
      }
    } catch (error) {
      if (error.message.substring(0, 18) === "insufficient funds") {
        alert(error.message.substring(0, 18));
      } else if (error.message.substring(0, 20)) {
        alert(error.message.substring(0, 20));
      }

      console.clear();
    }
  };

  // console.log(name, msg, amt)
  return (
    <div className="buy">
      <div className="div1">
        <form>
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            required
            type="text"
            name="message"
            id="message"
            placeholder="your message"
            // required
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
          <input
            required
            type="number"
            // defaultValue={0}
            name="amount"
            id="amount"
            placeholder="amount !"
            // required
            onChange={(e) => {
              setAmt(e.target.value);
            }}
          />
        </form>
        <button className="button" onClick={cookie} disabled={!state.contract}>
          Pay
        </button>
      </div>
      <div className="div2">
        <div className="card">
          {/* <div className="mask">
            <img src={Meta} className=""></img>
          </div> */}
          <div className="mask">
            <img src={Meta}></img>
          </div>
          <div className="account">
            Wallet Address : {wallet }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
