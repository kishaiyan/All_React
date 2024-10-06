// components/InputBox.tsx


const InputBox = ({ 
  label ,
  amount ,
  selectedCurrency ,
  onAmountChange ,
  onCurrencyChange, 
  currencyoptions ,
  amountDisabled ,
}) => {
  

  return (
    <div className="w-[60%] flex p-5 rounded bg-white/20 items-center justify-between">
      <div className="flex flex-col">
        <label htmlFor="currency" className="text-black/80">{label}</label>
        <input 
          id="currency"
          type="number" 
          placeholder="0" 
          className="text-black bg-black/20 px-2 py-1" 
          value={amount} // Prevents showing "0" in input
          disabled={amountDisabled} 
          onChange={(e)=>onAmountChange(Number(e.target.value))} // Use the separate handler
        />
      </div>
      <div>
        <h1 className="text-black">Currency Type</h1>  
        <select 
          className="cursor rounded-lg bg-gray-100 px-4 py-1"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange(e.target.value);
          }}
        >
          {currencyoptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
