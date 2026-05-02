import React from 'react'
import dynamic from 'next/dynamic'

const Blog = dynamic(() => import('../../blog/page'))

const Docs = () => {
  return (
    <div>
        <p> This is the docs page </p>
       <Blog/>
    </div>
    
  )
}

export default Docs
