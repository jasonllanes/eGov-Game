import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import { Suspense, lazy } from "react";

import NotFound from "./screens/notFound";
import Loader from './components/loader/loader.tsx';

// const Page1= lazy(() =>
//   wait(1300).then(() => import("./screens/page1.tsx"))
// );

// const Page2= lazy(() =>
//   wait(1300).then(() => import("./screens/page2.tsx"))
// );



const GameTwo = lazy(() =>
  wait(1300).then(() => import("./screens/game_two_floppy/MainPageFlappyBird.tsx"))
);

const GameOne = lazy(() =>
  wait(1300).then(() => import("./screens/game_one_mine/MainPage.tsx"))
);

const MainPage = lazy(() =>
  wait(2300).then(() => import("./screens/choose_game.tsx"))
);


const router = createBrowserRouter([
  {
    path: "/eGov-Game",
    element: <Navigate to="/eGov-Game/main-page" />,
  },
  {
    path: "/eGov-Game/main-page",
    element: <>
      <Suspense fallback={<Loader />}>
        <MainPage />
      </Suspense>
    </>,
  },

  {
    path: "/eGov-Game/game-one",
    element: <>
      <Suspense fallback={<Loader />}>
        <GameOne />
      </Suspense>
    </>,
  },
  {
    path: "/eGov-Game/game-two",
    element: <>
      <Suspense fallback={<Loader />}>
        <GameTwo />
      </Suspense>
    </>,
  },


  {
    path: "*",
    element: <NotFound />,
  },
]);

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
