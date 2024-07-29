import { useRoutes } from "react-router-dom";
import { routeData } from "../../../constants/data";

// routes configuration

const RootRoutes = () => {
  return useRoutes(routeData);
};

export default RootRoutes;
