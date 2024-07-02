import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { id, user } = useContext(UserContext);

  if (!user) return <div>please login</div>;
  console.log(user);

  return (
    <div>
      Welcome {user.username}. Your ID is {id}
    </div>
  );
}

export default Profile;
