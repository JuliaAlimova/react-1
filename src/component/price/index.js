import "./index.css";

import Box from "../box";
import ListItem from "../list-item";

export default function Title({ price, discount, currency, ...rest }) {
  return (
    <Box className="price">
      <div className="price__header">
        <span
          className={`price__value ${
            discount ? "price__value--has-discount" : ""
          }`}
        >
          {currency} {price}
        </span>
        {discount && (
          <span className={`price__value`}>
            {currency}
            {discount}
          </span>
        )}
      </div>

      <List {...rest} currency={currency} />
    </Box>
  );
}

function List({ currency, cleaning = 0, service = 0, checkin, checkout }) {
  return (
    <ul className="price__list">
      <ListItem>
        <span>
          Плата за прибирання: {currency} {cleaning}
        </span>
      </ListItem>

      <ListItem>
        <span>
          Сервісний збір: {currency}
          {service}
        </span>
      </ListItem>

      <ListItem>
        <span>Дата прибуття: {checkin}</span>
      </ListItem>

      <ListItem>
        <span>Дата від’їзду: {checkout}</span>
      </ListItem>
    </ul>
  );
}
