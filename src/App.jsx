import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utilities/Store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainVideoContainer from "./components/MainVideoContainer";
import WatchPage from "./components/WatchPage";
import Results from "./components/Results";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainVideoContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <Results />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter}/>
      </Provider>
    </>
  );
}

export default App;
