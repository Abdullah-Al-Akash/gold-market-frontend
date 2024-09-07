import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/MyProfile/Profile";
import BuyGold from "../Pages/InteractionPage/BuyGold";
import SellGold from "../Pages/InteractionPage/SellGold";
import Transaction from "../Pages/InteractionPage/Transaction";
import AdminPanel from "../Pages/AdminPanel/AdminPanel";
import UpdateGoldRate from "../Pages/AdminPanel/UpdateGoldRate/UpdateGoldRate";
import AdminUserList from "../Pages/AdminPanel/UserList/AdminUserList";
import AdminUpdateGoldRate from "../Pages/AdminPanel/UpdateGoldRate/AdminUpdateGoldRate";
import AdminRequest from "../Pages/AdminPanel/Request/AdminRequest";
import AdminReport from "../Pages/AdminPanel/AdminReport/AdminReport";

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
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/buy",
        element: (
          <PrivateRoute>
            <BuyGold></BuyGold>
          </PrivateRoute>
        ),
      },
      {
        path: "/sell",
        element: (
          <PrivateRoute>
            <SellGold></SellGold>
          </PrivateRoute>
        ),
      },
      {
        path: "/transaction",
        element: (
          <PrivateRoute>
            <Transaction></Transaction>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/users",
        element: 
          <PrivateRoute>
            <AdminUserList></AdminUserList>
          </PrivateRoute>
      },
      {
        path: "admin/update-gold-rate",
        element: <PrivateRoute>
          <AdminUpdateGoldRate></AdminUpdateGoldRate>
        </PrivateRoute>
      },
      {
        path: "admin/request",
        element: <PrivateRoute>
          <AdminRequest></AdminRequest>
        </PrivateRoute>
      },
      {
        path: "admin/report",
        element: <PrivateRoute>
          <AdminReport></AdminReport>
        </PrivateRoute>
      }
    ]
  },
  {
    path: "profile",
    element: <PrivateRoute>
      <AdminPanel></AdminPanel>
    </PrivateRoute>,
    children: [
      
      {
      path: "admin/update-gold-rate",
      element: <PrivateRoute>
        <UpdateGoldRate></UpdateGoldRate>
      </PrivateRoute>
    },
  ]
  }
]);

export default router;
