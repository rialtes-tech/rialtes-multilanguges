import React from "react";
import ContactForm from "../components/contactform";
import Seo from "../components/Seo";
import Image from "next/image";
import Script from "next/script";
import { changeLocalization } from "../components/changeLocalization";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../messages/en/homepage.json";
import esContent from "../../../../messages/es/homepage.json";
import frContent from "../../../../messages/fr/homepage.json";


const LocationPage = () => {
  const t = useTranslations("contactUs");
  const locale = useLocale();
  const contactUsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const { schemaData } = contactUsContent.contactUs;

  const locations = [
    {
      country: "UNITED STATES",
      headquarter: "Austin (Headquarter)",
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
      country: "INDIA",
      headquarter: "Pune (Headquarter)",
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
      country: "SINGAPORE",
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
      country: "UNITED STATES", // California location
      city: "California",
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
      country: "INDIA", // Noida location
      city: "Noida",
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
      country: "CANADA",
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
      country: "INDIA", // Dehradun location
      city: "Dehradun",
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
      country: "INDIA", // Dehradun location
      city: "Himachal Pradesh",
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
    return locations.filter((location) => location.country === countryName);
  };
  return (
    <div>
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords="Contact, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/contact-us`}
      />
      <Script
        id="schema-contact-us"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="custom-container pt-14">
        <div>
          <h1 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight">
            {t("headerTitle")}
          </h1>
          <h4 className="mt-5 mb-2 md:mb-0 4xl:text-[30px] xl:text-[26px] text-[24px] leading-tight">
            {t("headerSubtitle")}
          </h4>
          <p className="4xl:text-[20px] md:text-[18px] text-[16px] leading-tight">
            {t("headerDesc")}
          </p>
        </div>
        <div className="xl:pr-[200px]">
          <Image
            src="/images/contact-us/global-office-locations-map.webp"
            alt={t('bannerAlt')}
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
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-16 gap-6 ">
          <div className="location-group flex flex-col">
            <h4 className="uppercase text-[#0092E0]">UNITED STATES</h4>
            <div className="flex flex-col gap-6 ">
              {groupByCountry("UNITED STATES").map((location, index) => (
                <div key={index} className="location-item flex flex-col mt-3">
                  <div>
                    {location.headquarter && (
                      <h5 className="font-bold">{location.headquarter}</h5>
                    )}
                    {location.city && (
                      <h5 className="font-bold">{location.city}</h5>
                    )}
                    <p className="4xl:text-[20px] md:text-[17px] text-[16px]">{location.address}</p>
                    {location.addBorderBottom && (
                      <hr className="hidden xl:flex xl:border-b-2 xl:w-full xl:mt-6" />
                    )}
                  </div>
                </div>
              ))}
              {/* Canada Locations */}
              {groupByCountry("CANADA").map((location, index) => (
                <div key={index} className="location-item flex flex-col">
                  <div>
                    {location.country && (
                      <h4 className="uppercase text-[#0092E0] pb-4">
                        {location.country}
                      </h4>
                    )}
                    {location.headquarter && (
                      <h5 className="font-bold">{location.headquarter}</h5>
                    )}
                    {location.city && (
                      <h5 className="font-bold">{location.city}</h5>
                    )}
                    <p className="4xl:text-[20px] md:text-[17px] text-[16px]">{location.address}</p>
                    {location.addBorderBottom && (
                      <hr className="hidden xl:flex xl:border-b-2 xl:w-full xl:mt-6" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* India */}
          <div className="location-group flex flex-col">
            <h4 className="uppercase text-[#0092E0]">India</h4>
            <div className="flex flex-col gap-6">
              {groupByCountry("INDIA").map((location, index) => (
                <div key={index} className="location-item flex flex-col mt-3">
                  <div>
                    {location.headquarter && (
                      <h5 className="font-bold">{location.headquarter}</h5>
                    )}
                    {location.city && (
                      <h5 className="font-bold">{location.city}</h5>
                    )}
                    <p className="4xl:text-[20px] md:text-[17px] text-[16px]">{location.address}</p>
                    {location.addBorderBottom && (
                      <hr className="hidden xl:flex xl:border-b-2 xl:w-full xl:mt-6" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Singapore */}
          <div className="location-group flex flex-col gap-6 md:mt-[-17rem] xl:mt-0">
            <div className="flex flex-wrap gap-6">
              {groupByCountry("SINGAPORE").map((location, index) => (
                <div key={index} className="location-item flex flex-col">
                  <div>
                    {location.country && (
                      <h4 className="uppercase text-[#0092E0] pb-4">
                        {location.country}
                      </h4>
                    )}
                    {location.headquarter && (
                      <h5 className="font-bold">{location.headquarter}</h5>
                    )}
                    {location.city && (
                      <h5 className="font-bold">{location.city}</h5>
                    )}
                    <p className="4xl:text-[20px] md:text-[17px] text-[16px]">{location.address}</p>
                    {location.addBorderBottom && (
                      <hr className="lg:border-b-2 lg:w-full lg:mt-6" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="mt-16 xl:mt-32 pb-10 ">
          <ContactForm
            className="max-w-4xl 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight"
            title={t("contactUsTitle")}
          />
        </section>
        <div className="pb-6"></div>
      </div>
    </div>
  );
};

export default LocationPage;
