import Image from "next/image";

export default function Talents() {
    return (
        <>
            <nav className="absolute top-0 left-0 bg-black w-full z-10">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/" className="text-white">Gerrard</a>
                            </div>
                        </div>
                        <div className="md-block">
                            <div className="ml-4 flex items-center space-x-4">
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> Home</a>
                                <a href="/about" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> About Me</a>
                                <a href="/talents" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> Talents and Interests</a>
                                <a href="/projects" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> Projects</a>
                                <a href="/skills" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> Skills</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Image
                src="/images/gerrardsss.png"
                alt="Picture of the author"
                width={1200}
                height={1000}
                className="h-lvh w-screen blur-lg"
            />
            <div className=" absolute inset-0 flex justify-center items-center h-screen">
                <div className="bg-white bg-opacity-60 p-6 rounded-lg max-w-md text-center">
                    <div className="flex flex-row items-center justify-center">
                        <Image
                            src="/images/monitor.png"
                            alt="interest"
                            width={50}
                            height={50}
                            className="pb-2"
                        />
                        <h2 className="text-2xl font-bold mb-3 pl-2"> Projects!</h2>
                    </div>
                    <div className="flex flex-col text-left">
                    <a href="https://github.com/Henshou/Live_Face_Recognition.git" className=" text-blue-700 underline underline-offset-2 mb-2">1. Tubes 1 Pengkom: Live Face Recognition with OpenCV</a>
                    <a href="https://github.com/Henshou/Tugas-Besar-2-Pengkom-Data-Analysis.git" className=" text-blue-700 underline underline-offset-2 mb-2">2. Tubes 2 Pengkom: Data Analysis</a>
                    <a href="https://github.com/Henshou/Hands-On-GIM.git" className=" text-blue-700 underline underline-offset-2 mb-2">3. Hands-On GIM: Oyen Rush</a>
                    <a href="https://github.com/Henshou/SPARTA-2023.git" className=" text-blue-700 underline underline-offset-2 mb-2">4. Hands-On Software Engineering SPARTA: Portofolio Website</a>
                    </div>
                </div>
            </div>
        </>
    )
}