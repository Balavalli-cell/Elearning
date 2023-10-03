import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
const Landing = lazy(()=> import("../views/ui/Landing/Landing.js"));
/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const CMeetingDetails = lazy(() => import("../views/ui/Meet/CompletedMeetings.js"));
const MeetingDetail = lazy(() => import("../views/ui/Meet/MeetingDetail.js"));
const EditMeet = lazy(() => import("../views/ui/Meet/EditMeet.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Profileform = lazy(() => import("../views/ui/Profileform"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/FullLayout",
    element: <FullLayout />,
    children: [
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/CMeetingDetails", exact: true, element: <CMeetingDetails /> },
      { path: "/EditMeet", exact: true, element: <EditMeet /> },
      { path: "/MeetingDetail", exact: true, element: <MeetingDetail /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/Profileform", exact: true, element: <Profileform /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

const AppRoutes = () => {
  // Check if the user is authenticated (you need to implement this logic)
  const isAuthenticated = true; // Set to true if the user is authenticated, false otherwise

  return (
    <Routes>
      {/* Landing page route */}
      <Route path="/" element={<Landing />} />

      {/* If the user is authenticated, redirect to FullLayout */}
      {isAuthenticated && <Navigate to="/FullLayout" />}

      {/* FullLayout route */}
      <Route
        path="/FullLayout"
        element={
          isAuthenticated ? (
            <FullLayout>
              {/* FullLayout child routes */}
              <Route path="starter" element={<Starter />} />
              {/* ... other FullLayout child routes ... */}
            </FullLayout>
          ) : (
            <Navigate to="/" /> // Redirect to landing page if not authenticated
          )
        }
      />

      {/* Include your ThemeRoutes */}
      {ThemeRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            isAuthenticated ? (
              route.element
            ) : (
              <Navigate to="/" /> // Redirect to landing page if not authenticated
            )
          }
        >
          {route.children && route.children.map((childRoute, childIndex) => (
            <Route
              key={childIndex}
              path={childRoute.path}
              element={
                isAuthenticated ? (
                  childRoute.element
                ) : (
                  <Navigate to="/" /> // Redirect to landing page if not authenticated
                )
              }
            />
          ))}
        </Route>
      ))}
    </Routes>
  );
};

export default AppRoutes;
