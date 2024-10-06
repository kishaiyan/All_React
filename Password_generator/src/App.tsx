import { useEffect, useRef, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [length, setLength] = useState(8);
  const [numberPresent, setNumberPresent] = useState(false); // Changed to boolean
  const [symbolPresent, setSymbolPresent] = useState(false); // Changed to boolean
  const passwordRef=useRef(null);
  useEffect(()=>{
    generatePassword()
  },[length,numberPresent,symbolPresent])
  

  function copyToClipboard(){
    window.navigator.clipboard.writeText(text);
    passwordRef.current.select();
  }

  const generatePassword = () => {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberPresent) characters += "0123456789"; // Include numbers if checkbox is checked
    if (symbolPresent) characters += "!@#$%^&*()"; // Include symbols if checkbox is checked

    let password = "";
    for (let i = 0; i < length; i++) {
      const random=Math.floor(Math.random()*characters.length);
      console.log(random);
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    setText(password); // Set the generated password
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="bg-gray-700 w-[50%] rounded p-5">
        <h1 className="text-center text-lg font-bold">Password Generator</h1>
        <div className="flex items-center justify-center mt-4">
          <input 
          type="text" 
          value={text} 
          readOnly 
          className="rounded px-2 py-1 w-[60%] text-black" 
          ref={passwordRef}/>
          <button className="bg-blue-500 px-3 py-1 rounded ml-2" onClick={copyToClipboard}>Copy</button>
        </div>
        <div className="flex items-center justify-center gap-3.5 mt-4">
          <div className="flex items-center">
            <label className="mr-2">Length: {length}</label>
            <input 
              type="range" 
              className="w-full"
              value={length}
              min="6" // Added a min value for better UX
              max="50"
              onChange={(e) => setLength(Number(e.target.value))} // Handle range input change
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="option1" checked={numberPresent} onChange={() => setNumberPresent(!numberPresent)} />
            <label htmlFor="option1" className="ml-2">Numbers</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="option2" checked={symbolPresent} onChange={() => setSymbolPresent(!symbolPresent)} />
            <label htmlFor="option2" className="ml-2">Symbols</label>
          </div>
        </div>
      </div>
    </div>
  );
}
