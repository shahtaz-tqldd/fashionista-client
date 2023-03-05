import React, { useContext } from 'react'
import useTitle from '../../hooks/useTitle'
import { AuthContext } from '../../context/AuthProvider'
import SectionHeader from '../../components/Typography/SectionHeader'
import WishListCard from '../../components/Cards/WishListCard'
import NoItemsFound from '../../components/sections/NoItemsFound'

const MyCartPage = () => {
    useTitle("My Wishlist")
    const { wishList } = useContext(AuthContext)
    return (
        <>
            <SectionHeader>My Wishlist</SectionHeader>
            {wishList?.length > 0 ?
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                    {wishList.map((item, index) => <WishListCard key={index} data={item} />)}
                </div>
                : <NoItemsFound where={'Wishlist'} />
            }
        </>
    )
}

export default MyCartPage