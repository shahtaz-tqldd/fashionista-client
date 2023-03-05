import React, { useContext } from 'react'
import useTitle from '../../hooks/useTitle'
import { AuthContext } from '../../context/AuthProvider'
import SectionHeader from '../../components/Typography/SectionHeader'
import WishListCard from '../../components/Cards/WishListCard'
import { Link } from 'react-router-dom'

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
                : <h2 className='text-xl pt-10'>You have no items in your wishlist! <br />
                    <Link to='/products' className='text-[#E96479] flex items-center gap-2 text-2xl'>
                        Shop Now
                        <lord-icon
                            target="a"
                            src="https://cdn.lordicon.com/zmkotitn.json"
                            trigger="hover"
                            colors="primary:#E96479"
                            style={{ width: "30px", height: "30px", marginTop:"5px" }}>
                        </lord-icon>
                    </Link>
                </h2>
            }
        </>
    )
}

export default MyCartPage