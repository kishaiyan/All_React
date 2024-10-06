import { useEffect, useState } from 'react'

export default function useCurrencyInfo(currency:string) {
  const [data,setData]=useState({});

  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).
    then((response)=> response.json()).
    then((res)=>setData(res[currency]))
  },[currency])

  return data;
}
