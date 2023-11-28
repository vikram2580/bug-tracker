import React, { useState, useEffect } from "react";
import "./App.css";
import Web3 from "web3";
import { contractABI, contractAddress } from "./config/contractConfig"; 
import Modal from "./components/modal";
import { DEFAULT_BUG, STATUS_OPTIONS } from "./constants";

function App() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [bugNum, setBugNum] = useState(0);
  const [bugs, setBugs] = useState([]);
  const [newBug, setNewBug] = useState(DEFAULT_BUG);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function init() {
      const web3Instance = new Web3(
        new Web3.providers.HttpProvider("http://127.0.0.1:7545")
      );
      setWeb3(web3Instance);

      const defaultAccount = await getAccount(web3Instance);
      setContract(new web3Instance.eth.Contract(contractABI, contractAddress));

      const numBugs = await contract?.methods
        .getBugCount()
        .call({ from: defaultAccount });
      setBugNum(numBugs);

      if (numBugs !== 0) {
        const bugList = [];
        for (let i = 0; i < numBugs; i++) {
          try {
            const bug = await contract?.methods
              .getBug(i)
              .call({ from: defaultAccount });
            if (bug[0] !== "") {
              bugList.push(bug);
            } else {
              console.log("The index is empty: " + i);
            }
          } catch (error) {
            console.log("Failed to get bug: " + i);
          }
        }
        setBugs(bugList);
      }
    }

    init();
  }, [bugNum]); 

  const addBug = async () => {
    const { bugId, description, status } = newBug;
    const defaultAccount = await getAccount(web3);
    try {
      await contract?.methods
        .addBug(bugId, description, status)
        .send({ from: defaultAccount, gas: 3000000 });
      const updatedNumBugs = await contract?.methods
        .getBugCount()
        .call({ from: defaultAccount });
      setBugNum(updatedNumBugs);
      setBugs([...bugs, { bugId, description, status }]);
      closeModal();
      setNewBug(DEFAULT_BUG);
    } catch (error) {
      console.log("Failed to save bug to blockchain.", error);
    }
  };

  const changeBugStatus = async (bugIndex, status) => {
    const defaultAccount = await getAccount(web3);
    try {
      await contract?.methods
        .updateBugStation(bugIndex, status)
        .send({ from: defaultAccount, gas: 3000000 });
      const updatedBugs = [...bugs];
      updatedBugs[bugIndex].status = status;
      setBugs(updatedBugs);
    } catch (error) {
      console.log("Failed to change status of bug. Index: " + bugIndex, error);
    }
  };

  return (
    <div className='container'>
      <h1>Bug Tracker</h1>
      <div className='card-container'>
        <div className='bug-card'>
          <p className='bug-container'>
            <span className='bug-Head'>{`Bug Id`}</span>
            <span className='bug-Head'>{`Bug Description`}</span>
            <span className='bug-Head'>{`Bug Status`}</span>
          </p>
          {bugs.map((bug, index) => (
            <p className='bug-container' key={index}>
              <span className='bug-id'>{`${bug?.bugId}`}</span>
              <span className='bug-des'>{bug?.description}</span>
              <select
                value={bug?.status}
                placeholder='Status'
                onChange={(event) => {
                  changeBugStatus(index, event.target.value);
                }}
                className='bug-status'
              >
                {STATUS_OPTIONS?.map((it, index) => (
                  <option key={index} value={it?.value}>
                    {it?.label}
                  </option>
                ))}
              </select>
            </p>
          ))}
        </div>
        <div>
          <button className='fab' onClick={openModal}>
            +
          </button>
          {isModalOpen && (
            <Modal
              onSave={addBug}
              closeModal={closeModal}
              setNewBug={setNewBug}
              newBug={newBug}
            />
          )}
        </div>
      </div>
    </div>
  );
}

async function getAccount(web3Instance) {
  const accounts = await web3Instance.eth.getAccounts();
  return accounts[0];
}

export default App;
