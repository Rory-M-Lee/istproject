import Link from "next/link"

// Define the props for the Image component using an interface
interface ImageProps {
    alt: string;
    src: string;
    width: number;
    height: number;
    title: string;
    author: string;
    description: string;
}

// Define the Image component with typed props
const Image: React.FC<ImageProps> = ({ alt, src, width, height, title, author, description }) => {
    return (
        <div className="relative group overflow-hidden rounded-lg">
            <img
                alt={alt}
                className="aspect-video object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                height={height}
                src={src}
                width={width}
            />
            <h3 className="font-semibold mt-2 group-hover:underline text-white">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{author}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                {description}

            </p>
        </div>
    );
};


export function Home() {
    return (
        <div className="dark">
            <main className="flex-1 dark:bg-gray-800">
                <div className="grid md:grid-cols-2 gap-4 p-4 md:p-6">
                    <div className="grid gap-4">
                        <Image alt="1984 Cover" src="https://example.com/1984-cover.jpg" width={600} height={400} title="1984" author="George Orwell" description="A dystopian social science fiction novel and cautionary tale of totalitarian society." />

                        <Image alt="To Kill a Mockingbird Cover" src="https://example.com/mockingbird-cover.jpg" width={600} height={400} title="To Kill a Mockingbird" author="Harper Lee" description="A deeply moving story highlighting the serious issues of racial injustice and moral growth." />

                        <Image alt="The Great Gatsby Cover" src="https://example.com/gatsby-cover.jpg" width={600} height={400} title="The Great Gatsby" author="F. Scott Fitzgerald" description="A novel of mystery and tragedy about the American dream in the Roaring Twenties." />

                        <Image alt="Pride and Prejudice Cover" src="https://example.com/pride-prejudice-cover.jpg" width={600} height={400} title="Pride and Prejudice" author="Jane Austen" description="A romantic novel of manners that explores the nature of love, marriage, and society." />
                    </div>
                    <div className="grid gap-4">

                        <Image alt="Thumbnail 5" src="/placeholder.svg" width={600} height={400} title="Enchanting Forest" author="by William Clark" description="Lose yourself in the enchanting beauty of the forest." />

                        <Image alt="Thumbnail 6" src="/placeholder.svg" width={600} height={400} title="Tranquil Waters" author="by Olivia White" description="Experience peace and tranquility by the waterside." />


                        <Image alt="Thumbnail 7" src="/placeholder.svg" width={600} height={400} title="Majestic Peaks" author="by Daniel Taylor" description="Witness the grandeur of the majestic mountain peaks." />

                        <Image alt="Thumbnail 8" src="/placeholder.svg" width={600} height={400} title="City Skylines" author="by Jessica King" description="Explore the dynamic cityscapes captured in this collection." />
                    </div>
                </div>
            </main>
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
        </div>
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
