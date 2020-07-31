import Home from "../containers/home";
import Register from "../containers/register";
import Login from "../containers/login";
import Faq from "../containers/faq";
import Dashboard from "../containers/dashboard";
import Profile from "../containers/profile";
import Portofolio from "../containers/portofolio";
import Properti from "../containers/property";
import DetailProperti from "../containers/detail-property";
import Proyek from "../containers/proyek";
import Forgot from "../containers/forgot-password";
import Journey from "../containers/journey";
import AboutUs from "../containers/about-us";
import HowItWorks from "../containers/how-it-works";
import JourneyOne from "../containers/journey/journey-one-view";
import JourneyTwo from "../containers/journey/journey-two-view";
import JourneyThree from "../containers/journey/journey-three-view";
import JourneyFour from "../containers/journey/journey-four-view";
import JourneyFive from "../containers/journey/journey-five-view";
import JourneySix from "../containers/journey/journey-six-view";
import Logout from "../containers/logout";
import Checkout from "../containers/checkout";
import CheckoutSuccess from "../containers/checkout-success";

const routes = [
  {
    path: "/",
    component: Home,
    isPublic: true,
  },
  {
    path: "/how-it-works",
    component: HowItWorks,
    isPublic: true,
  },
  {
    path: "/register",
    component: Register,
    isPublic: true,
  },
  {
    path: "/faq",
    component: Faq,
    isPublic: true,
  },
  {
    path: "/login",
    component: Login,
    isPublic: true,
  },
  {
    path: "/logout",
    component: Logout,
    isPublic: true,
  },
  {
    path: "/forgot-password",
    component: Forgot,
    isPublic: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    isPublic: false,
  },
  {
    path: "/profile",
    component: Profile,
    isPublic: false,
  },
  {
    path: "/portofolio",
    component: Portofolio,
    isPublic: false,
  },
  {
    path: "/properti",
    component: Properti,
    isPublic: false,
  },
  {
    path: "/detail-properti/:slug?",
    component: DetailProperti,
    isPublic: false,
  },
  {
    path: "/proyek",
    component: Proyek,
    isPublic: false,
  },
  {
    path: "/journey",
    component: Journey,
    isPublic: false,
  },
  {
    path: "/journey-one",
    component: JourneyOne,
    isPublic: false,
  },
  {
    path: "/journey-two",
    component: JourneyTwo,
    isPublic: false,
  },
  {
    path: "/journey-three",
    component: JourneyThree,
    isPublic: false,
  },
  {
    path: "/journey-four",
    component: JourneyFour,
    isPublic: false,
  },
  {
    path: "/journey-five",
    component: JourneyFive,
    isPublic: false,
  },
  {
    path: "/journey-six",
    component: JourneySix,
    isPublic: false,
  },
  {
    path: "/about-us",
    component: AboutUs,
    isPublic: false,
  },
  {
    path: "/checkout/:slug?",
    component: Checkout,
    isPublic: false,
  },
  {
    path: "/checkout-success",
    component: CheckoutSuccess,
    isPublic: true,
  },
];

export default routes;
