// use local storage to manage cart data
const addToPurchased = cart => {
    localStorage.setItem('purchased-cart', JSON.stringify(cart));
}


const getPurchasedCart = () => {
    let purchasedCart = {};
    //get the shopping cart from local storage
    const purchased = localStorage.getItem('purchased-cart');
    if (purchased) {
        purchasedCart = JSON.parse(purchased);
    }
    return purchasedCart;
}


export {
    addToPurchased,
    getPurchasedCart
}