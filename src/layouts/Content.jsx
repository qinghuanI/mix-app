import useSelectedInteraction from "../stores/index.js";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import { MemoryRouter } from "react-router-dom";
import { useEffect } from "react";

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

function Example(props) {
  const location = useLocation();

  console.log(location, ";;;;");
  return <div>{props.curInteraction?.channel_type}</div>;
}

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
      <Route
        path={`/interaction/:id`}
        element={<Example curInteraction={curInteraction} />}
      ></Route>
    </Routes>
  );
}
