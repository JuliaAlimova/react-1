import "./index.css";

import Heading from "../heading";

export default function Description({ children, title }) {
  return (
    <div className="description">
      <Heading>{title}</Heading>

      <p className="description__text">{children}</p>
    </div>
  );
}
