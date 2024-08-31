// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(50);
  const [mySatisfaction, setMySatisfaction] = useState(0);
  const [friendSatisfaction, setFriendSatisfaction] = useState(0);
  function handleBillAmount(e) {
    setBill(e.target.value);
  }
  function handleMySatisfaction(e) {
    setMySatisfaction(Number(e.target.value));
  }

  function handleFriendSatisfaction(e) {
    setFriendSatisfaction(Number(e.target.value));
  }

  function resetValues() {
    setBill(0);
    setMySatisfaction(0);
    setFriendSatisfaction(0);
  }

  return (
    <>
      <Bill bill={bill} handleBillAmount={handleBillAmount} />
      <MySatisfaction
        mySatisfaction={mySatisfaction}
        handleMySatisfaction={handleMySatisfaction}
      />
      <FriendSatisfaction
        friendSatisfaction={friendSatisfaction}
        handleFriendSatisfaction={handleFriendSatisfaction}
      />
      {bill > 0 && (
        <>
          <p>
            Total Pay:{" "}
            {Number(bill) +
              Number(bill * (Number(mySatisfaction) / 100)) +
              Number(bill * (Number(friendSatisfaction) / 100))}
            bill {bill} my satisfaction {mySatisfaction} and friend satisfaction{" "}
            {friendSatisfaction}
          </p>
          <button onClick={resetValues}>Reset</button>
        </>
      )}
    </>
  );
}

function Bill({ bill, handleBillAmount }) {
  return (
    <>
      <h3>
        How much was the bill?{" "}
        <input type="text" value={bill} onChange={(e) => handleBillAmount(e)} />
      </h3>
    </>
  );
}

function MySatisfaction({ mySatisfaction, handleMySatisfaction }) {
  return (
    <>
      <h3>
        How did you like the service?
        <select
          value={mySatisfaction}
          onChange={(e) => handleMySatisfaction(e)}
        >
          <option value={0}>It was the worst service 0%</option>
          <option value={5}>It was a bad service 5%</option>
          <option value={10}>It was a good service 10%</option>
          <option value={20}>It was a perfect service 20%</option>
        </select>
      </h3>
    </>
  );
}

function FriendSatisfaction({ friendSatisfaction, handleFriendSatisfaction }) {
  return (
    <>
      <h3>
        How did you friend like the service?
        <select
          value={friendSatisfaction}
          onChange={(e) => handleFriendSatisfaction(e)}
        >
          <option value={0}>It was the worst service 0%</option>
          <option value={5}>It was a bad service 5%</option>
          <option value={10}>It was a good service 10%</option>
          <option value={20}>It was a perfect service 20%</option>
        </select>
      </h3>
    </>
  );
}

export default App;
