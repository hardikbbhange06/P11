import React, { useState } from 'react';
import "/src/App.css";
import Data from "/src/db.json"

function Search() {
  const [search,setSearch]=useState("")
// console.log("Search__>search",search);
const searchItem= Data.filter((item)=>{
  if (search == "") {
    return item
  } 
  else if (item.name.toLowerCase().includes(search.toLowerCase())) {
    return item
  }
})

// console.log("Search__>search",searchItem);k

  return (
    <div className='Search'>
      <input type="text" placeholder='Search...' onChange={e=>setSearch(e.target.value)} />
      <div>
        {searchItem.map((item,key)=>{
          return<>
            <div>
              {item.name}
            </div>
          </>
        })}
      </div>
    </div>
  )
}

export default Search;