import Link from "next/link";

export default function Navbar() {
    return <nav className="flex justify-between p-5">
        <Link href={""}>Home</Link>
        <Link href={""}>Explore</Link>
        <Link href={""}>Upload</Link>
        <Link href={""}>Messages</Link>
    </nav>
}