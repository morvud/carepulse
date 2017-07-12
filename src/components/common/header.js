import React, { Component } from 'react'
import logo from '../../static/carepulse.png'
import nhs from '../../static/nhs.png'

export class Header extends Component {
  render() {
    return (
        <nav className="header">
          <img id="logo" src={logo} alt="logo" />
          <img id="nhs" src={nhs} alt = "nhs" />
        </nav>
    )
  }
}