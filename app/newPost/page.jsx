'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';



function page() {

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const router = useRouter();

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!title || !body || !author) {
      alert("All fields must be filled!")
    }

    try {
      const res = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        header: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({body, title, author})
      })

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Could not add a new blog.");
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className=' flex my-3 flex-col gap-6 w-full mx-2 sm:max-3xl:mx-3 sm:max-3xl:gap-8'>
      <input onChange={(e) => setAuthor(e.target.value)} className='p-3 bg-red-200 text-black placeholder:text-slate-600 text-base rounded-xl focus:outline-none shadow-lg shadow-red-300 sm:max-3xl:text-lg' type="text" placeholder='Author Name'/>
      <input onChange={(e) => setTitle(e.target.value)} className="p-3 bg-red-200 text-black placeholder:text-slate-600 sm:max-3xl:text-lg text-base rounded-xl focus:outline-none shadow-lg shadow-red-300" type="text" placeholder='Blog Title'/>
      <input onChange={(e) => setBody(e.target.value)} className="p-3 sm:max-3xl:text-lg bg-red-200 text-black placeholder:text-slate-600 text-base rounded-xl focus:outline-none min-h-[70px] sm:max-3xl:min-h-[100px] truncate shadow-lg shadow-red-300" type="text" placeholder='Blog Body'/>
      <button type="submit"
      className="text-base sm:max-3xl:text-xl sm:max-3xl:px-4 font-medium bg-sky-500 w-fit py-2
      px-3 rounded-xl border-2 mt-3 mx-auto hover:bg-sky-700 transition-all duration-300 hover:border-sky-700"
      >
        Post Blog
      </button>
    </form>
  )
}

export default page
