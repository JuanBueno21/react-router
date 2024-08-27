import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const blogpost = blogdata.find(post => post.slug === slug);

  // if (!blogpost) {
  //   return <p>Post no encontrado.</p>;
  // }

  const returnToBlog = () => {
    navigate("/blog");
  }

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al Blog</button>
      <p>{blogpost.content}</p>
      <p>{blogpost.author}</p>
    </>
  );
}

export { BlogPost };