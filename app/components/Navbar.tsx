import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="bg-[#e94822] p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-[#2c2d34] no-underline hover:text-white">Vaidik. B.</Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                    <Link className="text-[#2c2d34] hover:text-white" href="https://">
                        <FaYoutube />
                    </Link>
                    <Link className="text-[#2c2d34] hover:text-white" href="https:///">
                        <FaLaptop />
                    </Link>
                    <Link className="text-[#2c2d34] hover:text-white" href="https://">
                        <FaGithub />
                    </Link>
                    <Link className="text-[#2c2d34] hover:text-white" href="https://">
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </nav>
    )
}