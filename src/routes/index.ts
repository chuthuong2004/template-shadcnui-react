// Layouts

// Pages
import HeaderOnly from "@/layouts/HeaderOnly";
import {
  AboutPage,
  HelpCenterPage,
  HomePage,
  NotFoundPage,
  ProfilePage,
} from "@/pages";
import React, { ReactNode } from "react";
type routeType = {
  path: string;
  component: React.FC<any>;
  layout?: React.FC<{ children: ReactNode }> | null;
  private?: boolean;
};
// public routes
const routes: Array<routeType> = [
  {
    path: "/",
    // component: lazy(() => import("@/pages/home")),
    component: HomePage,
  },
  {
    path: "/about",
    // component: lazy(() => import("@/pages/about")),
    component: AboutPage,
  },
  {
    path: "/help-center",
    // component: lazy(() => import("@/pages/help-center")),
    component: HelpCenterPage,
    layout: HeaderOnly,
  },

  {
    path: "/profile",
    // component: lazy(() => import("@/pages/profile")),
    component: ProfilePage,
    layout: null,

    private: true,
  },
  {
    path: "*",
    // component: lazy(() => import("@/pages/not-found")),
    component: NotFoundPage,
  },
];
export { routes };
