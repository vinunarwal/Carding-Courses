import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Products from "./components/Courses";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ProductDetails from "./components/CourseDetails";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Products />} />
        <Route path="/CourseDetails/:id" element={<ProductDetails />} />
        <Route path="/Features" element={<Features />} />
      </Routes>
      <Footer />
    </Router>

    // <Router>
    //   <div className="bg-gray-900 text-white">
    //     <Header />
    //     <Navbar />
    //     <Hero />

    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           <>
    //             <Products />
    //             <Features />
    //           </>
    //         }
    //       />

    //       <Route
    //         path="/product/:id"
    //         element={
    //           <>
    //             <Navbar />
    //             <ProductDetails />
    //           </>
    //         }
    //       />
    //     </Routes>

    //     <Footer />
    //   </div>
    // </Router>
  );
}

export default App;
