import Blog from "./Blog";
import BlogDetail from "./BlogDetail";

export const routes = [
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetail />,
  },
];