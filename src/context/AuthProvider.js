import React, { createContext, useEffect, useState } from 'react'
import { getStoredCart } from '../assets/utilities/dbLocal'
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const cartLength = cart?.length

    // LOAD ALL THE PRODUCTS
    const [products, setProducts] = useState(null)
    useEffect(() => {
        fetch('https://fashionista-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    // GET CART PRODUCTS FROM LOCALSTORAGE
    useEffect(() => {
        let savedCart = [];
        const storedCart = getStoredCart();
        for (const id in storedCart) {
            const addedProduct = products?.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    // CART CALCULATION
    let subtotal = 0;
    cart.map(item => {
        return subtotal = subtotal + (item.price * 10 * item.quantity)
    })
    const total = subtotal;
    const authInfo = {
        cart, total, cartLength, products
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider