import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast, ToastContentProps } from "react-toastify";

import ScrollToTop from "./ScrollToTop";
import { PropsFromRedux } from ".";
import Layout from "../components/Layout";
import ErrorPage from "../pages/Error/Error";
import Home from "../pages/Home";
import Game from "../pages/Game";
import Start from "../pages/Start";
import Rules from "../pages/Rules";
import "react-toastify/dist/ReactToastify.min.css";
import * as serviceWorker from "../serviceWorker";

interface RefrestToastProps extends ToastContentProps {
  action: () => void;
}

const RefreshToast = ({ closeToast, action }: RefrestToastProps) => {
  const close = () => {
    action();
    closeToast && closeToast();
  };
  return (
    <div>
      New updates available
      <button onClick={close}>Reload</button>
    </div>
  );
};

const Routes: React.FC<PropsFromRedux> = () => {
  const [newVersionAvailable, setNewVersionAvailable] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<any>({
    postMessage: (message: any) => message,
  });

  const onServiceWorkerUpdate = (registration: ServiceWorkerRegistration) => {
    setWaitingWorker(registration?.waiting);
    if (registration) setNewVersionAvailable(true);
  };

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      serviceWorker.register({ onUpdate: onServiceWorkerUpdate });
    }
  }, []);

  useEffect(() => {
    const updateServiceWorker = () => {
      waitingWorker && waitingWorker.postMessage({ type: "SKIP_WAITING" });
      setNewVersionAvailable(false);
      window.location.reload();
    };

    const notify = () =>
      toast(
        ({ closeToast, toastProps }: RefrestToastProps) => (
          <RefreshToast
            closeToast={closeToast}
            toastProps={toastProps}
            action={updateServiceWorker}
          />
        ),
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: false,
        }
      );
    if (newVersionAvailable) {
      notify();
    }
    return () => {
      toast.dismiss();
    };
  }, [newVersionAvailable, waitingWorker]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ToastContainer />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/rules">
          <Layout component={<Rules />} />
        </Route>
        <Route path="/new-game">
          <Layout component={<Start />} />
        </Route>
        <Route path="/game/:gameId">
          <Layout component={<Game />} />
        </Route>
        <Route>
          <Layout
            component={
              <ErrorPage
                error="404"
                description="The page you are looking for does not exist"
              />
            }
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
