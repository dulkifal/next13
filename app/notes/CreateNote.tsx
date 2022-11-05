'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState("");

  const router = useRouter();

  const create = async () => {
      await fetch('http://127.0.0.1:8090/api/collections/posts/records/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        posts,
      }),
    });
    
  };
  router.refresh();


  return (
    <div>
      <form  onSubmit={create}>
        <h3>Create a new Note</h3>
        <input type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
        placeholder="Posts"
        value={posts}
        onChange={(e) => setPosts(e.target.value)}
         />
        <button type="submit">Create Note</button>


      </form>
    </div>
      
      )
}