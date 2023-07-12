import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Classest from "./components/pages/Classest";
import Blog from "./components/pages/Blog";
import Gallery from "./components/pages/Gallery";
import Contacts from "./components/pages/Contacts";
import RegisterPage from "./components/theme/assets/RegisterPage/RegisterPage";
import BlogSingle from "./components/theme/assets/Blog/BlogSingle/BlogSingle";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classest />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/blog-single" element={<BlogSingle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
