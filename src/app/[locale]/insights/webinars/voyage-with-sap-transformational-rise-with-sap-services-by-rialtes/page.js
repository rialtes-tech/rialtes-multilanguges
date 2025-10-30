"use client";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/webinars.json';
import esContent from '../../../../../../messages/es/webinars.json';
import frContent from '../../../../../../messages/fr/webinars.json';
import WebinarComponent from "@/app/[locale]/components/webinarComponent";
import { changeLocalization } from "../../../components/changeLocalization";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Voyage with SAP – Transformational RISE with SAP Services by Rialtes",
    "description": "Join us for an exclusive deep dive into transformational SAP journeys to explore how Rialtes' Voyager+ framework streamlines every step of your SAP journey, from license advisory to post-go-live success. Discover how you can simplify your RISE with SAP transformation with a clear, value-driven, all-in-one approach designed to accelerate cloud adoption, reduce technical debt, reimagine processes, and infuse AI-powered innovation into your operations.",
    "url": "https://www.rialtes.com/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes/",
    "startDate": "2025-06-03T20:30:00+05:30",
    "endDate": "2025-06-03T21:00:00+05:30",
    "duration": "PT30M",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "organizer": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg"
    },
    "performer": {
        "@type": "Person",
        "name": "Anuraag Aggarwal",
        "jobTitle": "Vice President of Global Sales",
        "url": "https://www.linkedin.com/in/anuraag-aggarwal/"
    },
    "image": "https://www.rialtes.com/images/webinar/banner-rise.webp",
    "audience": {
        "@type": "Audience",
        "audienceType": "CIOs, IT Leaders, Digital Transformation Leaders, SAP Technical Consultants, SAP Functional Consultants, Enterprise Architects"
    },
    "location": {
        "@type": "VirtualLocation",
        "url": "https://www.rialtes.com/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes/"
    },
    "keywords": "SAP Rise webinar, RISE with SAP, Voyager+, Rialtes webinars"
}

export default function () {
    const t = useTranslations("voyageWebinar");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { webinarAdvantagesData, whoShouldAttendData } = content.voyageWebinar
    return (
        <>
            <WebinarComponent fullUrl="https://rialtes.netlify.app/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes"
                seoData={
                    < Seo
                    title={t('seoTitle')}
                    description={t('seoDescription')}
                        canonical="https://www.rialtes.com/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes/"
                    />

                }
                schemaData={schemaData}
                deskImg="/images/webinar/digital-wave-data-network.webp"
                mobImg="/images/webinar/digital-wave-data-network.webp"
                imageAlt={t('imageAlt')}
                webinarTitle={t('webinarTitle')}
                speakerName="Anuraag Aggarwal"
                speakerDesignation="Vice President of Global Sales"
                speakerImg="/images/webinar/anurag.webp"
                speakerImgAlt="webinar speaker image"
                webinarInfo={t('webinarInfo')}
                webinarAdvantages={webinarAdvantagesData}
                whoShouldAttend={whoShouldAttendData}
                dateNumber="13"
                monthYear="May 2025"
                CstIstTime={`10:00 AM CST\u00A0\u00A0\u00A0|\u00A0\u00A08:30 PM IST`}
                estPstTime={`11 AM EST\u00A0\u00A0\u00A0|\u00A0\u00A08 AM PST`} // u00A0 for exrtra space
                redirectUrl="https://www.youtube.com/watch?v=a0ad90kWp0c&t=201s"
                emailWebinarLink="https://www.rialtes.com/insights/webinars/rialtes-web/src/app/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes" />
        </>
    );
}


