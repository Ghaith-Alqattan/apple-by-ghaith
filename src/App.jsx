import { lazy, Suspense } from 'react';
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// Lazy load components that are below the fold
const ProductViewer = lazy(() => import("./components/ProductViewer.jsx"));
const Showcase = lazy(() => import("./components/Showcase.jsx"));
const Performance = lazy(() => import("./components/Performance.jsx"));
const Features = lazy(() => import("./components/Features.jsx"));
const Highlights = lazy(() => import("./components/Highlights.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

// Fallback component for lazy-loaded sections
const LazyFallback = () => <div className="h-screen flex items-center justify-center" />;

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <Suspense fallback={<LazyFallback />}>
                <ProductViewer />
            </Suspense>
            <Suspense fallback={<LazyFallback />}>
                <Showcase />
            </Suspense>
            <Suspense fallback={<LazyFallback />}>
                <Performance />
            </Suspense>
            <Suspense fallback={<LazyFallback />}>
                <Features />
            </Suspense>
            <Suspense fallback={<LazyFallback />}>
                <Highlights />
            </Suspense>
            <Suspense fallback={<LazyFallback />}>
                <Footer />
            </Suspense>
        </main>
    )
}

export default App
