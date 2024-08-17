import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import ProvateRoute from "./ProvateRoute";
import Profile from "../Pages/MyProfile/Profile";
import BuyGold from "../Pages/InteractionPage/BuyGold";
import SellGold from "../Pages/InteractionPage/SellGold";
import Transaction from "../Pages/InteractionPage/Transaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/profile",
        element: (
          <ProvateRoute>
            <Profile></Profile>
          </ProvateRoute>
        ),
      },
      {
        path: "/buy",
        element: (
          <ProvateRoute>
            <BuyGold></BuyGold>
          </ProvateRoute>
        ),
      },
      {
        path: "/sell",
        element: (
          <ProvateRoute>
            <SellGold></SellGold>
          </ProvateRoute>
        ),
      },
      {
        path: "/transaction",
        element: (
          <ProvateRoute>
            <Transaction></Transaction>
          </ProvateRoute>
        ),
      },
    ],
  },
]);

export default router;
