import React from "react";
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! How are you doing?"
        timestamp="35 minutes ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/7/7d/Sarah_Jeffery_%2831666424268%29.jpg"
      />
      <Chat
        name="Bridget"
        message="Nothing, and you?"
        timestamp="38 minutes ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/e/eb/Bridget_Kelly_Portrait_2018.jpg"
      />
      <Chat
        name="Tekisha"
        message="BRB"
        timestamp="42 minutes ago"
        profilePic="https://cachedimages.podchaser.com/512x512/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tLzQ3NzNiZTQzODM5MGUwMTMwMWMwNzMzMjEzYzU3YTE2LmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D"
      />
      <Chat
        name="Lisa"
        message="What are you doing?"
        timestamp="49 minutes ago"
        profilePic="https://www.kirkland.com/-/media/professionals/o/oconnor-bridget-k.jpg"
      />
      <Chat
        name="Kayla"
        message="Im at the park"
        timestamp="2 hours ago"
        profilePic="https://cyclones.com/images/2018/9/7/Carleton_Bridget_2018_19_WBB_Headshot.jpg"
      />
    </div>
  );
};

export default Chats;
