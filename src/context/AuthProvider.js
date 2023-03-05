import React, { createContext, useEffect, useState } from 'react'
import { getStoredCart } from '../assets/utilities/dbLocal'
import { getStoredWl } from '../assets/utilities/wishList'
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false)
    const [products, setProducts] = useState(null)
    const [cart, setCart] = useState([])
    const cartLength = cart?.length
    const [wishList, setWishList] = useState([])

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

    // GET WISHLIST FROM DB
    useEffect(() => {
        let wishList = [];
        const storedList = getStoredWl();
        for (const id in storedList) {
            const addedList = products?.find(product => product.id === id)
            if (addedList) {
                wishList.push(addedList)
            }
        }
        setWishList(wishList)
    }, [products])

    // CART CALCULATION
    const subtotal = cart?.reduce((acc, item) => acc + (item.price * 10 * item.quantity), 0)

    const authInfo = {
        cart, total: subtotal, cartLength, products, wishList, cartOpen, setCartOpen
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider