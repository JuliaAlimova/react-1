import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function PropertyDetails({ list }) {
  return (
    <Box shadow className="details">
      <Heading border>Додаткові властивості</Heading>

      <List {...list} />
    </Box>
  );
}

function List({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  check_in_instructions,
}) {
  return (
    <ul className="details__list">
      <ListItem title="Правила дому">{house_rules}</ListItem>
      <ListItem title="Політика скасування">{cancellation_policy}</ListItem>
      <ListItem title="Місцевий транспорт">{local_transportation}</ListItem>
      <ListItem title="Мови хоста">{host_languages}</ListItem>
      <ListItem title="Спеціальні пропозиції:">{special_offers}</ListItem>
      <ListItem title="Інструкції щодо реєстрації:">
        {check_in_instructions}
      </ListItem>
    </ul>
  );
}
