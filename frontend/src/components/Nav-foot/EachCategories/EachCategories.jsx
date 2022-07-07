import {
  Avatar,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
} from "@mui/material";
import React from "react";
import ColorLensIcon from "@mui/icons-material/ColorLens";

function EachCategories({ eachcategory, handleClose }) {
  return (
    <ListItem
      className="ListItemCategories"
      onClick={() => handleClose(eachcategory.id)}
    >
      <ListItemAvatar>
        <Avatar style={{ backgroundColor: "#f9db79" }}>
          <ColorLensIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        style={{ fontFamily: "Oswald" }}
        primary={eachcategory.name}
      />
    </ListItem>
  );
}

export default EachCategories;
