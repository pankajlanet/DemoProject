import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import actions from '../actions/userActions'
import CloseIcon from '@mui/icons-material/Close';
import { connect } from 'react-redux';

function DialogBoxCustom(props) {
  
    const {isDialogOpen ,editData ,dispatch} = props
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


const mapStateToProps = (state)=> {
  return{ 
    isDialogOpen:  state.userReducer.isDialogOpen,
    editData : state.userReducer.editData

  }
}

export default connect(mapStateToProps) (DialogBoxCustom)
