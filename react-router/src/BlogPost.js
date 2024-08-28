import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";
import { useAuth } from "./auth";

function BlogPost() {

  const navigate = useNavigate();

  const { slug } = useParams();

  const auth = useAuth();

  const blogpost = blogdata.find(post => post.slug === slug);

  const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.userName;

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

      {auth.user?.isAdmin && (
        <button>Eliminar blogpost</button>
      )}

    </>
  );
}

export { BlogPost };