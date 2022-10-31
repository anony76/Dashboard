import React from "react";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

import "./ProfileCard.scss";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import DeleteIcon from "@mui/icons-material/Delete";
const ProfileCard = () => {
  const User = [
    {
      info_type: "Author Name",
      info: "Nagarajan More",
    },
    {
      info_type: "Created On",
      info: "DD/MM/YYYY",
    },
    {
      info_type: "Last Updated On",
      info: "DD/MM/YYYY",
    },
  ];

  const ActionIcon = [
    {
      type: "file_open",
      icon: <FileOpenIcon fontSize="large" />,
    },
    {
      type: "file_write",
      icon: <NoteAltIcon fontSize="large" />,
    },
    {
      type: "delete",
      icon: <DeleteIcon fontSize="large" />,
    },
  ];
  return (
    <div className="ProfileCard">
      <div className="ProfileCard--Left">
        <h2>Spam Mail Project</h2>
        <div className="ProfileCard--Icons">
          {ActionIcon.map((element, index) => {
            return (
              <div className="ProfileCard--Icon" key={index}>
                {element.icon}
              </div>
            );
          })}
        </div>
      </div>
      <div className="ProfileCard--Right">
        {User.map((item, index) => {
          return (
            <div className="ProfileCard--UserDetails" key={index}>
              <div className="ProfileCard--InfoType">{item.info_type} : </div>
              <div className="ProfileCard--Info">{item.info}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileCard;
