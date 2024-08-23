import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";

function BlogPost() {
  const { slug } = useParams();

  const blogpost = blogdata.find(post => post.slug === slug);

// if (!blogpost) {
//   return <p>Post no encontrado.</p>;
// }

  return (
    <>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.content}</p>
      <p>{blogpost.author}</p>
    </>
  );
}

export { BlogPost };