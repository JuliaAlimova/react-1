import "./index.css";

import Photo from "../photo";
import Heading from "../heading";

export default function ContactInfo({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact-info">
      <div className="contact-info__block">
        <Photo src={image} name={name}></Photo>
        <div className="contact-info__values">
          <Heading>Господар {name}</Heading>
          <div className="sub-values-list">
            <span className="sub-value">{phone}</span>
            <span className="sub-value">{response_time}</span>
            <span className="sub-value">
              {response_rate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>

      <div>{info}</div>
    </div>
  );
}
