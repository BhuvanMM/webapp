import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    rateOfReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <div>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial investment</label>
            <input
              type="number"
              value={userInput.initialInvestment}
              onChange={(event) =>
                handleChange("initialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              value={userInput.annualInvestment}
              onChange={(event) =>
                handleChange("annualInvestment", event.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Returns on Investment</label>
            <input
              type="number"
              value={userInput.rateOfReturn}
              onChange={(event) =>
                handleChange("rateOfReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label>Time period</label>
            <input
              type="number"
              value={userInput.duration}
              onChange={(event) => handleChange("duration", event.target.value)}
            />
          </p>
        </div>
      </section>
    </div>
  );
}
