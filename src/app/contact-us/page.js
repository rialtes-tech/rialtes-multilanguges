import React from 'react';
import ContactForm from "../components/contactform";
import Seo from "../components/Seo";
import Image from "next/image";
import Script from 'next/script';
const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us",
    "url": "https://www.rialtes.com/contact-us/",
    "about": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg",
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "email": "sales@rialtes.com",
                "availableLanguage": ["English"]
            }
        ],
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "501 Congress Avenue, Suite 150",
                "addressLocality": "Austin",
                "addressRegion": "TX",
                "postalCode": "78701",
                "addressCountry": "US"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "5251 California Ave, Suite 110",
                "addressLocality": "Irvine",
                "addressRegion": "CA",
                "postalCode": "92617",
                "addressCountry": "US"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "World Trade Center, 119, Tower-2, 1st Floor, Kharadi",
                "addressLocality": "Pune",
                "addressRegion": "MH",
                "postalCode": "411014",
                "addressCountry": "IN"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "Berger Delhi One, Sector 16B, C-001/A2, Gautam Buddha Nagar",
                "addressLocality": "Noida",
                "addressRegion": "UP",
                "postalCode": "201301",
                "addressCountry": "IN"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "Dehradun IT Park, Weblan Unit A, Second Floor, Sahastradhara Road",
                "addressLocality": "Dehradun",
                "addressRegion": "UK",
                "postalCode": "248001",
                "addressCountry": "IN"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "Unit #255, Block - B, 2nd Floor, Motia Plaza",
                "addressLocality": "Baddi",
                "addressRegion": "HP",
                "postalCode": "173205",
                "addressCountry": "IN"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "Suite 500, 1000 Innovation Dr",
                "addressLocality": "Kanata",
                "addressRegion": "ON",
                "postalCode": "K2K 3E7",
                "addressCountry": "CA"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "30 Cecil Street, #19-08 Prudential Tower",
                "addressLocality": "Singapore",
                "addressRegion": "SG",
                "postalCode": "049712",
                "addressCountry": "SG"
            }
        ]
    },
    "sameAs": [
        "https://www.linkedin.com/company/rialtes-technologies-llc/",
        "https://www.youtube.com/@rialtes",
        "https://x.com/Rialtestech",
        "https://www.instagram.com/rialtes_technologies/"
    ]
}
const LocationPage = () => {
    const locations = [
        {
            country: 'UNITED STATES',
            headquarter: 'Austin (Headquarter)',
            address: (
                <>
                    501 Congress Avenue, Suite 150,
                    <br />
                    Austin, Texas, 78701
                    <br />
                    E-mail: <a href="mailto:sales@rialtes.com">sales@rialtes.com</a>
                </>
            ),
        },
        {
            country: 'INDIA',
            headquarter: 'Pune (Headquarter)',
            address: (
                <>
                    World Trade Center, 119, Tower-2,
                    <br />
                    1st Floor, Kharadi, Pune - 411014,
                    <br />
                    Maharashtra, India
                    <br />
                    E-mail: <a href="mailto:sales@rialtes.com">sales@rialtes.com</a>
                </>
            ),
        },
        {
            country: 'SINGAPORE',
            address: (
                <>
                    30 Cecil Street #19-08 Prudential
                    <br />
                    Tower Singapore 049712
                    <br />
                    E-mail: <a href="mailto:sales.sg@rialtes.com">sales.sg@rialtes.com</a>
                </>
            ),
        },
        {
            country: 'UNITED STATES', // California location
            city: 'California',
            address: (
                <>
                    5251 California Ave,
                    <br />
                    Suite 110, Irvine, California, 92617
                    <br />
                </>
            ),
            addBorderBottom: true,
        },
        {
            country: 'INDIA', // Noida location
            city: 'Noida',
            address: (
                <>
                    Berger Delhi One, Sector 16B,
                    <br />
                    C-001/A2, Gautam Buddha
                    <br />
                    Nagar, Noida, UP 201301
                    <br />
                    E-mail: <a href="mailto:sales@rialtes.com">sales@rialtes.com</a>
                </>
            ),
        },
        {
            country: 'CANADA',
            address: (
                <>
                    Suite 500, 1000 Innovation
                    <br />
                    Dr Kanata, ON K2K 3E7
                    <br />
                    E-mail: <a href="mailto:sales.ca@rialtes.com">sales.ca@rialtes.com</a>
                </>
            ),
        },
        {
            country: 'INDIA', // Dehradun location
            city: 'Dehradun',
            address: (
                <>
                    Dehradun IT Park, Weblan Unit A
                    <br />
                    2nd Floor, Sahastradhara
                    <br />
                    Road, Dehradun
                    <br />
                    Uttarakhand - 248001
                    <br />
                    E-mail: <a href="mailto:sales@rialtes.com">sales@rialtes.com</a>
                </>
            ),
        },
        {
            country: 'INDIA', // Dehradun location
            city: 'Himachal Pradesh',
            address: (
                <>
                    Unit #255, Block - B,
                    <br />
                    2nd Floor, Motia Plaza, Baddi,
                    <br />
                    Dist. Solan, Himachal Pradesh 173205
                    <br />
                    E-mail: <a href="mailto:sales@rialtes.com">sales@rialtes.com</a>

                </>

            ),
        },
    ];

    // Group locations by country
    const groupByCountry = (countryName) => {
        return locations.filter(location => location.country === countryName);
    };

    return (
        <div className="">
            <Seo
                title="Contact Us – Expert IT Consulting for Your Business Growth | Rialtes"
                description="Have a question or need IT consulting services? Contact Rialtes for expert advice on SaaS solutions and IT strategy that drive business success."
                keywords="Contact, website, welcome"
                canonical={"https://www.rialtes.com/contact-us/"}
            />

            <Script
                id="webinar-schema-contact-us"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className="custom-container pt-14">
                <div>
                    <h1>Our presence across the Globe</h1>
                    <h4 className="mt-5 text-2xl">How can we help you?</h4>
                    <p> Contact us, we would love to hear from you</p>
                </div>
                <div className="xl:pr-[200px]">
                    <Image
                        src="/images/contact-us/Contact-Us-map.webp"
                        alt="Rialtes Map"
                        className="pt-10 relative"
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
                </div>
                <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-16 gap-6 '>
                    <div className="location-group flex flex-col">

                        <h4 className="uppercase text-[#0092E0]">UNITED STATES</h4>

                        <div className="flex flex-col gap-6 ">
                            {groupByCountry('UNITED STATES').map((location, index) => (
                                <div key={index} className="location-item flex flex-col mt-3">
                                    <div>

                                        {location.headquarter && <h5 className="font-bold">{location.headquarter}</h5>}
                                        {location.city && <h5 className="font-bold">{location.city}</h5>}
                                        <p>{location.address}</p>
                                        {location.addBorderBottom && <hr className="hidden xl:flex xl:border-b-2 xl:w-full xl:mt-6" />}
                                    </div>
                                </div>
                            ))}

                            {/* Canada Locations */}
                            {groupByCountry('CANADA').map((location, index) => (
                                <div key={index} className="location-item flex flex-col">
                                    <div>
                                        {location.country && (
                                            <h4 className="uppercase text-[#0092E0] pb-4">{location.country}</h4>
                                        )}
                                        {location.headquarter && <h5 className="font-bold">{location.headquarter}</h5>}
                                        {location.city && <h5 className="font-bold">{location.city}</h5>}
                                        <p>{location.address}</p>
                                        {location.addBorderBottom && <hr className="hidden xl:flex xl:border-b-2 xl:w-full xl:mt-6" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* India */}
                    <div className="location-group flex flex-col">
                        <h4 className="uppercase text-[#0092E0]">India</h4>

                        <div className="flex flex-col gap-6">
                            {groupByCountry('INDIA').map((location, index) => (
                                <div key={index} className="location-item flex flex-col mt-3">
                                    <div>
                                        {location.headquarter && <h5 className="font-bold">{location.headquarter}</h5>}
                                        {location.city && <h5 className="font-bold">{location.city}</h5>}
                                        <p>{location.address}</p>
                                        {location.addBorderBottom && <hr className="hidden xl:flex xl:border-b-2 xl:w-full xl:mt-6" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Singapore */}
                    <div className="location-group flex flex-col gap-6 md:mt-[-20rem] xl:mt-0">
                        <div className="flex flex-wrap gap-6">
                            {groupByCountry('SINGAPORE').map((location, index) => (
                                <div key={index} className="location-item flex flex-col">
                                    <div>
                                        {location.country && (
                                            <h4 className="uppercase text-[#0092E0] pb-4">{location.country}</h4>
                                        )}
                                        {location.headquarter && <h5 className="font-bold">{location.headquarter}</h5>}
                                        {location.city && <h5 className="font-bold">{location.city}</h5>}
                                        <p>{location.address}</p>
                                        {location.addBorderBottom && <hr className="lg:border-b-2 lg:w-full lg:mt-6" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="mt-16 xl:mt-32 pb-10 ">
                    <ContactForm className='max-w-3xl' title='Ready to take the next step? Let’s kick off your journey to operational excellence' />
                </section>
                <div className="pb-6"></div>
            </div>
        </div>
    );
};

export default LocationPage;
