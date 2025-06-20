import React from 'react'


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = 'inr',
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {


  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className} text-left`}>
          <div className="w-1/2">
              <label  className="text-black mb-2 inline-block">
                  {label}
              </label>
              <input
                  
                  className="outline-none w-full text-black py-1.5"
                  type="number"
                  placeholder="Amount"
              />
          </div>
          <div className="w-full flex flex-wrap justify-end text-right">
              <p className="text-black mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-black/40 cursor-pointer outline-none"
                  
              >
                  
                      <option value="usd">
                          usd
                      </option>
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;

