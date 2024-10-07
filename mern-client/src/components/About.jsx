import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
const About = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-4xl font-bold leading-snug text-black'>About Bookworm Burrow <p className='text-blue-700'>"A cozy place to find, 
                  organize, and manage your books!"</p></h2>
              
                <div>
                    <img className='rounded md:w-10/12' src={FavBookImg} alt=''/>
                </div>

            </div>
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            <p className>
          Bookworm Burrow is your one-stop destination for organizing and managing all your book collections.
          Whether you're a passionate reader, a student, or a bibliophile, our app helps you
          keep track of your library with ease. You can catalog books, track reading progress,
          and even write personal notes for each book.
          <h2>Key Features</h2>
        <ul>
          <li>📚 <strong>Catalog Books:</strong> Easily add books to your virtual library with details like title, author, genre, and more.</li>
          <li>📖 <strong>Track Reading Progress:</strong> Mark books as read, unread, or currently reading, and track your progress.</li>
          <li>✍️ <strong>Add Personal Notes:</strong> Write down your thoughts, quotes, and reviews for each book.</li>
          <li>🔎 <strong>Search & Filter:</strong> Use advanced search and filtering to find the exact book you're looking for.</li>
        </ul>
           </p>
            </div>
        </div>
        </div>
    
  )
}

export default About