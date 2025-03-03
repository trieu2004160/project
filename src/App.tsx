import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./page/Homepage/Home";
import FindJob from "./page/Findjob/Findjob";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-job" element={<FindJob />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
