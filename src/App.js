import React, { useState } from 'react';
import './App.css';

import TipAmount from './components/TipAmount/TipAmount';
import CustomTipAmount from './components/CustomTipAmount/CustomTipAmount';
import Input from './components/Input/Input';
import TipResult from './components/TipResult/TipResult';

function App() {

  const [selectedTipAmount, setSelectedTipAmount] = useState(0);
  const [totalTip, setTotalTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);


  const handleSelectedTipAmount = amount => {
    if(numberOfPeople === 0) {
      return;
    }
    let amountPercentege = (((amount / 100).toFixed(2) * bill) / numberOfPeople).toFixed(2);
    setTotalTip(((amount / 100).toFixed(2) * bill).toFixed(2));
    setSelectedTipAmount(amountPercentege);
  };

  const handleBill = billValue => {
    setBill(billValue);
  };

  const handleNumberOfPeople = numberOfPeopleValue => {
    setNumberOfPeople(numberOfPeopleValue);    
  };

  const resetInputs = () => {
    setTotalTip(0);
    setSelectedTipAmount(0);
    setBill(0);
    setNumberOfPeople(0);
  };

  return (
    <div className="App">
      <div className="main-wrapper">
        
        {/* Input */}
        <div className="tip__form box">
          <Input label="Bill" 
            handleChange={handleBill}
            value={bill ? bill : ''}
          />
          <div className="tip__amount__container">
            <TipAmount amount={5} handleAmount={handleSelectedTipAmount} />
            <TipAmount amount={10} handleAmount={handleSelectedTipAmount} />
            <TipAmount amount={15} handleAmount={handleSelectedTipAmount} />
            <TipAmount amount={25} handleAmount={handleSelectedTipAmount} />
            <TipAmount amount={50} handleAmount={handleSelectedTipAmount} />
            <CustomTipAmount handleAmount={handleSelectedTipAmount} />
          </div>
          <Input label="Number of People" 
            handleChange={handleNumberOfPeople}
            value={numberOfPeople ? numberOfPeople : ''}
          />
        </div>

        {/* Result */}
        <div className="tip__result box">
          <TipResult 
            isDisabled={!bill || !numberOfPeople} 
            tip={bill && numberOfPeople && selectedTipAmount ? selectedTipAmount : 0}
            totalTip={totalTip}
            onReset={resetInputs}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
