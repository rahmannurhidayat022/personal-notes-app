import React, { Component } from 'react'
import AddNote from '../components/AddNote'
import Navbar from '../components/Navbar'

export default class Notes extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <AddNote />
      </>
    )
  }
}
