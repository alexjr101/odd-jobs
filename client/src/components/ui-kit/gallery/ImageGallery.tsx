"use client"

import { useEffect, useState } from "react";

type props = {
    images: string[],
    interval?: number
}

export default function ImageGallery({images, interval}: props) {

    const [index, setIndex] = useState(0);
    const [image, setImage] = useState(images[0]);

    useEffect(() => {

        const intervalID = setInterval(() => {
            const newIndex = (index + 1) % images.length; 
            setIndex(newIndex);
            setImage(images[newIndex]);
        }, (interval ?? 1) * 1000);

        return () => {
            clearInterval(intervalID)
        }

    });

    return <div className="w-3/4 h-80 sm:w-1/3 sm:w-96">
        <img className="w-full max-w-full h-full" src={image} />
    </div>
}