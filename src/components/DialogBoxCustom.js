import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../actions/userActions'
import CloseIcon from '@mui/icons-material/Close';

function DialogBoxCustom() {

    const isDialogOpen = useSelector(state => state.userReducer.isDialogOpen)
    const dispatch = useDispatch()

    const editData = useSelector(state => state.userReducer.editData)
    const dialogCloseButtonHandler = () => {
        dispatch( actions.closeDialogBox() )
    }
    return (
        <div>
      <Dialog open={isDialogOpen}>
          <div className = 'absolute right-2'>
              
      <IconButton onClick = {dialogCloseButtonHandler}> <CloseIcon/> </IconButton>
      </div>
      <DialogTitle>
                  User Info
                  </DialogTitle>
        <DialogContent>
          <DialogContentText>
              <Typography>Full Name : {editData.firstName + " " + editData.lastName}</Typography>
              <Typography>Email : {editData.email} </Typography>
              <Typography>Gender : {editData.gender} </Typography>
              <Typography>Phone Number : {editData.phoneNumber} </Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
            
        </div>
    )
}

export default DialogBoxCustom
