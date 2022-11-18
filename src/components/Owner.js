import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Search from './Search';
const data = [1,2,3,4,5,6,76]
function Owner() {
  return (
    <div>
          <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          <Search/>
         {data.map((arr)=>{
          return(
            <div>
              
              <div class="container mt-3">
              <div class="form-check">
                <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" />
               <label class="form-check-label" for="radio1"><p>{arr}</p></label>
                </div>
                </div>
            </div>
          )
         })}
         
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Owner