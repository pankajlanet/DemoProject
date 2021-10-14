import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../actions/action'

function Test() {

    const state = useSelector(state => state.changeTheNumber )
    const dispatch = useDispatch()
    return (
        <div>
            <Button onClick=  {()=> { dispatch( actions.incNumber())} }color ='primary'>increment</Button>
            <Typography>{state} </Typography>
            <Button onClick=  {()=> {dispatch(actions.decNumber())}} color ='primary'>Decrement</Button>
        </div>
    )
}

export default Test
