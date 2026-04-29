import React from 'react'
import Link from 'next/link'
const Blog = () => {
  return (
    <div>
        <p className="heading"> BLOG PAGE </p>
         <div> 
           <p className="heading"> HELLO </p>
           <Link href="/about">
           
           <button  className="bg-green-600 text-white px-4 py-2 rounded-lg" >GO TO ABOUT</button>
           </Link>
        </div>
    </div>
  )
}

export default Blog
