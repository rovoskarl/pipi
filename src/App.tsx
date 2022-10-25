/* eslint-disable jsx-a11y/anchor-is-valid */
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { Auth } from "./Auth";
import { useState } from "react";

function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="App">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {new Array(10).fill(1).map((_, index) => {
          return (
            <>
              <a
                data-lg-size="500-500"
                className="gallery-item"
                data-src={require(`./images/${index + 1}.JPG`)}
              >
                <img
                  alt=""
                  className="img-responsive"
                  src={require(`./images/${index + 1}.JPG`)}
                />
              </a>
            </>
          );
        })}
      </LightGallery>
    </div>
  );
}

function App() {
  const [auth, setAuth] = useState("");
  return <>{auth === "000103" ? <Gallery /> : <Auth setAuth={setAuth} />}</>;
}

export default App;
