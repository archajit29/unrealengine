import React, { useRef, useState } from "react";

const playlist = [
  { src: "/demo.mp4", label: "Demo" },
  { src: "/sample.mp4", label: "Sample" },
];

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleEnded = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < playlist.length) {
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "100%", background: "#000" }}>
      {/* Label */}
      <div style={{ color: "#fff", padding: "8px 12px", fontSize: "14px", opacity: 0.7 }}>
        Now playing: {playlist[currentIndex].label} ({currentIndex + 1}/{playlist.length})
      </div>

      {/* Video */}
      <video
        ref={videoRef}
        key={playlist[currentIndex].src}   // ← forces reload when src changes
        controls
        autoPlay
        style={{ width: "100%", display: "block" }}
        onEnded={handleEnded}
      >
        <source src={playlist[currentIndex].src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Manual controls */}
      <div style={{ display: "flex", gap: "8px", padding: "8px 12px" }}>
        {playlist.map((video, i) => (
          <button
            key={video.src}
            onClick={() => setCurrentIndex(i)}
            style={{
              padding: "6px 14px",
              background: i === currentIndex ? "#fff" : "#333",
              color: i === currentIndex ? "#000" : "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {video.label}
          </button>
        ))}
      </div>
    </div>
  );
}