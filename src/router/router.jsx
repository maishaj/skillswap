import Homelayout from "../layout/Homelayout";
import ToyCard from "../components/ToyCard";
import ToyCarAndVehicles from "../components/ToyCarAndVehicles";
import SkillDetails from "../components/SkillDetails";
import { createBrowserRouter } from "react-router";
import SkillDetailslayout from "../layout/SkillDetailslayout";
import Authlayout from "../layout/Authlayout";
import Login from "../components/Login";
import Register from "../components/Register";
import Error from "../components/Error";
import PrivateRoute from "../provider/PrivateRoute";
import Profile from "../components/Profile";
import Profilelayout from "../layout/Profilelayout";
import ForgotPassword from "../components/ForgotPassword";
import ForgotPasswordLayout from "../layout/ForgotPasswordLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children: [
      {
        path: "category/:skillId",
        element: <ToyCard></ToyCard>,
      },
      {
        path: "category/:providerId",
        element: <ToyCarAndVehicles></ToyCarAndVehicles>,
      },
    ],
  },
  {
    path: "/skill-details/:skillId",
    element: 
    <PrivateRoute>
      <SkillDetailslayout></SkillDetailslayout>
    </PrivateRoute>
  },
  {
    path:"/auth",
    element:<Authlayout></Authlayout>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/register",
        element:<Register></Register>
      },
    ]
  },
  {
     path:"/profile",
     element:
     <PrivateRoute>
        <Profilelayout></Profilelayout>
     </PrivateRoute>
  },
  {
      path:"/forgot-password",
      element:<ForgotPasswordLayout></ForgotPasswordLayout>
  },
  {
    path:"/*",
    element:<Error></Error>
  }
]);

export default router;
