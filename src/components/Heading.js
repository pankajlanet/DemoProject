import React from 'react'
import { AppBar, Button, Typography } from '@material-ui/core'
import CustomDrawer from './CustomDrawer'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../actions/userActions'
function Heading() {
    const drawer = useSelector(state => state.userReducer.isDrawerOpen)
    const dispatch = useDispatch()
    
    
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




                <CustomDrawer open = {drawer} />


            </AppBar>
            
        </div>
    )
}

export default Heading
