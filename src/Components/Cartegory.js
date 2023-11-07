import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function Cartegory() {
  return (
    <div>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"> Men </Dropdown.Item>
        <Dropdown.Item href="#/action-2"> Women </Dropdown.Item>
        <Dropdown.Item href="#/action-3"> Electronic </Dropdown.Item>
        <Dropdown.Item href = "#/action-4"> Jewelery </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  
    </div>
  )
}

export default Cartegory

