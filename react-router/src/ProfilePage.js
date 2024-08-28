import React from "react";
import { useAuth } from "./auth";

function ProfilePage() {
const auth = useAuth();

  return (
    <>
      <h1>Profile</h1>
      <h1>Welcome, {auth.user.userName}</h1>
    </>
  );
}
export { ProfilePage };