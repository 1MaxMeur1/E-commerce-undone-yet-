import React, {useState, useEffect} from 'react'
import {Products, NavBar, Cart} from './Components'
import {commerce} from './lib/commerce'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [isLoading, setLoading] = useState(true)

  const fetchProducts = async () => {
    const {data} = await commerce.products.list()

    setProducts(data)
  }

  const fetchCart = async () => {
    const {item} = await commerce.cart.retrieve()
    setCart(item)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
    setLoading(false)
  }, [])

  const handleToTheCart = async (productId, quantity) => {
    setCart(await commerce.cart.add(productId, quantity))
  }

  return (
    <>
      <NavBar totalItems={cart.total_items}/>
      {/* <Products products={products} onAddToCart={handleToTheCart}/> */}
      <Cart isLoading={isLoading} cart={cart}/>
    </>
  )
}

export default App