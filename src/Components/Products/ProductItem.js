import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'

import useStyles from './styles'

const ProductItem = ({product, onAddToCart}) => {
    const classes = useStyles()
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image.url} title={product.name} />
        <CardContent className={classes.card}>
            <div className={classes.cardContent}>
                <Typography variant='h6' gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant='h6' gutterBottom>
                    {product.price.formatted_with_symbol}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                    <span>Available:</span>
                    <span className={classes.available}>{product.inventory.available}</span>
                </Typography>
            </div>
            <Typography dangerouslySetInnerHTML={{__html:product.description}} variant='body2' color='textSecondary' />
        </CardContent>
        <CardActions className={classes.cardActions} disableSpacing>
            <IconButton aria-label='Add to Cart' onClick={() => {onAddToCart(product.id, 1)}}>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default ProductItem