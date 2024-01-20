import { useState, useEffect } from "react";
import { ethers } from "ethers";
// import { InfuraProvider } from "ethers/providers";
// import { InfuraProvider } from "ethers"

// The pkg.exports provides granular access
import { InfuraProvider } from "ethers/providers"

// const { ethers } = require("hardhat");

import abi from "./cookies.json";
import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAdd = "0x61e1c3180372de8d20ac4bb55525c05c7ba86e25";
      const contractABI = abi.abi;

      try {
        const { ethereum } = window;
        if (ethereum) {
          const account = await ethereum.request({ method: "eth_requestAccounts" });
        }

        // const provider = new ethers.providers.Web3Provider(ethereum);
                // console.log(InfuraProvider);

        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAdd, contractABI, signer);
        setState({
          provider,
          signer,
          contract,
        });
      } catch (e) {
        console.log(e.message);
      }
    };
    connectWallet();
  }, []);
  
console.log(state)
  return <div className="App">
    lkjgyhdbjnkm hjtfdhcfgvhbmkl,
  </div>;
}

export default App;
