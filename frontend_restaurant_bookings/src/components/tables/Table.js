import React from 'react';
import "./Table.css"

const Table = (props) => {
  const tableNodes = props.tables.map((table, index) => {
    return <div onClick={selectTable} className={table.type} id={table.id}><li onClick={selectTable} className="table-number"  key={index} value={table.number}></li></div>
  })

  function selectTable(event){
    props.getTableNumber(event.target.value)
  }
  return(
    <div className="layout-wrapper">
      {tableNodes}
    </div>
  )
}

export default Table;
