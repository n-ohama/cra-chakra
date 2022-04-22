import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import { HeaderLayout } from "./components/common/header_layout";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Page404 } from "./pages/page_404";
import { Setting } from "./pages/setting";
import { UserManagement } from "./pages/user_management";

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
                    <HeaderLayout>{route.children}</HeaderLayout>
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
