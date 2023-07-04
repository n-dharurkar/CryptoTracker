import React, { createContext, useContext, useEffect, useState } from 'react'

const Crypto = createContext();

const CryptoState = () => {
    return useContext(Crypto);

};

const CryptoContext = ({children}) => {

  const[currency,setCurrency] = useState("INR");
  const[symbol,setSymbol] = useState("₹");

  useEffect(() => {
    if(currency==="INR") setSymbol("₹");
    else if(currency==="USD") setSymbol("$");

  },[currency]);


  return (
    <Crypto.Provider value={{currency,symbol,setCurrency}}>
        {children}
    </Crypto.Provider>
  )
}

export {CryptoContext , CryptoState};

