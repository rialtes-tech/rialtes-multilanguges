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
                    <Image
                        src="/images/common-img/loader.gif"
                        alt="Loading"
                        className="w-12 h-12 object-contain"
                        width={48}
                        height={48}
                        priority
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
                    priority
                    className={`transition-opacity duration-700 ease-in-out opacity-100 ${classes}`}

                />
            )}
        </>
    )
}
