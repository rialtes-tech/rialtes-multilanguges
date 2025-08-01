import React from 'react';
import ContactForm from "../components/contactform";
import Seo from "../components/Seo";
import Image from "next/image";
import Script from 'next/script';
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../messages/en/homepage.json';
import esContent from '../../../../messages/es/homepage.json';

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
     const t = useTranslations('contactUs')
        const locale = useLocale();
        const contactUsContent = locale === "es" ? esContent : enContent;
        const {locations} = contactUsContent.contactUs;

    // Group locations by country
    const groupByCountry = (countryName) => {
        return locations.filter(location => location.country === countryName);
    };
    return (
        <div>
            <Seo
                title="Contact Us – Expert IT Consulting for Your Business Growth | Rialtes"
                description="Have a question or need IT consulting services? Contact Rialtes for expert advice on SaaS solutions and IT strategy that drive business success."
             
                keywords="Contact, website, welcome"
                canonical={"https://www.rialtes.com/contact-us/"}
            />
            <Script
                id="schema-contact-us"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className="custom-container pt-14">
                <div>
                    <h1 className='4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight'>{t('headerTitle')}</h1>
                    <h4 className="mt-5 mb-2 md:mb-0 4xl:text-[30px] xl:text-[26px] text-[24px] leading-tight">{t('headerSubtitle')}</h4>
                    <p className='4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'> {t('headerDesc')}</p>
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
                        <h4 className="uppercase text-[#0092E0]">{t('usTitle')}</h4>
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
                    <ContactForm className='max-w-4xl 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight' title={t('contactUsTitle')} />
                </section>
                <div className="pb-6"></div>
            </div>
        </div>
    );
};

export default LocationPage;
