// App.tsx
import React, { useState } from 'react';// Ensure the import path is correct
import useCurrencyInfo from './hook/useCurrencyInfo';
import InputBox from './components/inputBox';

const App: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [from, setFrom] = useState<string>('usd');
  const [to, setTo] = useState<string>('inr');
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  const response = useCurrencyInfo(from);
  const options = Object.keys(response) as string[]; // Ensure options are treated as string array
  
  const convert = () => {
    setConvertedAmount((amount * response[to]).toFixed(2)); // Check if response[to] exists
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
         style={{ backgroundImage: `url(https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}
    >
      <div className='bg-custom-white flex flex-col items-center justify-center w-[50%] h-[50%] rounded border gap-4'>
        <h1 className='text-orange-300 text-xl font-bold'>Currency Converter</h1>
        <InputBox 
          label='From' 
          currencyoptions={options} 
          onCurrencyChange={(currency) => setFrom(currency)} 
          onAmountChange={(amount) => setAmount(amount)} 
          selectedCurrency={from} 
        />
        <button className='absolute left-1/2 -translate-x-1/3 -translate-y-1/3 border-2 border-white bg-red-500 px-3 py-1 text-white rounded' onClick={swap}>Swap</button>
        <InputBox 
          label='To' 
          amount={convertedAmount} 
          amountDisabled={true} 
          onCurrencyChange={(currency) => setTo(currency)} 
          selectedCurrency={to}
          currencyoptions={options} 
        />
        <button className='bg-blue-500 px-5 py-3 text-white' onClick={convert}>
          Convert {amount} {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default App;
