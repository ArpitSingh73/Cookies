import React from "react";
import { useState, useEffect } from "react";
import "./txn.css";
// import { FixedNumber } from 'ethers';
function Txn({ state }) {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.get();
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);
  return (
    <>
      <div className="txn">
        <div className="top">
          <div className="name">Sender</div>
          <div className="messagee">Message</div>
          <div className="time">Time</div>
          <div className="from">Wallet Address</div>
        </div>
        {memos.map((memo) => {
          return (
            <div className="top1" key={memo.timestamp}>
              <div className="name1">{memo.name}</div>
              <div className="message1">{memo.message}</div>
              <div className="time1">
                {new Date(Number(memo.timestamp) * 1000).toLocaleString()} 
              </div>
              <div className="from1">{String(memo.from)}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Txn;
