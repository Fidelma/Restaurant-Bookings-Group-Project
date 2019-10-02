import React from 'react';

const Table = (props) => {
  const tableNodes = props.tables.map((table, index) => {
    return <li onClick={selectTable} key={index} value={index}>Table Number: {table.tableNumber} Table type: {table.tableType} number of seats: {table.numberOfChairs}</li>
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
