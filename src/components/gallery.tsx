import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"

export function Gallery() {
    return (
        <>
            <main className="py-12 md:py-20">
                <div className="container">
                    <Carousel className="rounded-xl overflow-hidden">
                        <CarouselContent>
                            <CarouselItem>
                                <Card className="flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-12 bg-gray-900 text-white">
                                    <img
                                        alt="Exhibit 1"
                                        className="rounded-xl w-full md:w-1/2 object-cover"
                                        height="400"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "600/400",
                                            objectFit: "cover",
                                        }}
                                        width="600"
                                    />
                                    <div className="space-y-4 md:space-y-6">
                                        <h2 className="text-3xl md:text-4xl font-bold">The Godfather Exhibit</h2>
                                        <p className="text-gray-300 text-lg md:text-xl">
                                            Explore the iconic sets, costumes, and props from the legendary Godfather trilogy.
                                        </p>
                                        <Link
                                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white"
                                            href="#"
                                        >
                                            Learn More
                                            <ArrowRightIcon className="h-5 w-5 stroke-2" />
                                        </Link>
                                    </div>
                                </Card>
                            </CarouselItem>
                            <CarouselItem>
                                <Card className="flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-12 bg-gray-900 text-white">
                                    <img
                                        alt="Exhibit 2"
                                        className="rounded-xl w-full md:w-1/2 object-cover"
                                        height="400"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "600/400",
                                            objectFit: "cover",
                                        }}
                                        width="600"
                                    />
                                    <div className="space-y-4 md:space-y-6">
                                        <h2 className="text-3xl md:text-4xl font-bold">Star Wars Prop Exhibit</h2>
                                        <p className="text-gray-300 text-lg md:text-xl">
                                            Discover the intricate details and stories behind the iconic props from the Star Wars universe.
                                        </p>
                                        <Link
                                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white"
                                            href="#"
                                        >
                                            Learn More
                                            <ArrowRightIcon className="h-5 w-5 stroke-2" />
                                        </Link>
                                    </div>
                                </Card>
                            </CarouselItem>
                            <CarouselItem>
                                <Card className="flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-12 bg-gray-900 text-white">
                                    <img
                                        alt="Exhibit 3"
                                        className="rounded-xl w-full md:w-1/2 object-cover"
                                        height="400"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "600/400",
                                            objectFit: "cover",
                                        }}
                                        width="600"
                                    />
                                    <div className="space-y-4 md:space-y-6">
                                        <h2 className="text-3xl md:text-4xl font-bold">Costume Design Showcase</h2>
                                        <p className="text-gray-300 text-lg md:text-xl">
                                            Explore the intricate designs and craftsmanship behind the iconic costumes from your favorite
                                            movies.
                                        </p>
                                        <Link
                                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white"
                                            href="#"
                                        >
                                            Learn More
                                            <ArrowRightIcon className="h-5 w-5 stroke-2" />
                                        </Link>
                                    </div>
                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-gray-900/50 hover:bg-gray-900/75 rounded-full p-2 cursor-pointer">
                            <ChevronLeftIcon className="h-6 w-6 text-white" />
                        </CarouselPrevious>
                        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-gray-900/50 hover:bg-gray-900/75 rounded-full p-2 cursor-pointer">
                            <ChevronRightIcon className="h-6 w-6 text-white" />
                        </CarouselNext>
                    </Carousel>
                </div>
            </main>
            <footer className="bg-gray-900 text-white py-8">
                <div className="container flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center gap-2">
                        <ClapperboardIcon className="h-6 w-6" />
                        <span className="text-lg font-bold">Cinematic Museum</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

function ArrowRightIcon(props) {
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
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}


function ChevronLeftIcon(props) {
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
            <path d="m15 18-6-6 6-6" />
        </svg>
    )
}


function ChevronRightIcon(props) {
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
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}


function ClapperboardIcon(props) {
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
            <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
            <path d="m6.2 5.3 3.1 3.9" />
            <path d="m12.4 3.4 3.1 4" />
            <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </svg>
    )
}


function MenuIcon(props) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}
