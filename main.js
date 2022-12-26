import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import smudge1avif from "./images/smudge1.avif";
import smudge1jpg from "./images/smudge1.jpg";
import smudge2avif from "./images/smudge2.avif";
import smudge2jpg from "./images/smudge2.jpg";
import smudge3avif from "./images/smudge5.avif";
import smudge3jpg from "./images/smudge5.jpg";
import smudge4avif from "./images/smudge6.avif";
import smudge4jpg from "./images/smudge6.jpg";

const App = () => {
  const navigate = useNavigate();

  const DisplayFullImage = (path) => {
    if (!document.startViewTransition) {
      navigate(path);
    } else {
      document.startViewTransition(() => navigate(path));
    }
  };
  return (
    <>
      <div>
        <h1 style={{display: 'flex', justifyContent: 'center'}}>Smudge The Beagle</h1>

        <div style={{display: 'flex', justifyContent: 'space-around', 
        alignItems: 'center', height: '80vh'}}>
          <img
            src={smudge1avif}
            style={{ viewTransitionName: "smudge1", contain: "layout" }}
            onClick={() => DisplayFullImage("/smudge1")}
            width="200px"
          ></img>
          <img
            src={smudge2avif}
            style={{ viewTransitionName: "smudge2", contain: "layout" }}
            onClick={() => DisplayFullImage("/smudge2")}
            width="200px"
          ></img>
          <img
            src={smudge3avif}
            style={{ viewTransitionName: "smudge3", contain: "layout" }}
            onClick={() => DisplayFullImage("/smudge3")}
            width="200px"
          ></img>
          <img
            src={smudge4avif}
            style={{ viewTransitionName: "smudge4", contain: "layout" }}
            onClick={() => DisplayFullImage("/smudge4")}
            width="200px"
          ></img>
        </div>
      </div>
    </>
  );
};

const Smudge1 = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <picture style={{ viewTransitionName: "smudge1", contain: "layout" }}>
          <source srcSet={smudge1avif} width="600px"></source>
          <source srcSet={smudge1jpg} width="600px"></source>
          <img src={smudge1jpg} width="600px"></img>
        </picture>
      </div>
    </>
  );
};

const Smudge2 = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <picture style={{ viewTransitionName: "smudge2", contain: "layout" }}>
          <source srcSet={smudge2avif} width="600px" type="image/avif"></source>
          <source srcSet={smudge2jpg} width="600px" type="image/jpeg"></source>
          <img src={smudge2jpg} width="100px"></img>
        </picture>
      </div>
    </>
  );
};

const Smudge3 = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <picture style={{ viewTransitionName: "smudge3", contain: "layout" }}>
          <source srcSet={smudge3avif} width="600px"></source>
          <source srcSet={smudge3jpg} width="600px"></source>
          <img src={smudge3jpg}></img>
        </picture>
      </div>
    </>
  );
};

const Smudge4 = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <picture style={{ viewTransitionName: "smudge4", contain: "layout" }}>
          <source srcSet={smudge4avif} width="600px"></source>
          <source srcSet={smudge4jpg} width="600px"></source>
          <img src={smudge4jpg} width="600px"></img>
        </picture>
      </div>
    </>
  );
};

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/smudge1", element: <Smudge1 /> },
  { path: "/smudge2", element: <Smudge2 /> },
  { path: "/smudge3", element: <Smudge3 /> },
  { path: "/smudge4", element: <Smudge4 /> },
]);

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
