import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div>
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="dark" />
    </div>
  );
};

export default LoadingSpinner;
