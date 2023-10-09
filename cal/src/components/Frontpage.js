import React, { useEffect, useState } from "react";

function Frontpage() {
  const [result, setResult] = useState("0");
  const [showSigns, setSigns] = useState(true);

  useEffect(() => {
    setResult("0");
    setSigns(true);
  }, []);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("0");
    } else if (value === "%") {
      // Calculate the percentage of the current result
      setResult((parseFloat(result) / 100).toString());
    } else if (value === "+/-") {
      // Toggle between positive and negative
      setResult((parseFloat(result) * -1).toString());
    } else if (value === ".") {
      // Ensure there's only one decimal point
      if (!result.includes(".")) {
        setResult(result + ".");
      }
    } else {
      // Remove leading '0' when a number button is clicked
      setResult(result === "0" ? value : result + value);
    }
  };

  return (
    <div>
      <div className="Main">
        <div className="answerDiv">{result} </div>

        <div className="buttons">
          <div className="firstRow rows">
            <button
              className="lightgrayButtons"
              onClick={() => handleClick("C")}
            >
              C
            </button>
            <button
              className="lightgrayButtons"
              onClick={() => handleClick("+/-")}
            >
              +/-
            </button>
            <button
              className="lightgrayButtons"
              onClick={() => handleClick("%")}
            >
              %
            </button>
            <button className="orangeButton" onClick={() => handleClick("/")}>
              /
            </button>
          </div>
          <div className="secondRow rows">
            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
            <button className="orangeButton" onClick={() => handleClick("*")}>
              *
            </button>
          </div>

          <div className="thirdRow rows">
            <button onClick={() => handleClick("4")}>4</button>
            <button onClick={() => handleClick("5")}>5</button>
            <button onClick={() => handleClick("6")}>6</button>
            <button className="orangeButton" onClick={() => handleClick("-")}>
              -
            </button>
          </div>
          <div className="fourthRow rows">
            <button onClick={() => handleClick("1")}>1</button>
            <button onClick={() => handleClick("2")}>2</button>
            <button onClick={() => handleClick("3")}>3</button>
            <button className="orangeButton" onClick={() => handleClick("+")}>
              +
            </button>
          </div>
          <div className="fifthRow rows">
            <div>
              <button className="zeroBotton" onClick={() => handleClick("0")}>
                0
              </button>
            </div>
            <button onClick={() => handleClick(".")}>.</button>
            <button className="orangeButton" onClick={() => handleClick("=")}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
