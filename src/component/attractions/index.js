import "./index.css";

import { Fragment } from "react";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Attractions({ list }) {
  return (
    <Box shadow className="attractions">
      <Heading border>Пам'ятки поблизу</Heading>

      <ul className="attractions__list">
        {list.map(({ id, name, link }) => (
          <Fragment key={id}>
            <ListItem>
              <a className="attraction__link" href={link}>
                {name}
              </a>
            </ListItem>
          </Fragment>
        ))}
      </ul>
    </Box>
  );
}
