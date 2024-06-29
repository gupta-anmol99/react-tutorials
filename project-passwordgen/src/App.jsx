import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [len, setLen] = useState(8);
  const [nums, setNums] = useState(false);
  const [spl, setSpl] = useState(false);
  const [psswd, setPsswd] = useState("");

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (nums) str += "0123456789";
    if (spl) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPsswd(pass);
  }, [len, nums, spl, setPsswd]);

  const PasswordRef = useRef(null);

  function copyPasstoClip(){
    PasswordRef.current?.select();
    // PasswordRef.current?.setSelectionRange(0, 999); // This can be used to select a range.
    window.navigator.clipboard.writeText(psswd);
  }

  useEffect(() => {
    passwordGenerator();
  }, [len, nums, spl, passwordGenerator]);

  // https://www.reddit.com/r/reactjs/comments/xxbk2b/why_should_functions_that_are_invoked_within_a/?rdt=46966

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-black">
      <h1 className="text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={psswd}
          className="outline-none w-full py-1 px-3 rounded-lg"
          placeholder="Password"
          readOnly
          ref={PasswordRef}
        />

        <button className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 text-center" onClick={copyPasstoClip}>
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={32}
            value={len}
            className="cursor-pointer"
            onChange={(event) => {
              setLen(event.target.value);
            }}
          />
          <label>Length: {len}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={nums}
            id="numberInput"
            onChange={() => {
              setNums((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={spl}
            id="numberInput"
            onChange={() => {
              setSpl((prev) => !prev);
            }}
          />
          <label>Special</label>
        </div>
      </div>
    </div>
  );
}

export default App;
