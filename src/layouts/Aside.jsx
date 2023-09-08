import useSelectedInteraction from "../stores/index.js";

const interactions = [
  {
    name: "interaction1",
    flag: true,
    id: 1,
    channel_type: "sms",
  },
  {
    name: "interaction2",
    id: 2,
  },
  {
    name: "interaction3",
    flag: true,
    id: 3,
    channel_type: "digital connect",
  },
];

const Aside = () => {
  const storeSelectedInteraction = useSelectedInteraction(
    (state) => state.storeSelectedInteraction,
  );

  const selectInteraction = (i) => () => {
    storeSelectedInteraction(i);
  };

  return (
    <ul>
      {interactions.map((i) => (
        <li key={i.name} onClick={selectInteraction(i)}>
          {i.name}
        </li>
      ))}
    </ul>
  );
};

export default Aside;
