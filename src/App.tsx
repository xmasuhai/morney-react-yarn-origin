import React from 'react'
import 'style/App.scss'
import {Button} from 'components/Button'
import styled from 'styled-components'

const Box = styled.div`
  border: 1px solid darkgrey;
  min-height: 300px;
  min-width: 200px;
  margin: 20px;
  box-shadow: 0 0 3px 2px rgba(0,0,0,0.5);
`

function App() {
  return (
    <div className="App">
      <Box>
        <Button>Hi</Button>
      </Box>
    </div>
  )
}

export default App
