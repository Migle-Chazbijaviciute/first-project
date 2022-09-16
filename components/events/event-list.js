import EventItem from "./event-item";
import style from "./event-list.module.css";

function EventList(props) {
  const { items } = props;
  return (
    <ul className={style.list}>
      {items.map(({ title, image, date, location, id }) => (
        <EventItem
          key={id}
          id={id}
          title={title}
          image={image}
          date={date}
          location={location}
        />
      ))}
    </ul>
  );
}

export default EventList;
