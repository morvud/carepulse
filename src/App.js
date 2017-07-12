import React, { Component } from 'react'
import { loadData, updateData } from './components/carepulseService'
import { Header } from './components/common/header'
import { Footer } from './components/common/footer'
import { Panel } from './components/panel'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      message: '',
      errorMessage: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // Fetch data from the api and populate the array 'data' in the state
    loadData()
      .then(data => this.setState({data: data.results}))
  }

  /*
  Function that renders a message for 2.5s. It accepts two parameters,
  msg which is a string containing message to be displayed, and err
  which is a boolean indicating whether the message should be displayed as an error
  */

  showTempMessage = (msg, err) => {
    if (err) {
      this.setState({errorMessage: msg})
      setTimeout(() => this.setState({errorMessage: ''}), 2500)
    } else {
      this.setState({message: msg})
      setTimeout(() => this.setState({message: ''}), 2500)
    }
  }

  /*
  Function that handles the submission of the booking.
  It receives the event containing ID of a Nursing Home to be updated through the API.
  ID is extracted and used to find corresponding entry in the 'data' array.
  Booking is validated by checking if number of occupied beds is equal or greater to the total number of beds.
  If booking is valid then proceed to the update function.
  If booking is invalid then display the error.
  */

  handleSubmit(e) {
    e.preventDefault()
    const id = parseInt(e.target.value, 0)

    let array = this.state.data.filter(function(item){
      return item.id === id
    })

    const value = array[0]

    if (value.no_occupied_beds < value.no_beds) {
      value.no_occupied_beds = value.no_occupied_beds + 1
      updateData(value)
      //Rerender the page
      this.forceUpdate()
      //Show success message
      this.showTempMessage('You booked a bed at ' + value.name, false)
    } else {
      //Show error message
      this.showTempMessage('This nursing home is at maximum capacity', true)
    }
  }

  render() {
    return (
      <div className="App">
        {/* Header component */}
        <Header />
        <div className="container">
        {/* Success message */}
        {this.state.message && <div className='alert alert-success' role='alert'>{this.state.message}</div>}
        {/* Error message */}
        {this.state.errorMessage && <div className='alert alert-danger' role='alert'>{this.state.errorMessage}</div>}
        </div>
        
        {/* Accordion component, send data and submit function through props */}
        <Panel data={this.state.data} handleSubmit={this.handleSubmit} />

        {/* Footer component */}
        <Footer />
      </div>
    )
  }



}

export default App
