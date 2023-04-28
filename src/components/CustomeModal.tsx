import { Button, Modal, Typography, Box } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
}

type Props = {
  title?: string
  description?: string
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CustomModal = ({
  title,
  description,
  openModal,
  setOpenModal,
}: Props) => {
  const handleClose = () => setOpenModal(false)
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          {title}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          {description}
        </Typography>
        <Button className='float-right' onClick={handleClose}>
          Close
        </Button>
      </Box>
    </Modal>
  )
}

export default CustomModal