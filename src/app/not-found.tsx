// /src/app/(routes)/not-found.tsx
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Button from "@/app/(components)/common/Button"; // update the import path as necessary
export default function NotFound() {

    return (
        <section
            className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-purple-50 via-indigo-50 to-white"
            aria-labelledby="not-found-title"
        >
            {/* Giant 404 with fade-in */}
            <h1
                id="not-found-title"
                className="text-[16vw] md:text-[10vw] text-indigo-700 font-black tracking-tighter drop-shadow-lg select-none animate-pulse"
            >
                404
            </h1>
            <p className="mt-4 text-3xl md:text-4xl font-bold text-gray-800 text-center">
                Oops! Page not found.
            </p>
            <p className="mt-2 max-w-lg text-lg text-gray-600 text-center mx-auto">
                The page you&apos;re looking for doesn&apos;t exist or may have been moved.<br />
                Check the URL or go back to the homepage.
            </p>


            {/* Custom Button inside Link—for navigation */}
            <Link href="/" passHref className="mt-8 w-full sm:w-auto">
                <Button
                    iconLeft={<FiArrowLeft className="w-5 h-5" />}
                    variant="primary"
                    size="md"
                    label="Back to Home"
                    fullWidth={false} // Not full, unless you want!
                    className="px-8"
                />
            </Link>

            {/* Decorative SVG Curve - large screens only */}
            <div className="hidden md:block absolute bottom-0 left-0 w-full z-[-1]">
                <svg viewBox="0 0 1440 320" className="w-full h-32">
                    <path
                        fill="#6366f1"
                        fillOpacity="0.07"
                        d="M0,320L80,288C160,256,320,192,480,176C640,160,800,192,960,197.3C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    />
                </svg>
            </div>
        </section>
    );
}