'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import {MdDelete} from 'react-icons/md'


function RemoveBtn({id}) {
  const router = useRouter();

  const removeBlog = async() => {
    const confirmed = confirm("Are You Sure?");
    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/blogs?id=${id}`, {
          method: 'DELETE'
        })

        if (res.ok) {
          router.refresh();
        } else {
          throw new Error("Could Not Delete Blog");
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  
  return (
    <>
        <button onClick={removeBlog}>
            <MdDelete />
        </button>
    </>
  )
}

export default RemoveBtn
