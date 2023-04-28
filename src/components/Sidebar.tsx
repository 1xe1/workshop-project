import {
  Toolbar,
  Divider,
  IconButton,
  Drawer as MuiDrawer,
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { styled } from '@mui/material/styles'
import { List } from '@mui/material'
import MenuList from './MenuList'

type Props = {
  drawerWidth: number
  open: boolean
  toggleDrawer: () => void
  SignOut: () => void
}

const Sidebar = ({ drawerWidth, open, toggleDrawer, SignOut }: Props) => {
  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }))
  return (
    <Drawer variant='permanent' open={open}>
      <Toolbar className='flex items-center justify-end px-1'>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component='nav'>
        <MenuList SignOut={SignOut} />
      </List>
    </Drawer>
  )
}

export default Sidebar
