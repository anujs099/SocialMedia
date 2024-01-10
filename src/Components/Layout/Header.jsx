import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  
  const redirect = useNavigate();
  const {loggedin}=useSelector(state=>state.ui)

  return (
    <div className="bg-primary-subtle p-3">
        <h3 className="text-center p-0 m-1 text-primary">Social Media</h3>
      {loggedin && <div className="d-flex flex-row justify-content-center gap-2">
        <a
          onClick={() => {
            redirect("/home");
          }}
          className="m-2"
        >
          Home
        </a>
        <a
          onClick={() => {
            redirect("/users");
          }}
          className="m-2"
        >
          Users
        </a>

        <a onClick={()=>redirect('/posts')} className="m-2">
            Create Post
        </a>
      </div>}
    </div>
  );
}
