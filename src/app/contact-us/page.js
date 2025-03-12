import React from 'react';
import ContactForm from "../components/contactform";
import Seo from "../components/Seo";
import Image from "next/image";

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
                    1st Floor, Kharadi, Pune- 411014,
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
                    5251 California Avenue Ave,
                    <br />
                    Suite 110, Irvine, California, 9261
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
    ];

    // Group locations by country
    const groupByCountry = (countryName) => {
        return locations.filter(location => location.country === countryName);
    };

    return (
        <div className="">
            <Seo
                title="Contact Us Page"
                description="Welcome to the Rialtes On Contact Us"
                keywords="Contact, website, welcome"
            />
            <div className="xl:pl-[280px] lg:pl-[100px] md:pl-[100px] px-6 xl:pr-16 mt-10">
                <div>
                    <h1>Our presence across the Globe</h1>
                    <h4 className="mt-5 text-2xl">How can we help you?</h4>
                    <p> Contact us, we would love to hear from you</p>
                </div>
                <div className="xl:pr-[200px]">
                    <Image
                        src="/images/contact-us/Contact-map.webp"
                        alt="Rialtes Map"
                        className="pt-10 relative "
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
                <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[16rem] gap-10'>
                    <div className="location-group flex flex-col">

                        <h4 className="uppercase text-[#0092E0]">UNITED STATES</h4>

                        <div className="flex flex-col gap-6">
                            {groupByCountry('UNITED STATES').map((location, index) => (
                                <div key={index} className="location-item flex flex-col mt-3">
                                    <div>

                                        {location.headquarter && <h5 className="font-bold">{location.headquarter}</h5>}
                                        {location.city && <h5 className="font-bold">{location.city}</h5>}
                                        <p>{location.address}</p>
                                        {location.addBorderBottom && <hr className="border-b-2 w-full" />}
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
                                        {location.addBorderBottom && <hr className="border-b-2 w-full" />}
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
                                        {location.addBorderBottom && <hr className="border-b-2 w-full" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Singapore */}
                    <div className="location-group flex flex-col gap-6">
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
                                        {location.addBorderBottom && <hr className="border-b-2 w-full" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <section className=" mt-32 mx-6 pb-10">
                    <ContactForm className='xl:w-[52%] w-full' title='Ready to take the next step? Let’s kick off your journey to operational excellence' />
                </section>
                <div className="pb-6"></div>
            </div>
        </div>
    );
};

export default LocationPage;
