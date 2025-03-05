import Image from "next/image"
import ContactForm from "../Component/contactForm"
import Seo from "../Component/Seo"
export default function Contact() {

    const locations = [
        {
            country: 'UNITED STATES',
            headquarter: 'Austin (Headquarter)',
            address: (
                <>
                    501 Congress Avenue, Suite 150, Austin, Texas, 78701
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
                    World Trade Center, 119, Tower-2, 1st Floor, Kharadi, Pune- 411014, Maharashtra, India
                    <br />
                    E-mail: <a href="mailto:sales@rialtes.com">sales@rialtes.com</a>
                </>
            ),
        },
        {
            country: 'SINGAPORE',
            address: (
                <>
                    30 Cecil Street #19-08 Prudential Tower Singapore 049712
                    <br />
                    E-mail: <a href="mailto:sales.sg@rialtes.com">sales.sg@rialtes.com</a>
                </>
            ),
        },

        {
            city: 'California',
            address: (
                < div className="border-b-2 pb-6">
                    5251 California Avenue Ave, Suite 110, Irvine, California, 9261
                    <br />
                </div>
            ),
            addBorderBottom: true,
        },
        {
            city: 'Noida',
            address: (
                <>
                    Berger Delhi One, Sector 16B, C-001/A2, Gautam Buddha Nagar, Noida, UP 201301
                    <br />
                    E-mail: <a href="mailto:sales@rialtes.com">sales@rialtes.com</a>
                </>
            ),
        },
        {
            country: 'CANADA',
            address: (
                <>
                    Suite 500, 1000 Innovation Dr Kanata, ON K2K 3E7
                    <br />
                    E-mail: <a href="mailto:sales.ca@rialtes.com">sales.ca@rialtes.com</a>
                </>
            ),
        },
        {
            city: 'Dehradun',
            address: 'Dehradun IT Park, Weblan Unit A, 2nd Floor, Sahastradhara Road, Dehradun, Uttarakhand- 248001'
        },
    ];
    const groupedLocations = [
        locations.slice(0, 3),
        locations.slice(3, 5),
        locations.slice(5),
    ];

    const renderLocation = (location, index) => {
        const isCountry = location.country;
        return (
            <div key={index}>
                {isCountry && <h4 className="uppercase text-[#0092E0] pb-4">{location.country}</h4>}
                {location.headquarter && <h5 className="font-bold">{location.headquarter}</h5>}
                {location.city && <h5 className="font-bold">{location.city}</h5>}
                <div>{location.address}</div>
            </div>
        );
    };
    return (
        <div>
            <Seo
                title="Contact Us Page"
                description="Welcome to the Rialtes On Contact Us"
                keywords="Contact, website, welcome"
            />
            <div className="xl:pl-[280px] lg:pl-[100px] md:pl-[100px] px-6 lg:mt-40 md:mt-20 mt-10">
                <div>
                    <h1>Our presence across the Globe</h1>
                    <h5 className="mt-5">How can we help you?</h5>
                    <p> Contact us, we would love to hear from you</p>
                </div>
                <Image
                    src="/images/contact-us/Contact-map.webp"
                    alt="Rialtes Map"
                    className="pt-10"
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
                {groupedLocations.map((group, groupIndex) => (
                    <div
                        key={groupIndex}
                        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:gap-20 gap-10 mt-20"
                    >
                        {group.map((location, index) => renderLocation(location, index))}
                    </div>
                ))}
            </div>
            <ContactForm />
        </div>
    )
}