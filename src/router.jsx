import { createHashRouter } from "react-router";
import { HomePage } from "./pages/Home";
import { DriftPage } from "./pages/Drift";
import { TimeAttackPage } from "./pages/TimeAttack";
import { ForzaPage } from "./pages/Forza";
import { Page404 } from "./pages/Page404";
import App from "./App";

export const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
        {index: true, Component: HomePage},
        {path: "drift", Component: DriftPage},
        {path: "timeattack", Component: TimeAttackPage},
        {path: "forza", Component: ForzaPage},
        {path: "*", Component: Page404},
    ],
  },
]);