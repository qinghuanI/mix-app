import useSelectedInteraction from "../stores/index.js";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { memo } from "react";
import { MemoryRouter } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";

const Content = () => {
  const curInteraction = useSelectedInteraction(
    (state) => state.curInteraction,
  );
  return (
    <>
      {curInteraction.flag ? (
        <MemoryRouter>
          <div>这是 dce channel</div>
          <RouterContainer />
        </MemoryRouter>
      ) : (
        <div>这是 voice channel</div>
      )}
    </>
  );
};

export default Content;

// eslint-disable-next-line react/prop-types
const Example = ({ curInteraction }) => {
  const location = useLocation();

  console.log(location, ";;;;");
  return <div>{curInteraction?.channel_type}</div>;
};

Example.propType = {
  curInteraction: PropTypes.object,
};

function RouterContainer() {
  const curInteraction = useSelectedInteraction(
    (state) => state.curInteraction,
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (curInteraction.flag) {
      navigate(`/interaction/${curInteraction.id}`);
    }
  }, [curInteraction.flag, curInteraction.id, navigate]);

  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route
        path={`/interaction/:id`}
        element={<Example curInteraction={curInteraction} />}
      />
    </Routes>
  );
}
