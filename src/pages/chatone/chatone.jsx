// import React from 'react'

// const chatone = () => {
//   return (
//     <div>
//      {/* <iframe src="http://localhost:5173"></iframe> */}
//      <h1>hello</h1>
//     </div>
//   )
// }

// export default chatone
import React from "react";

const ChatOne = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <iframe
        src="http://localhost:5173"
        style={{
          width: "90%",
          height: "90vh",
          border: "none",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ChatOne;
