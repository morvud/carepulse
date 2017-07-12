import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './bootstrap/css/bootstrap.css'
import './style/styles.css'
import './style/fonts/css/font-awesome.min.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
