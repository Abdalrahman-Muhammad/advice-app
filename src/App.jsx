import { useEffect, useState } from "react";
import "./App.css"

export default function App() {
  const [newAdvice, setNewAdvice] = useState("");
  const [isLoading, setIsloading] = useState(false)

  async function getAdvice() {
    setIsloading(true)
    const res = await fetch("https://api.adviceslip.com/advice");
    const { slip: { advice } } = await res.json();
    setNewAdvice(advice);
    setIsloading(false)
    console.log("clicked")
  }
  useEffect(() => {
    getAdvice();
  }, [])


  return (
    <div className="container">
      <h1 className="header">Press the button to get an advice.</h1>
      <button className="btn" onClick={() => getAdvice()}>Get an ADVICE</button>
      <div className="advice-container">
        {
          isLoading ?
            <div class="lds-dual-ring"></div> :
            <h2 className="advice">{newAdvice}</h2>
        }
      </div>
    </div>
  )
}