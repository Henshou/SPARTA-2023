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
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> Projects</a>
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> Skills</a>
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
                            src="/images/interest.png"
                            alt="interest"
                            width={50}
                            height={50}
                            className="pb-2"
                        />
                        <h2 className="text-2xl font-bold mb-3 pl-2"> Minat dan Bakat</h2>
                    </div>
                    <p className="text-gray-700">
                        Namaku Samuel Gerrard Hamonangan Girsang, biasa dipanggil Gerrard. Aku adalah anak ketiga dari tiga bersaudara.
                        Aku memiliki minat di bidang informatika terutama di bidang Web Development, aku juga sedang tertarik dengan bidang
                        Cybersecurity. Hobbyku adalah doomscrolling instagram reels, bermain game, dan menonton apapun jenis medianya.
                    </p>
                </div>
            </div>
        </>
    )
}