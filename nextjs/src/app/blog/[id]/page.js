import React from 'react'

const BlogPage = async({params}) => {
  const {id} = await params;
  console.log(id);
    return (
        <div>
            <p className="heading"> BLOG PAGE </p>
        </div>
    )
}

export default BlogPage
