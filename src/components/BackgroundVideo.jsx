export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="background-video"
    >
      <source src="/sample.mp4" type="video/mp4" />
    </video>
  );
}