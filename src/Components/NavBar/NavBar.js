import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import logo from '../../assets/logo.jpg'
import useStyles from './styles'

const NavBar = ({totalItems}) => {
    const classes = useStyles()
  return (
    <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography className={classes.title} variant='h6'>
                    <img className={classes.image} src={logo} alt="YourViolins" height='25px'/>
                    YourViolin
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label='Show Cart Items' color='ingerit'>
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default NavBar