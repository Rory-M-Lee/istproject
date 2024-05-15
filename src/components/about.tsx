export function About() {
    return (
        <main className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-24 px-4 md:px-6">
            <section className="mb-12 md:mb-16 lg:mb-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Us</h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl lg:text-2xl max-w-3xl">
                    We are a team of passionate designers and developers who create beautiful and functional digital experiences.
                </p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                <div className="flex flex-col items-center text-center">
                    <img
                        alt="John Doe"
                        className="rounded-full mb-4"
                        height={120}
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "120/120",
                            objectFit: "cover",
                        }}
                        width={120}
                    />
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">John Doe</h3>
                    <p className="text-gray-500 dark:text-gray-400">Co-Founder, Designer</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img
                        alt="Jane Smith"
                        className="rounded-full mb-4"
                        height={120}
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "120/120",
                            objectFit: "cover",
                        }}
                        width={120}
                    />
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Jane Smith</h3>
                    <p className="text-gray-500 dark:text-gray-400">Co-Founder, Developer</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img
                        alt="Michael Johnson"
                        className="rounded-full mb-4"
                        height={120}
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "120/120",
                            objectFit: "cover",
                        }}
                        width={120}
                    />
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Michael Johnson</h3>
                    <p className="text-gray-500 dark:text-gray-400">Lead Developer</p>
                </div>
            </section>
            <section className="mt-12 md:mt-16 lg:mt-20">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Project</h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl lg:text-2xl max-w-3xl">
                    We are building a cutting-edge web application that helps businesses streamline their operations and improve
                    their bottom line. Our platform leverages the latest technologies and best practices to deliver a seamless
                    user experience.
                </p>
            </section>

            <footer className="border-t p-4 grid place-items-center text-sm gap-4 sm:flex-1/0">
                <div className="flex items-center gap-2">
                    <p className="font-medium text-white">© 2023 Gallery</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <TwitterIcon className="w-5 h-5" />
                        <span className="sr-only">Twitter</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <GithubIcon className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <DribbbleIcon className="w-5 h-5" />
                        <span className="sr-only">Dribbble</span>
                    </div>
                </div>
            </footer>
        </main>

    )
}

function DribbbleIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
            <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
            <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
        </svg>
    )
}


function GithubIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}


function HomeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function TwitterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}

