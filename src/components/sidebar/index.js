import React, {useState, useEffect} from "react";
import "./sidebar.css";
import Sidebarbutton from "./sidebarButton";
import { MdFavorite, MdLabel} from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from "../../spotify";


export default function Sidebar() {
  const [image, setImage] = useState("https://sparkcdnwus2.azureedge.net/sparkimageassets/XPDC2RH70K22MN-08afd558-a61c-4a63-9171-d3f199738e9f")
  useEffect(() => {
    apiClient.get("me").then(response => {console.log(response);})
  }, [])
  return( 
  <div className="sidebar-container"> 
  <img src={image}
  className="profile-img" alt="Profile" />
  <div>
    <Sidebarbutton title="Feed" to="/feed" icon={<MdSpaceDashboard />}/>
    <Sidebarbutton title="Trending" to="/trending" icon={<FaGripfire />}/>
    <Sidebarbutton title="Player" to="/player" icon={<FaPlay />}/>
    <Sidebarbutton title="Favorites" to="/favorites" icon={<MdFavorite />}/>
    <Sidebarbutton title="Library" to="/" icon={<IoLibrary />}/>
  </div>
  <Sidebarbutton title="Sign Out" to="" icon={<FaSignOutAlt />}/>
  </div>
  );
}
