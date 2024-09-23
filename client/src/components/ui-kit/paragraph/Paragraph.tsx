import { PropsWithChildren } from "react";

export default function Paragraph({children}: PropsWithChildren) {
    return <p
        className="
            text-stone-600
            font-medium
        "
    >
        {children}
    </p>
}