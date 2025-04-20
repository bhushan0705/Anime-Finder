import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import DetailPage from "./pages/DetailPage";
import useFetchApi from "./constant/useFetchApi";
import SearchResult from "./pages/SearchResult";
import Page404 from "./pages/Page404";
import AboutPage from "./pages/AboutPage";
import ConnectionLost from "./components/ConnectionLost";

function App() {
  useFetchApi();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path=":explore" element={<ExplorePage />}></Route>
        <Route path=":explore/:id" element={<DetailPage />}></Route>
        <Route path="/searchresults" element={<SearchResult />} />
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>

      <ConnectionLost />
    </>
  );
}

export default App;
