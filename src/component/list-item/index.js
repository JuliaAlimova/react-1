import "./index.css";

export default function ListItem({
  children,
  imageSrc,
  title,
  className = "",
}) {
  return (
    <li className={`list-item  ${className}`}>
      {imageSrc && <img height={24} width={24} src={imageSrc} alt="Icon" />}
      <div className="list-item__block">
        {title && <strong className="list-item__title">{title}</strong>}
        {children}
      </div>
    </li>
  );
}
