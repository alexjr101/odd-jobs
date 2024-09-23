import Link from "next/link";

const LINKS = [
    { src: "", title: "Explore"},
    { src: "", title: "Upload"},
    { src: "", title: "Messages"},
];

export default function Navbar() {
    return <nav className="flex justify-between p-5 bg-teal-950 text-white">

        <div>
            <Link href={""}>Home</Link>
        </div>

        <div>
            {LINKS.map(link => {
                return <Link 
                    href={link.src}
                    className="ml-8 first:ml-0"
                >
                    {link.title}
                </Link>
            })}
        </div>

        <div>
            <Link href={""}>Profile</Link>
        </div>
    </nav>
}