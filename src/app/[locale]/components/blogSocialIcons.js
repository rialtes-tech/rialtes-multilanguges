import Image from "next/image";

export default function page({ fullUrl }) {
    return (
        <>
            <div className="">
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                    target="_blank" rel="noopener noreferrer">
                    {" "}
                    <Image
                        src="/images/common-img/linkedin.svg"
                        alt="LinkedIn"
                        width={0}
                        height={0}
                        className="h-[50px] w-[50px]"
                        priority
                    />
                </a>
            </div>
            <div>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                    target="_blank" rel="noopener noreferrer">
                    {" "}
                    <Image
                        src="/images/common-img/twitter.svg"
                        alt="Twitter"
                        width={0}
                        height={0}
                        className="h-[40px] w-[40px] mt-2"
                        priority
                    />
                </a>
            </div>
        </>
    )
}
