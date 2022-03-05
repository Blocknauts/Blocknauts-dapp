import React, { useEffect, useState } from "react";
import "./header.css";
import Web3 from "web3";

function Header() {
  const [account, setAccount] = useState(null);
  let [web3, setWeb3] = useState(null);

  useEffect(() => {
    checkAccount();
  }, []);

  // invoke to connect to wallet account
  async function activate() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        checkAccount();
      } catch (err) {
        console.log("user did not add account...", err);
      }
    }
  }

  // invoke to check if account is already connected
  async function checkAccount() {
    let web3 = new Web3(window.ethereum);
    setWeb3(web3);
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  }

  return (
    <div className="header__container">
      <h1>Home</h1>
      <h1>Features</h1>
      <h1>How it works</h1>
      {/* <button onClick={activate()}>Connect Wallet</button> */}
      <button>Connect Wallet</button>
    </div>
  );
}

export default Header;
