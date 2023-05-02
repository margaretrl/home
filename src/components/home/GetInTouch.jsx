import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message} <a className="text-decoration-none" href={`mailto:${email}`}>margaretrivaslutz@hotmail.com </a> 
        or <a className="text-decoration-none" href={`mailto:'mer20c@fsu.edu'`}>mer20c@fsu.edu </a>.
      </p>
    </>
  );
};

export default GetInTouch;
