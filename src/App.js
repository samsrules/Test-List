import React, { useCallback, useEffect, useState } from "react";

function Listen({ lists, addItem }) {
  const listRender = () => {
    if (lists && lists.length > 0) {
      console.log("lists--", lists, isNaN(lists));

      return [...Array(Number(lists))].map((val, i) => {
        return (
          <div key={i}>{i % 2 == 0 ? <div>row</div> : <div>Column</div>}</div>
        );
      });
    }
  };
  return (
    <>
      {listRender()}
      <input type="text" onChange={(e) => addItem(e.target.value)} />
    </>
  );
}

function App() {
  const [listData, setList] = useState([]);
  const [numbers, setNumber] = useState(3);

  const handleItem = useCallback(
    (num) => {
      setNumber(num);
    },
    [numbers]
  );

  return (
    <div>
      Enter Number <br></br>
      <Listen lists={numbers} addItem={handleItem}></Listen>
    </div>
  );
}

export default App;
