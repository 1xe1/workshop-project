import { useNavigate ,Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import Report from './pages/Reports'
import useAuth from './hooks'
import { useEffect } from 'react'
import { getCheckTokenExpiry } from './utils/localHandler'
import { constant } from './utils/constant'

const mdTheme = createTheme()

const App = () => {
  const {auth} = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() =>{
    if(auth){
      const expired = getCheckTokenExpiry(constant.STORAGE_TOKEN)
      if(expired){
        navigate('/signin',{replace:true})
      }
    }
  },[location])
  return (
      <ThemeProvider theme={mdTheme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Navigate to='/dashboard' replace />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/report' element={<Report />} />
          </Route>

          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </ThemeProvider>
  )
}

export default App
