import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-4xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span></h2>
                <p className='md:w-4/5'>From bestsellers and timeless classics to rare finds and the latest releases, we’ve carefully curated a selection that caters 
                    to readers of all ages and interests. With easy browsing, you can discover, 
                    shop, and immerse yourself in captivating stories from the comfort of your home.</p>
                <p className='md:w-4/5'>Let us help you find your next great read!</p>
                <div>
                    <input type="search" name="search" id="search" placeholder="Search a Book" className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black  transition-all ease-in duration-200'>Search</button>
                </div>

            </div>


            <div>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner