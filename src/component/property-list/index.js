import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import guest from "./guest.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bath from "./bath.svg";

export default function PropertyDetails({ list }) {
  return (
    <Box shadow className="details">
      <Heading border>Деталі властивості:</Heading>

      <List {...list} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="details__list">
      <ListItem imageSrc={guest}>{guests} гості</ListItem>
      <ListItem imageSrc={bedroom}>{bedrooms} спальня</ListItem>
      <ListItem imageSrc={bed}>{beds} ліжко</ListItem>
      <ListItem imageSrc={bath}>{baths} ванна кімната</ListItem>
    </ul>
  );
}
