import React from 'react'

const Name = (props) => (
  <h1>Oh {props.name}, you functional programmer, you.</h1>
)

const Functional = () => (
  <Name name="Mike" />
)

export default Functional
