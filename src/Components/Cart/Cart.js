import React from 'react'
import {Container, Typography} from '@material-ui/core'
import useStyles from './styles'
import FilledCart from './FilledCart'

const Cart = ({cart, isLoading}) => {
    const classes = useStyles()
    const EmptyCart = () => {
        <Typography variant='subtitle1'>You have no items...</Typography>
    }

  return isLoading ? <Container><Typography>Loading...</Typography></Container> : (
    <Container>
        <div className={classes.toolbar}>
            <Typography className={classes.title}>Shopping Cart</Typography>
            {!cart ? <EmptyCart /> : <FilledCart cart={cart}/>}
        </div>
    </Container>
  )
}

export default Cart