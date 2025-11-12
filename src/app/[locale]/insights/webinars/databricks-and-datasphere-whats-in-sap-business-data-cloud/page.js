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
    "name": "Databricks and Datasphere — What’s in SAP Business Data Cloud?",
    "description": "Explore how SAP Datasphere integrates with Databricks to create the SAP Business Data Cloud. Learn how you can harmonize data across platforms, streamline your analytics strategy, and enable trusted business-ready data across your organization.",
    "url": "https://www.rialtes.com/insights/webinars/databricks-and-datasphere-whats-in-sap-business-data-cloud",
    "startDate": "2025-05-13T20:30:00+05:30",
    "endDate": "2025-05-13T21:00:00+05:30",
    "duration": "PT30M",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventCompleted",
    "organizer": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg"
    },
    "performer": {
        "@type": "Person",
        "name": "Akshay Kale",
        "jobTitle": "Sr. Managing Director – SAP Services",
        "url": "https://www.linkedin.com/in/sap-akshaykale/"
    },
    "image": "https://www.rialtes.com/images/webinar/digital-data-wave-visualization-abstract.webp",
    "audience": {
        "@type": "Audience",
        "audienceType": "Data Engineers, SAP Architects, Analytics Leaders, CIOs, CTOs, BI Professionals"
    },
    "location": {
        "@type": "VirtualLocation",
        "url": "https://www.rialtes.com/insights/webinars/databricks-and-datasphere-whats-in-sap-business-data-cloud"
    },
    "keywords": "SAP webinar​, SAP Datasphere webinar, Databricks webinar, SAP Business Data Cloud, Rialtes webinars"
}

export default function () {
    const t = useTranslations("databricksWebinar");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { webinarAdvantagesData, whoShouldAttendData } = content.databricksWebinar
    return (
        <>
            <WebinarComponent fullUrl="https://rialtes.netlify.app/insights/webinars/databricks-and-datasphere-whats-in-sap-business-data-cloud"
                seoData={
                    <Seo
                        title={t('seoTitle')}
                        description={t('seoDescription')}
                        canonical={`https://www.rialtes.com/${locale}/insights/webinars/databricks-and-datasphere-whats-in-sap-business-data-cloud/`}
                    />
                }
                schemaData={schemaData}
                deskImg="/images/webinar/digital-data-wave-visualization-abstract.webp"
                mobImg="/images/webinar/digital-data-wave-visualization-abstract.webp"
                imageAlt={t('imageAlt')}
                webinarTitle={t('webinarTitle')}
                speakerName="Akshay Kale"
                speakerDesignation="Sr. Managing Director – SAP Services"
                speakerImg="/images/webinar/Akshay.webp"
                speakerImgAlt="webinar speaker Akshay Kale"
                webinarInfo={t('webinarInfo')}
                webinarAdvantages={webinarAdvantagesData}
                whoShouldAttend={whoShouldAttendData}
                dateNumber="13"
                monthYear="May 2025"
                CstIstTime={`10:00 AM CST\u00A0\u00A0\u00A0|\u00A0\u00A08:30 PM IST`}
                estPstTime={`11 AM EST\u00A0\u00A0\u00A0|\u00A0\u00A08 AM PST`} // u00A0 for exrtra space
                redirectUrl="https://www.youtube.com/watch?v=UNe7QQHRMUU&t=569s"
                emailWebinarLink="https://www.rialtes.com/insights/webinars/databricks-and-datasphere-whats-in-sap-business-data-cloud/" />
        </>
    );
}


