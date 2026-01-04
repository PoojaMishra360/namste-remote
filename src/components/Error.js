import React from "react";
import { useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
        <h1>404 - Page Not Found</h1>
        <h2>The page you are looking for does not exist.</h2>
        <h3>{error?.error.message} {error?.statusText}</h3>
    </div>
  )
}

export default Error
