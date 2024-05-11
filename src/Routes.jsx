import React from "react";
import { useRoutes } from "react-router-dom";
import Website from "pages/Website";
import Form from "pages/Form";
import Success from "pages/Success";

const ProjectRoutes = () => {
  let element = useRoutes([
 
    {
      path: "/",
      element: <Website />,
    },
    {
      path: "form",
      element: <Form />,
    },
 
    {
      path: "success",
      element: <Success />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
