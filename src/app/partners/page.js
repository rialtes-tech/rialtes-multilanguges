import Image from "next/image";
import Seo from "../Component/Seo";

export default function Contact() {


    const approachData = [
        {
            src: "/images/partners/our1.png",
            alt: "Leadership Team",
            texts: ["Strategic", "orchestration"]
        },
        {
            src: "/images/partners/our2.png",
            alt: "Leadership Team",
            texts: ["Client-first", "customization"]
        },
        {
            src: "/images/partners/our3.png",
            alt: "Leadership Team",
            texts: ["Industry-specific", "solutions"]
        },
        {
            src: "/images/partners/our4.png",
            alt: "Leadership Team",
            texts: ["Vendor-agnostic", "partnerships"]
        }
    ];

    const keyPartners = [
        "/images/partners/adobe.webp",
        "/images/partners/ama2.webp",
        "/images/partners/aum2.webp",
        "/images/partners/salesf2.webp",
        "/images/partners/sap2.webp",
        "/images/partners/azur2.webp",
        "/images/partners/azd.webp",
        "/images/partners/conga.webp",
        "/images/partners/callc.webp",
        "/images/partners/bitbu.png"
    ];

    const regionalPartners = [
        "/images/partners/github.webp",
        "/images/partners/quik.webp",
        "/images/partners/rapid.png",
        "/images/partners/worka.png",
        "/images/partners/conf.webp",
        "/images/partners/boomi.png",
        "/images/partners/copa.webp",
        "/images/partners/docus.webp",
        "/images/partners/inform.png",
        "/images/partners/successf.png"
    ];

    const allPartnerships = [
        { src: "/images/partners/github.webp", alt: "GitHub" },
        { src: "/images/partners/quik.webp", alt: "Quik" },
        { src: "/images/partners/rapid.png", alt: "Rapid" },
        { src: "/images/partners/worka.png", alt: "Worka" },
        { src: "/images/partners/conf.webp", alt: "Conf" },
        { src: "/images/partners/boomi.png", alt: "Boomi" },
        { src: "/images/partners/copa.webp", alt: "Copa" },
        { src: "/images/partners/docus.webp", alt: "Docus" },
        { src: "/images/partners/inform.png", alt: "Inform" },
        { src: "/images/partners/successf.png", alt: "Successf" },
        { src: "/images/partners/dynam.webp", alt: "Dynam" },
        { src: "/images/partners/successf.png", alt: "Successf" },
        { src: "/images/partners/muls.webp", alt: "Muls" },
        { src: "/images/partners/pardot.png", alt: "Pardot" },
        { src: "/images/partners/callc.webp", alt: "Callc" },
        { src: "/images/partners/sapa.png", alt: "Sapa" },
        { src: "/images/partners/smarts.png", alt: "Smarts" },
        { src: "/images/partners/table.png", alt: "Table" },
        { src: "/images/partners/uipa.webp", alt: "Uipa" },
        { src: "/images/partners/windo.webp", alt: "Windo" },
        { src: "/images/partners/vix.webp", alt: "Vix" },
    ];


    const renderImageSection = (images) => (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 border-0 gap-20">
            {images.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt="Leadership Team"
                    className="w-1/2 h-full saturate-0 hover:saturate-100 border-0"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    priority
                />
            ))}
        </div>
    );

    const OurApproachSection = () => (
        <section>
            <div className="bg-[#EDEDED] lg:py-16 py-10">
                <h2 className="xl:px-[280px] lg:pl-[100px] md:px-[100px] px-6">Our Approach</h2>
                <div className="grid justify-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 xl:px-[280px] lg:pl-[100px] md:px-[100px] px-6 mt-5 lg:gap-[20%] gap-5">
                    {approachData.map((data, index) => (
                        <div key={index}>
                            <Image
                                src={data.src}
                                alt={data.alt}
                                width={0}
                                height={0}
                                className="mb-5 h-20 w-20"
                                sizes="100vw"
                                style={{
                                    objectFit: "cover",
                                }}
                                priority
                            />
                            {data.texts.map((text, idx) => (
                                <p key={idx}>{text}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    const KeyPartnerships = () => (
        <section className="xl:px-[280px] lg:px-[100px] md:px-[100px] mt-16 px-6">
            <h4 className="text-[#0092E0] mb-16">KEY PARTNERSHIPS</h4>
            {renderImageSection(keyPartners)}
        </section>
    );

    const RegionalPartnerships = () => (
        <section className="xl:px-[280px] lg:px-[100px] md:px-[100px] px-6 mt-16 ">
            <h4 className="text-[#0092E0] mb-16">REGIONAL PARTNERSHIPS</h4>
            {renderImageSection(regionalPartners)}
        </section>
    );
    return (
        <div>
            <Seo
                title="Partners Page"
                description="Welcome to the Rialtes On partners page"
                keywords="Partners, website, welcome"
            />
            <div>
                <Image
                    src="/images/partners/Partners.webp"
                    alt="Leadership Team"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    priority
                />
                <div className="absolute xl:px-[280px] lg:px-[100px]  md:px-[100px] px-6 top-[13%]  lg:text-start xl:top-[35%] md:top-[20%] text-white">
                    <h3 className="font-bold">Our Partners</h3>
                    <h1>Global Alliances</h1>
                </div>
            </div>
            {/* //strategies section */}

            <section className="xl:px-[280px] lg:px-[100px] md:px-[100px] px-6">
                <div className="grid lg:grid-cols-2 mt-16 mb-16 lg:gap-20">
                    <h2>Our Strategic Partners</h2>
                    <p>Rialtes partnered with the most innovative enterprise software companies to provide you with tailored, data-driven IT consulting solutions that simplify, enable, and empower you to solve your biggest business challenges.</p>
                </div>
            </section>
            <div>
                <OurApproachSection />
                <KeyPartnerships />
                <RegionalPartnerships />
                <section className="xl:px-[280px] lg:px-[100px] md:px-[100px] px-6 mt-16 ">
                    <h4 className="text-[#0092E0] mb-16">ALL PARTNERSHIPS</h4>
                    <div className="grid xl:grid-cols-5 lg:grid-cols-4  sm:grid-cols-2 grid-cols-2 border-0 gap-20">
                        {allPartnerships.map((partner, index) => (
                            <Image
                                key={index}
                                src={partner.src}
                                alt={partner.alt}
                                className="w-1/2 h-full saturate-0 hover:saturate-100"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                                priority
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
