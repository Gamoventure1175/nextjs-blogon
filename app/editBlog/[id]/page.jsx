import EditBlog from '@/components/EditBlog';
import React from 'react';

const getBlogById = async(id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Blog");
    }
    return res.json();
  } catch (error) {
    console.log(error)
  }
}

async function page({params}) {

  const {id} = params;
  const {blog} = await getBlogById(id);
  console.log("_id: ", id);

  const {title, author, body} = blog;


  return (
    <EditBlog id={id} title={title} body={body} author={author} />
  )
}

export default page
