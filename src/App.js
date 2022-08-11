import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import Start from "./components/Start";
import Time from "./components/Time";
import { data, prizeMoney } from "./Data";
import logo from "./images/kbc logo.png"


function App() {
  const [name, setName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("₹ 0");

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        prizeMoney.find((item) => item.id === questionNumber - 1).amount
      );
  }, [questionNumber]);

  return (
    <div className="App">
      {!name ? (
        <Start setName={setName} setTimeOut={setTimeOut} />
      ) : (
        <div className="container">

          <div className="main">
            <div className="image">
            <img src={logo} alt="" width='300px' />
            </div>
            {timeOut ? (
              <div className="earn" >
               <div className="badge" >
               <h1 className="earned">You Earned Total: {earned}</h1>
               </div>
              </div>
            ) : (
              <>
                <div style={{ height: "50%", position: "relative" }}>
                  <div className="timer">
                    <Time
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div style={{ height: "50%" }}>
                  <Quiz
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="money">
            <div className="quit">
              <span>
                <button className="quitBtn" onClick={() => setTimeOut(true)} >
                Quit
                </button>
                <button className="exitBtn" onClick={() => {
                  setName(null);
                  setQuestionNumber(1);
                  setEarned("₹ 0");
                }} >
                Exit
                </button>
              </span>
             <div className="info">
             <p className="name">Name: {name}</p>
              <p className="total">Total Earned {earned}</p>
             </div>
            </div>
            <div className="prizeMoney">
            {prizeMoney.map((item) => {
              return (
                <>
                  <div className="moneyList">
                    <li
                      className={
                        questionNumber === item.id ? "item active" : "item"
                      }
                    >
                      <h5 className="amount">{item.amount}</h5>
                    </li>
                  </div>
                </>
              );
            })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
