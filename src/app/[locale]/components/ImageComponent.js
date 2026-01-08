'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ImageComponent({
    imgPath,
    alt,
    width = 1200,
    height = 700,
    sizes = '100vw',
    title,
    style,
    classes = '',
    delay = 2000,
    loaderClass = ''
}) {
    const [showRealImage, setShowRealImage] = useState(false)/*  */

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowRealImage(true)
        }, delay)

        return () => clearTimeout(timer)
    }, [delay])

    return (
        <>
            {!showRealImage ? (
                // PLACEHOLDER IMAGE
                <div className={`w-full h-full flex items-center justify-center ${loaderClass ? loaderClass : ""}`}>
                    <img
                        src="/images/common-img/loader.gif"
                        alt="Loading"
                        className="w-12 h-12 object-contain"
                    />
                </div>
            ) : (
                // ACTUAL IMAGE
                <Image
                    src={imgPath}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes={sizes}
                    title={title}
                    style={style}
                    className={`transition-opacity duration-700 ease-in-out opacity-100 ${classes}`}

                />
            )}
        </>
    )
}
