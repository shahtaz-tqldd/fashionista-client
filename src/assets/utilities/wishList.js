// use local storage to manage cart data
const addToWl = id => {
    let wishListCart = {};

    const storedList = localStorage.getItem('wish-list');
    if (storedList) {
        wishListCart = JSON.parse(storedList);
    }
    wishListCart[id]=1
    localStorage.setItem('wish-list', JSON.stringify(wishListCart));
}

const getStoredWl = () => {
    let wishListCart = {};

    const storedList = localStorage.getItem('wish-list');
    if (storedList) {
        wishListCart = JSON.parse(storedList);
    }
    return wishListCart;
}

const removeFromWl = id => {
    const storedList = localStorage.getItem('wish-list');
    if (storedList) {
        const wishList = JSON.parse(storedList);
        if (id in wishList) {
            delete wishList[id];
            localStorage.setItem('wish-list', JSON.stringify(wishList));
        }
    }
}

const deleteWl = () => {
    localStorage.removeItem('wish-list');
}

export {
    addToWl,
    getStoredWl,
    removeFromWl,
    deleteWl,
}