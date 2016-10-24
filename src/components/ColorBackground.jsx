import React from 'react'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    color: 'white',
    fontSize: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

const ColorBackground = ({ params }) => (
  <div
    style={{
      ...styles.container,
      background: `rgb(${params.r}, ${params.g}, ${params.b})`
    }}
  >
    rgb({params.r}, {params.g}, {params.b})
  </div>
)

export default ColorBackground
