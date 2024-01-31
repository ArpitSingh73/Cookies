import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./cookies.json";
import "./App.css";
import Parent from "./components/Parent";

function App() {
 

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [walletAdd, setWalletAdd] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      const contractAdd = "0x61e1c3180372de8d20ac4bb55525c05c7ba86e25";
      const contractABI = abi.abi;

      // 
      try {
        const { ethereum } = window;
        if (ethereum) {

          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

           
          setWalletAdd(account[0])
          ethereum.on("chainChanged", () => {
             window.location.reload();
          })


           ethereum.on("accountChanged", () => {
             window.location.reload();
           });

       
          const provider = new ethers.BrowserProvider(ethereum);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(
            contractAdd,
            contractABI,
            signer
          );
          setState({
            provider,
            signer,
            contract,
          });
        } else {
          alert("Please connect to Metamask !")
        }
      } catch (e) {
        // console.log(e.message);
      }
    };
    connectWallet();
  }, []);

  return (
    <div className="App">
      <Parent state={state} wallet = {walletAdd}></Parent>
    </div>
  );
}

export default App;
