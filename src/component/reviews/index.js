import "./index.css";

import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";

export default function Reviews({ list }) {
  return (
    <div className="reviews__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="reviews__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review">
      <div className="review__header">
        <span className="review__title">{guestName}</span>
        <span className="">Рейтинг: {rating}</span>
      </div>
      <span className="review__description">{review}</span>
    </Box>
  );
}
