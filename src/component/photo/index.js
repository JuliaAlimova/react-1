import "./index.css";

export default function Photo({ src, name, className = "" }) {
  return <img src={src} alt={name} className={`photo ${className}`} />;
}
