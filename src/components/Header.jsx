import { useState, useEffect } from "react";
import TWCSS from "../assets/icons/tailwindcss.png";
import vb from "../assets/icons/vb.png";
import nodeJS from "../assets/icons/node.png";
import profileImage from "../assets/profile-win.png";
import "../assets/js/wave.js";






function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("Home"); 
    const [repositories, setRepositories] = useState([]);


    

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const loadPage = (page) => {
        setContent(page); 
    };

    // Fetch repositories when "Projects" section is selected
  useEffect(() => {
    if (content === "Projects") {
      fetch("https://api.github.com/users/rootasuser/repos?type=public")
        .then((response) => response.json())
        .then((data) => {
          setRepositories(data);
        })
        .catch((error) => console.error("Error fetching repositories:", error));
    }
  }, [content]);



  
    return (
        <>
            <header className="bg-teal-950 py-4">
                <nav className="flex justify-between items-center w-[90%] mx-auto">
                    {/* Logo */}
                    <div className="text-white font-bold text-green-700">WinDev</div>

                    {/* Menu Button for Mobile */}
                    <button
                        className={`text-white text-2xl md:hidden transition-transform duration-300 ${
                            isOpen ? "rotate-90" : ""
                        }`}
                        onClick={toggleMenu}
                    >
                        ☰
                    </button>

                    {/* Navigation Links */}
                    <div
                        className={`nav-links fixed top-0 right-0 h-full bg-green-700 text-white transform md:static md:flex md:items-center md:bg-transparent md:translate-x-0 ${
                            isOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-500 ease-in-out`}
                    >
                        {/* Close Button for Mobile */}
                        <button
                            className="text-white text-2xl absolute top-4 right-4 md:hidden"
                            onClick={toggleMenu}
                        >
                            ✕
                        </button>

                        {/* Links */}
                        <ul className="flex flex-col md:flex-row md:gap-8 gap-8 p-10 md:p-0 md:ml-auto">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-gray-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                                    onClick={() => loadPage("Home")}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-gray-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                                    onClick={() => loadPage("About")}
                                >
                                    About
                                </a>
                            </li>
                    
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-gray-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                                    onClick={() => loadPage("Contact")}
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-gray-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                                    onClick={() => loadPage("Projects")}
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Dynamic Content */}
            <main id="contents" className="py-16">

                 {content === "Home" && (
                    <div className="text-center">
                        {/* Profile Image */}
                        <div className="flex justify-center">
                            <div className="relative w-32 h-32">
                                <img
                                    src={profileImage} 
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full border-4 border-green-500 shadow-lg"
                                />
                                <div className="border-spin absolute inset-0 rounded-full"></div>
                            </div>
                        </div>


                       {/* Subtitle */}
                                <div className="mt-3 text-4xl font-bold text-white">
                                    WinDev
                                </div>
                            <h1 className="mt-4 text-xs font-bold text-white wave-text">
                            
                            <span>F</span>
                            <span>r</span>
                            <span>o</span>
                            <span>n</span>
                            <span>t</span>
                            <span>-</span>
                            <span>e</span>
                            <span>n</span>
                            <span>d</span>
                            <span> </span> {/* For the space */}
                            <span>/</span>
                            <span> </span> {/* For the space */}
                            <span>B</span>
                            <span>a</span>
                            <span>c</span>
                            <span>k</span>
                            <span>e</span>
                            <span>n</span>
                            <span>d</span>
                            <span> </span> {/* For the space */}
                            <span>D</span>
                            <span>e</span>
                            <span>v</span>
                            <span>e</span>
                            <span>l</span>
                            <span>o</span>
                            <span>p</span>
                            <span>e</span>
                            <span>r</span>
                            </h1>

                       {/* Social Media Links */}
                       <div className="flex justify-center gap-6 mt-6">
                        <a
                            href="https://github.com/rootasuser"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-green-600 transition transform hover:scale-110"
                        >
                            <i className="fab fa-github text-3xl"></i>
                        </a>

                        <a
                            href="https://www.facebook.com/windeltortuganavales"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-green-600 transition transform hover:scale-110"
                        >
                            <i className="fab fa-facebook text-3xl"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/windel-navales-5a52652a7/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-green-600 transition transform hover:scale-110"
                        >
                            <i className="fab fa-linkedin text-3xl"></i>
                        </a>

                        <a
                            href="https://www.tiktok.com/@iamwen08"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-green-600 transition transform hover:scale-110"
                        >
                            <i className="fab fa-tiktok text-3xl"></i>
                        </a>

                        <a
                            href="https://www.youtube.com/@programming_iq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-green-600 transition transform hover:scale-110"
                        >
                            <i className="fab fa-youtube text-3xl"></i>
                        </a>

                        <a
                            href="mailto:windelnavales08@gmail.com"
                            className="text-white hover:text-green-600 transition transform hover:scale-110"
                        >
                            <i className="fas fa-envelope text-3xl"></i>
                        </a>
                        </div>
                    </div>
                )}


                {content === "About" && (
                <div className="px-8 py-12 text-center animate-slideIn">
                    {/* Heading */}
                    <h1 className="text-xl md:text-2xl font-bold text-white mb-6">
                    About Me
                    </h1>

                    {/* Educational Background */}
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                    Bachelor of Science in Industrial Technology, majoring in Computer Technology, graduated at
                    <span className="font-semibold text-zinc-400">
                        {" "}Negros Oriental State University - Bayawan City
                    </span>. 
                    Gained practical experience as a programmer while completing On-the-Job Training at a School Division Office - ICT Office. This opportunity provided hands-on exposure to real-world programming challenges and honed my technical skills.
                    </p>

                    {/* Techstack Section */}
                    <div className="text-left mt-8">
                    <hr className="mb-2" />
                    {/* Section Title */}
                    <h2 className="text-lg text-center md:text-xl font-semibold text-white mb-6">
                        Techstack
                    </h2>

                    {/* Techstack Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Front-End Card */}
                        <div className="bg-blue-950 p-6">
                        <h3 className="text-md md:text-lg font-semibold text-white mb-4 text-center">
                            Front-End
                        </h3>
                        <div className="flex gap-4 flex-wrap justify-center items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-10 h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-10 h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS" className="w-10 h-10" />
                            <img src={TWCSS} alt="TailwindCSS" className="w-10 h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="Bootstrap 5" className="w-10 h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jQuery" className="w-10 h-10" />
                        </div>
                        </div>

                        {/* Back-End Card */}
                        <div className="bg-blue-950 p-6">
                        <h3 className="text-md md:text-lg font-semibold text-white mb-4 text-center">
                            Back-End
                        </h3>
                        <div className="flex gap-4 flex-wrap justify-center items-center">
                            <img src={nodeJS} alt="NodeJS" className="w-10 h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-10 h-10" />
                        </div>
                        </div>

                        {/* Database Card */}
                        <div className="bg-blue-950 p-6">
                        <h3 className="text-md md:text-lg font-semibold text-white mb-4 text-center">
                            Database
                        </h3>
                        <div className="flex gap-4 flex-wrap justify-center items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-10 h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL 2022" className="w-10 h-10" />
                        </div>
                        </div>

                        {/* Desktop Application Card */}
                        <div className="bg-blue-950 p-6">
                        <h3 className="text-md md:text-lg font-semibold text-white mb-4 text-center">
                            Desktop Application
                        </h3>
                        <div className="flex gap-4 flex-wrap justify-center items-center">
                            <img src={vb} alt="Visual Basic.NET" className="w-10 h-10" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                )}

                    {content === "Contact" && (
                    <div className="flex justify-center items-center px-6 py-3">
                        <div className="bg-white text-gray-700 p-8 rounded-lg shadow-md w-full max-w-md">
                        {/* Heading */}
                        <h1 className="text-xl md:text-2xl font-bold mb-6 text-center">Contact Us</h1>
                        <hr />

                        {/* Form */}
                        <form id="contact-form" className="space-y-6">
                            {/* Email Input */}
                            <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 text-sm text-black rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                                required
                            />
                            </div>

                            {/* Title Input */}
                            <div>
                            <label htmlFor="title" className="block text-sm font-medium mb-2">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Enter the title"
                                className="w-full px-4 py-2 text-sm text-black rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                                required
                            />
                            </div>

                            {/* Description Textarea */}
                            <div>
                            <label htmlFor="description" className="block text-sm font-medium mb-2">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Enter your message"
                                rows="4"
                                className="w-full px-4 py-2 text-sm text-black rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                                required
                            ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium text-white transition duration-200"
                            >
                            Submit
                            </button>
                        </form>
                        </div>
                    </div>
                    )}

            {content === "Projects" && (
            <div className="px-8 py-12 text-center animate-slideIn">
                {/* Heading */}
                <h1 className="text-xl md:text-2xl font-bold text-white mb-6">
                My GitHub Projects
                </h1>

                {/* Repository Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {repositories.length > 0 ? (
                    repositories.map((repo) => (
                    <div
                        key={repo.id}
                        className="bg-blue-950 p-6 rounded-lg shadow-lg"
                    >
                        <h2 className="text-lg font-semibold text-white mb-4 text-center">
                        {repo.name}
                        </h2>
                        <p className="text-white text-sm mb-4">{repo.description}</p>

                        {/* GitHub Link and Direct Download */}
                        <div className="flex justify-center gap-4">
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:underline flex items-center"
                        >
                            <i className="fab fa-github mr-2"></i> View on GitHub
                        </a>

                        {/* Direct Download Link */}
                        <a
                            href={`${repo.html_url}/archive/refs/heads/main.zip`}  // Adjust branch if needed
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline flex items-center"
                        >
                            <i className="fas fa-download mr-2"></i> Download Repository
                        </a>
                        </div>
                    </div>
                    ))
                ) : (
                    <p className="text-white">No repositories found</p>
                )}
                </div>
            </div>
            )}


            </main>
        </>
    );
}

export default Header;
