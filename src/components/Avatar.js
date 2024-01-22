import React from "react";
import { createImageFromInitials, getRandomColor } from "../Utils";

const Avatar = ({ name, profilePicture }) => {
  return (
    <img
      className="avatar avatar-rounded bg-primary-lt"
      id="preview"
      src={
        profilePicture.length <= 0
          ? createImageFromInitials(500, name, getRandomColor())
          : profilePicture
      }
      alt="profile-pic"
    />
  );
};

export default Avatar;
