import React from "react";

const VideoCall = () => {
    return (
      <iframe 
        src="/index.html" 
        title="Index"
        style={{
          width: '100vw',      
          height: '100vh',     
          border: 'none',      
          display: 'block',    
        }}
      ></iframe>
    );
  };

export default VideoCall;