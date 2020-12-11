import { useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const isDrawerRoute = useRouteMatch("/offers/:status/:userId/:offerId/file");
  const isModalRoute = useRouteMatch("/offers/:status/:userId/:offerId/file");
  const isTableRoute = useRouteMatch("/offers/:status");

  useEffect(() => {
    if (!(isDrawerRoute || isTableRoute || isModalRoute)) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [isDrawerRoute, isModalRoute, isTableRoute, pathname]);

  return null;
}
