import React from 'react'
import {Grid} from '@material-ui/core'
import ProductItem from './ProductItem'
import useStyles from './styles'

// const products = [
//     {id: 1, name: 'Violin #1', description: 'this is a violin', price:'₽10', image: 'https://cdn.pixabay.com/photo/2013/07/13/10/06/violin-156558_960_720.png'},
//     {id: 2, name: 'Violin #2', description: 'this is a violin', price:'₽12', image: '../../images/violin.png'},
//     {id: 3, name: 'Violin #3', description: 'this is a violin', price:'₽16', image: '../../images/violin.png'},
//     {id: 4, name: 'Violin #4', description: 'this is a violin', price:'₽100', image: '../../images/violin.png'},
// ]

const Products = ({products, onAddToCart}) => {
    const classes = useStyles()
    return (
        <main>
        <div className={classes.toolbar}/>
        <Grid container justifyContent='center' spacing={2}>
            {products.map( (product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={2}>
                    <ProductItem product={product} onAddToCart={onAddToCart}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products