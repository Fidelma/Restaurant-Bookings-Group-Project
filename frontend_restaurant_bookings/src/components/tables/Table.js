import React from 'react';

const Table = (props) => {
  const tableNodes = props.tables.map((tableNumber, index) => {
    return <li onClick={selectTable} key={index} value={index}>Table Number: {tableNumber}</li>
  })

  function selectTable(event){
    props.getTableNumber(event.target.value)
  }
  return(
    <div >
      {tableNodes}
    </div>
  )
}

export default Table;
