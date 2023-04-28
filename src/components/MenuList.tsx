import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import {
  Dashboard,
  ShoppingCart,
  People,
  BarChart,
  Logout,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

type Props = {
  SignOut: () => void
}

const MenuList = ({ SignOut }: Props) => {
  const navigate = useNavigate()

  return (
    <>
      <ListItemButton onClick={() => navigate('/dashboard')}>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/orders')}>
        <ListItemIcon>
          <ShoppingCart />
        </ListItemIcon>
        <ListItemText primary='Orders' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/customers')}>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary='Customers' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/report')}>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary='Reports' />
      </ListItemButton>
      <Divider sx={{ my: 1 }} />
      <ListItemButton onClick={SignOut}>
        <ListItemIcon>
          <Logout />
        </ListItemIcon>
        <ListItemText primary='Sign Out' />
      </ListItemButton>
    </>
  )
}

export default MenuList
