import { PropsWithChildren } from "react"

interface props {
    disabled?: boolean
}

export default function PrimaryButton({children, disabled}: PropsWithChildren<props>) {
    return <button 
        className="
            bg-emerald-700 
            hover:bg-emerald-800 
            active:bg-emerald-900 
            rounded-full 
            px-8 py-2 
            text-white
            font-semibold
            disabled:bg-gray-400
        "
        disabled={disabled}
    >
        {children}
    </button>
}