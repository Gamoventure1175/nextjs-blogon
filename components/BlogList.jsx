import React from 'react';
import RemoveBtn from './RemoveBtn';
import Link from 'next/link';
import {AiFillEdit} from 'react-icons/ai';

const getBlogs = async() => {
  try {
    const res = await fetch("http://localhost:3000/api/blogs", {
      method: "GET",
      cache: 'no-store'
    })

    if (!res.ok) {
      throw new Error("Failed to fetch blog posts");
    }
    return res.json();
  } catch (error) {
    console.log(error)
  }

}

async function  BlogList() {

  const {allBlogs} = await getBlogs();

  return (
    <>
    {allBlogs.map((blog) => (
      <div className="flex justify-between rounded-xl p-3 sm:max-3xl:p-4 w-fit  bg-red-200 text-black shadow-lg shadow-red-300 my-3 border border-red-200 hover:border hover:border-white ">
        <div className="text-sm sm:max-3xl:text-lg">
          <h2 className="text-xl sm:max-3xl:text-2xl sm:max-3xl:mb-3 font-semibold mb-2">{blog.title}</h2>
          <div className="my-2 sm:max-3xl:my-3">
              {blog.body}
          </div>
          <div className="text-base sm:max-3xl:text-lg">
              {blog.author}
          </div>
          <i className=" text-xs font-semibold sm:max-3xl:text-sm text-gray-600">
              {blog.updatedAt} 
          </i>
        </div>
        <div className="flex flex-col-reverse justify-between items-end text-base sm:max-3xl:text-xl sm:max-3xl:ml-3 ml-1 py-1">
          <RemoveBtn id={blog._id} />
          <Link href={`/editBlog/${blog._id}`}>
              <AiFillEdit />
          </Link>
        </div>
      </div>
      ))}
    </>
  )
}

export default BlogList
