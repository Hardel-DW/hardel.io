import ReactDOM from "react-dom/client";
import Home from "@/components/home/Home";
import Layout from "@/components/layout/Layout";
import NotFound from "@/components/layout/NotFound";
import "./globals.css";

const root = document.getElementById("root");
const isHome = window.location.pathname === "/" || window.location.pathname === "/index.html";

if (root) {
    document.title = isHome ? "Hardel · Minecraft developer" : "Chunk not found · Hardel";
    ReactDOM.createRoot(root).render(<Layout>{isHome ? <Home /> : <NotFound />}</Layout>);
}
