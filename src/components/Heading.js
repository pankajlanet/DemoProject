import React from 'react'
import { AppBar, Button, Typography } from '@material-ui/core'
import CustomDrawer from './CustomDrawer'
import { connect } from 'react-redux'
import actions from '../actions/userActions'
import CustomDrawerFormik from './CustomDrawerFormik'
function Heading(props) {
    const {drawer} = props
    const {dispatch} =  props
    

    
    const addUserHandler = ()=> 
    {
        dispatch(actions.openDrawer())
    }
    

    return (
        <div>
            <AppBar elevation= {3   } className ='h-14 flex flex-row items-center justify-center' >
                <div className='flex flex-row items-center justify-center'>
                    <Typography className= 'mt-10 font-bold text-32'>User Info Page </Typography>
                    <div className='absolute top-2 right-6'>
                        <Button onClick = {addUserHandler} color='secondary' variant='contained' size='medium'>Add</Button>
                    </div>
                </div>




                {/* <CustomDrawer open = {drawer} /> */}
                <CustomDrawerFormik open = {drawer}/>

            </AppBar>
            
        </div>
    )
}

const mapStateToProps = (state)=> {

    return { drawer :  state.userReducer.isDrawerOpen}
}

export default connect(mapStateToProps) (Heading)
