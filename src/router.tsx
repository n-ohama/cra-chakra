import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/pages/home";
import { Login } from "./components/pages/login";
import { Page404 } from "./components/pages/page_404";
import { Setting } from "./components/pages/setting";
import { UserManagement } from "./components/pages/user_management";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={(props) => {
          const { match } = props;
          return (
            <Switch>
              {homeRoutes.map((route, index) => {
                const selfPath = match.url + route.path;
                return (
                  <Route key={index} exact={route.exact} path={selfPath}>
                    {route.children}
                  </Route>
                );
              })}
            </Switch>
          );
        }}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});

const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />,
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
