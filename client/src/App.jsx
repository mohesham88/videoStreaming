import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'

import {Navbar} from "./components/imports.js"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar />
        
        {/* <Routes>
          <Route path='/' exact element = {<Feed />} />

          <Route path='/video/:id' exact element = {<VideoDetail />} />

          <Route path='/search/:id' exact element = {<SearchFeed />} />
        </Routes> */}
      </Box>
    </BrowserRouter>
  )
}

export default App
