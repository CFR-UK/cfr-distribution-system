export default function Logo({
  logo = "/logo.png",
  alt = "App Logo",
  className = "h-10 w-auto",
}) {
  return <img src={logo} alt={alt} className={className} />;
}
