import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import pool from "./pool.svg";
import gym from "./gym.svg";
import freeBreakfast from "./free-breakfast.svg";
import freeWiFi from "./freeWiFi.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import airportShuttle from "./airport-shuttle.svg";
import concierge from "./concierge.svg";
import roomService from "./room-service.svg";
import childFriendly from "./child-friendly.svg";

export default function PropertyDetails({ list }) {
  return (
    <Box shadow className="amenities">
      <Heading border>Зручності</Heading>

      <List {...list} />
    </Box>
  );
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="amenities__list">
      <ListItem
        imageSrc={pool}
        className={`${hasPool ? "amenities--true" : "amenities--false"}`}
      >
        Басейн
      </ListItem>
      <ListItem
        imageSrc={gym}
        className={`${hasGym ? "amenities--true" : "amenities--false"}`}
      >
        Спортивний зал
      </ListItem>
      <ListItem
        imageSrc={freeBreakfast}
        className={`${
          hasFreeBreakfast ? "amenities--true" : "amenities--false"
        }`}
      >
        Безкоштовний сніданок
      </ListItem>
      <ListItem
        imageSrc={freeWiFi}
        className={`${hasFreeWiFi ? "amenities--true" : "amenities--false"}`}
      >
        Безкоштовний Wi-Fi
      </ListItem>
      <ListItem
        imageSrc={parking}
        className={`${hasParking ? "amenities--true" : "amenities--false"}`}
      >
        Безкоштовний вуличний паркінг
      </ListItem>
      <ListItem
        imageSrc={pets}
        className={`${hasPetsAllowed ? "amenities--true" : "amenities--false"}`}
      >
        Дозволено розміщення з домашніми тваринами
      </ListItem>
      <ListItem
        imageSrc={airportShuttle}
        className={`${
          hasAirportShuttle ? "amenities--true" : "amenities--false"
        }`}
      >
        Трансфер до/з аеропорту
      </ListItem>
      <ListItem
        imageSrc={concierge}
        className={`${
          hasConciergeService ? "amenities--true" : "amenities--false"
        }`}
      >
        Консьєрж-сервіс
      </ListItem>
      <ListItem
        imageSrc={roomService}
        className={`${hasRoomService ? "amenities--true" : "amenities--false"}`}
      >
        Обслуговування номерів
      </ListItem>
      <ListItem
        imageSrc={childFriendly}
        className={`${
          hasChildFriendly ? "amenities--true" : "amenities--false"
        }`}
      >
        Підходить для дітей
      </ListItem>
    </ul>
  );
}
