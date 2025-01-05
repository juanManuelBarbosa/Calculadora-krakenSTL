import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calculator from "../Components/Cost Calculator/CalculatorContainer";
import CalculatorDocumentation from "../Components/Cost Calculator/CalculatorDocumentation";
import Error404 from "../Components/Error404";

const MyRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Calculator />,
    },
    {
      path: "/calculadora-Documentacion",
      element: <CalculatorDocumentation />,
    },
    {
      path: "*",  // Página de error 404 para rutas no encontradas
      element: <Error404 />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MyRoutes;
