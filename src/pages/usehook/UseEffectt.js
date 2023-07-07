import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../../components/Sidebar/SideBar";

function UseEffectt() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <>
    
    <div className="App">
   
      <h1>UseEffect</h1>
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      
    </div>
    </>
  );
}

export default UseEffectt;