import { Navigate } from "react-router-dom";
import Pokemon from "./components/pokemon";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import PokemonPage from "./pages/pokemonPage";

export const Routers = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/pokemon/:id",
    element: <PokemonPage />,
  },
  
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
