import React from "react";
import Button from "../Button";

const Error = () => {
  return (
    <div className="error">
      <div className="inner-error">
        <figure>
          <img
            src="https://furns-react.netlify.app/nextimg/%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Ferror.0672af5af2ef9ab963f625fb9f516af2.png/640/75?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Ferror.0672af5af2ef9ab963f625fb9f516af2.png&w=640&q=75"
            alt="error img"
          />
        </figure>

        <h2>That Page Can’t be found!</h2>
        <p>It looks like nothing was found at this location.</p>
        <Button type={"orange"} url={"/"}>
          back to home
        </Button>
      </div>
    </div>
  );
};

export default Error;
