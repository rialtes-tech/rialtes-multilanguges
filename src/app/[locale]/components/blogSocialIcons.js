import Image from "next/image";

export default function page({ fullUrl, topic, date }) {
    return (
        <>

            <div className="sm:flex justify-between">
                <div>
                    <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{topic}</span>{" "}
                    <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>
                    <span className={`4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ${topic?.length > 17 && "max-sm:block max-sm:mt-2"}`}>{date}</span>
                </div>

                <div>
                    <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
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
                    </div>
                </div>
            </div>


        </>
    )
}
