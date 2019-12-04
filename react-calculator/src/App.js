import React, { useState } from 'react';
import { Button } from './Components/Button';
import { Input } from './Components/Input';
import { ClearButton } from './Components/ClearButton';
import './App.css';

const INITIAL_INPUT = "0";

const App = () => {
  // const [ input, setInput ] = useState(INITIAL_INPUT);
  const [ input, setInput ] = useState("");
  const [ previousNumber, setPreviousNumber ] = useState("");
  const [ currentNumber, setCurrentNumber ] = useState("");
  const [ operator, setOperator ] = useState("");

  /* Adding to input */
  const addNumToInput = val => {
    // if (input === INITIAL_INPUT) {
    //   setInput(val);
    // }
    setInput(input + val);
  }

  const addZeroToInput = val => {
    // add if input state is not empty, then add zero
    if (input !== "") { // if the input is a non-zero number
      setInput(input + val);
    }
  }

  const addDecimal = val => {
    // only add decimal if there's no current decimal present in input
    if (input.indexOf(".") === -1) { // -1 is referring to it not being there
      setInput(input + val);
    }
  }

  /* Operator functions */
  const onMultiply = () => {

  };

  const onDivide = () => {
    
  };

  const onAdd = () => {
    setPreviousNumber(input); // set previousNum to current input
    setInput("");
    setOperator("plus");
  };

  const onSubtract = () => {
    setPreviousNumber(input); // set previousNum to current input
    setInput("");
    setOperator("minus");
  };

  const onEvaluate = () => {
    setCurrentNumber(input);
    // var previousNumVal = +previousNumber;
    // var currentNumVal = +currentNumber;

    // console.log(`result: ${previousNumVal + currentNumVal}`);

    // var result = previousNumVal + currentNumVal;

    if (operator === "plus") {
      setInput((+previousNumber) + (+currentNumber));  
    } else if (operator === "minus") {
      setInput((+previousNumber) - (+currentNumber));  
    }
  };
  console.log(`previousNumber: ${previousNumber}`);
  console.log(`operator: ${operator}`);
  console.log(`currentNumber: ${currentNumber}`);


  /* Clear */
  const clear = () => {
    // setInput(INITIAL_INPUT);
    setInput("");
    setPreviousNumber("");
    setCurrentNumber("");
    setOperator("");
  }

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          <Input>{input}</Input>
        </div>
        <div className="row">
          <Button val={7} onClick={addNumToInput} />
          <Button val={8} onClick={addNumToInput} />
          <Button val={9} onClick={addNumToInput} />
          <Button val={"/"} />
          {/* <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button> */}
        </div>
        <div className="row">
          <Button val={4} onClick={addNumToInput} />
          <Button val={5} onClick={addNumToInput} />
          <Button val={6} onClick={addNumToInput} />
          <Button val={"*"} />
          {/* <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>*</Button> */}
        </div>
        <div className="row">
          <Button val={1} onClick={addNumToInput} />
          <Button val={2} onClick={addNumToInput} />
          <Button val={3} onClick={addNumToInput} />
          <Button val={"+"} onClick={onAdd} />
          {/* <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button> */}
        </div>
        <div className="row">
          <Button val={"."} onClick={addDecimal} />
          <Button val={0} onClick={addZeroToInput} />
          <Button val={"="} onClick={onEvaluate} />
          <Button val={"-"} onClick={onSubtract} />
          {/* <Button>.</Button>
          <Button>0</Button>
          <Button>=</Button>
          <Button>-</Button> */}
        </div>
        <div className="row">
          <ClearButton onClick={clear} />
        </div>
      </div>
    </div>
  );
}

export default App;
