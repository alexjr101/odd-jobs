import { PropsWithChildren } from "react";

export default function Heading1({children}: PropsWithChildren) {
    return <h1 className="font-extrabold text-6xl text-teal-950 mb-3">
        {children}
    </h1>
}