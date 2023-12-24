import React from 'react'

import {Stack} from "@mui/material"
import {Link} from 'react-router-dom'

import {applicationName as appName} from '../utils/constants.js'

function Navbar() {
  return (
    <Stack direction={'row'} alignItems={'center'} p={2} sx={{position: "sticky", background: "#0000", top: "0", justifyContent: "center"}}>
      Navbar
    </Stack>
  )
}

export default Navbar
