import VideoPlayer from "../components/VideoPlayer";
import ChatComponent from "../components/ChatComponent";

function StreamPage({ title, viewerCount }) {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* Header */}
      <div style={{ padding: "10px", background: "#111", color: "white" }}>
        <h2>{title}</h2>
        <p>{viewerCount} watching</p>
      </div>

      {/* Main Layout */}
      <div style={{ display: "flex", flex: 1 }}>
        
        {/* Video Section */}
        <div style={{ flex: 3, background: "black", color: "white" }}>
          <VideoPlayer />
        </div>

        {/* Chat Section */}
        <div style={{ flex: 1, borderLeft: "1px solid gray" }}>
          <ChatComponent />
        </div>

      </div>
    </div>
  );
}

export default StreamPage;