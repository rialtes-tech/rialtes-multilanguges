import Image from "next/image";
import Seo from "../../components/Seo";
import Script from "next/script";
export default function Leadership() {
    const leadershipTeam = [
        {
            id: 1,
            imageUr: '/images/leadership/AjayTyagi.webp',
            name: 'Ajay Tyagi',
            designation: 'Founder & CEO',
            viewMore: 'View Bio'
        },
        {
            id: 3,
            imageUr: '/images/leadership/Anuraag Aggarwal.webp',
            name: 'Anuraag Aggarwal',
            designation: ' AI practice Lead',
            viewMore: 'View Bio'
        },
        {
            id: 2,
            imageUr: '/images/leadership/Mayur-updated.webp',
            name: 'Mayur Tyagi',
            designation: 'Sr. Managing Director - Sales & Marketing',
            viewMore: 'View Bio'
        },
        
        {
            id: 4,
            imageUr: '/images/leadership/Akshay Kale (1).webp',
            name: 'Akshay Kale',
            designation: ' SAP Practice Lead',
            viewMore: 'View Bio'
        },
        {
            id: 5,
            imageUr: '/images/leadership/Prasad.webp',
            name: 'Prasad Venkatesan',
            designation: ' Vice President, Global Partnership and Alliances',
            viewMore: 'View Bio'
        },
        {
            id: 6,
            imageUr: '/images/leadership/Pawan Tyagi (1).webp',
            name: 'Pawan Tyagi',
            designation: 'Sr.Managing Director - Salesforce Services',
            viewMore: 'View Bio'
        },
        {
            id: 7,
            imageUr: '/images/leadership/Anand.webp',
            name: 'Anand Unadkat',
            designation: ' Infrastructure and Cloud Migration Practice Lead',
            viewMore: 'View Bio'
        },
        {
            id: 8,
            imageUr: '/images/leadership/ImageSam5.png',
            name: 'Samadhan Patil',
            designation: ' Finance & Operations Lead',
            viewMore: 'View Bio'
        },
        {
            id: 9,
            imageUr: '/images/leadership/Rajani Patel (1).webp',
            name: 'Rajani Patel',
            designation: ' Senior Human Resources Manager',
            viewMore: 'View Bio'
        }
    ]
    const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rialtes",
  "url": "https://www.rialtes.com",
  "employee": [
    {
      "@type": "Person",
      "name": "Ajay Tyagi",
      "jobTitle": "Founder & CEO",
      "url": "https://www.rialtes.com/about-us/leadership/Ajay-Tyagi"
    },
    {
      "@type": "Person",
      "name": "Anuraag Aggarwal",
      "jobTitle": "AI Practice Lead",
      "url": "https://www.rialtes.com/about-us/leadership/Anuraag-Aggarwal"
    },
    {
      "@type": "Person",
      "name": "Akshay Kale",
      "jobTitle": "SAP Practice Lead",
      "url": "https://www.rialtes.com/about-us/leadership/Akshay-Kale"
    },
    {
      "@type": "Person",
      "name": "Prasad Venkatesan",
      "jobTitle": "VP Global Partnership and Alliances",
      "url": "https://www.rialtes.com/about-us/leadership/Prasad-Venkatesan"
    },
    {
      "@type": "Person",
      "name": "Pratik Ingle",
      "jobTitle": "Salesforce Business Analyst",
      "url": "https://www.rialtes.com/about-us/leadership/Pratik-Ingle"
    },
    {
      "@type": "Person",
      "name": "Pawan Tyagi",
      "jobTitle": "Sr. Managing Director - Salesforce Services",
      "url": "https://www.rialtes.com/about-us/leadership/Pawan-Tyagi"
    },
    {
      "@type": "Person",
      "name": "Samadhan Patil",
      "jobTitle": "Finance and Operations Lead",
      "url": "https://www.rialtes.com/about-us/leadership/Samadhan-Patil"
    },
    {
      "@type": "Person",
      "name": "Anand Unadkat",
      "jobTitle": "Infrastructure and Cloud Migration Practice Lead",
      "url": "https://www.rialtes.com/about-us/leadership/Anand-Unadkat"
    },
    {
      "@type": "Person",
      "name": "Rajani Patel",
      "jobTitle": "Sr. Human Resources Manager",
      "url": "https://www.rialtes.com/about-us/leadership/Rajani-Patel"
    }
  ]
}
    return (
        <div>
            <Seo
                title="Leadership Us Page"
                description="Welcome to the Rialtes On Leadership page"
                keywords="Leadership, website, welcome"
            />
                <Script
        id="leadership"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
            <div className="relative">
                <Image
                    src="/images/leadership/Leadership banner.webp"
                    alt="Leadership Team"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        objectFit: "cover",
                    }}
                    priority
                    className="xl:h-[650px] h-[200px]"
                />
                <div className="absolute xl:px-[280px] md:px-[100px] px-6 top-[5%]  lg:text-start xl:top-[35%] md:top-[20%] text-white z-20">
                    <h3 className="font-bold">Meet our</h3>
                    <h1>Leadership Team</h1>
                    <p className="lg:mt-5 xl:w-[52%] w-[90%] mt-[35px]">To know the people behind Rialtes who lead the way toward excellence and innovation</p>
                </div>

            </div>
            {/* //leadership section */}
            <section className="xl:px-[280px] md:px-[100px] px-6 pb-20">
                <h2 className="lg:mt-20 mt-10">Our global leadership team</h2>
                <p className="mt-8 lg:w-1/2">With a deep commitment to our clients at the heart of their leadership philosophy, they are the driving force behind our mission towards simplifying our customers’ problems, enabling them to find the right solutions, and empowering them for upcoming challenges.</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-16">
                    {leadershipTeam.map((leader, index) => {
                        const applyMarginTop = (index === 3 || index === 4 || index === 5 || index === 6 || index === 7 || index ===8);

                        return (

                            <div key={leader?.id} className={`${applyMarginTop ? 'mt-10' : ''}`} >
                                <div>
                                    <Image
                                        src={leader.imageUr}
                                        alt="Leadership Main"
                                        className="relative mt-10 lg:mt-0"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{
                                            width: "100%",
                                            objectFit: "cover",
                                        }}
                                        priority
                                    />
                                </div>
                                <div>
                                    <h3 className="mt-5 text-black font-bold">{leader.name}</h3>
                                    <h3 className="text-[#5F5F5F] text-[20px]">{leader.designation}</h3>
                                    {/* <p className="text-[#0092E0] font-bold mt-5 group cursor-pointer">
                                        {leader.viewMore}
                                        <span className="ml-2 text-[#0092E0] transform translate-x-0 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            &#8594;
                                        </span>
                                    </p> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}