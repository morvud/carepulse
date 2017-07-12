import React from 'react'
import Accordion from 'react-responsive-accordion'

export const Panel = (props) => {
  return (
    <div className="container">
      {/* This is the accordion component populated with data received through props from the 'app' component */}
      <Accordion>
        {props.data.map(item =>
        <div data-trigger={item.name} key={item.id} data={item}>
          <b>Name:</b> {item.name} <br></br>
          <b>Provider: </b> {item.provider} <br></br>
          <b>Address: </b> {item.address} <br></br>
          <b>Postcode: </b> {item.postcode} <br></br>
          <b>Number of beds available: </b> {item.no_beds} <br></br>
          <b>Number of occupied beds: </b> {item.no_occupied_beds} <br></br>
          <b>Phone Number: </b> {item.get_phone_number} <br></br>
          
          {/* If the website property is empty, don't render it */}
          {item.website && 
            <p><b>Website: </b> {item.website}</p>
          }
          <div className="right">
            {/* Booking button triggering the function received through props,
             with id of Nursing Home corresponging to the button */}
            <button className="btn btn-primary right" onClick={props.handleSubmit} value={item.id}>Book!</button>  
          </div>
        </div>)}  
      </Accordion>
    </div>
  )
}