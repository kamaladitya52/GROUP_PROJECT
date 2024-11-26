import React from "react";

const Lobby = () => {
    return (
      <iframe 
        src="/lobby.html" 
        title="Lobby"
        style={{
          width: '100vw',      
          height: '100vh',     
          border: 'none',      
          display: 'block',    
        }}
      ></iframe>
    );
  };

export default Lobby;