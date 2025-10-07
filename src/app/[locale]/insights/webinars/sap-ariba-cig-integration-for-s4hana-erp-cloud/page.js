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
    "name": "SAP Ariba CIG Integration Webinar: ERP Flows, Simplified",
    "description": "Discover how SAP Ariba Cloud Integration Gateway (CIG) connects your SAP ERP (S/4HANA) to the Ariba Network—streamlining integration, improving efficiency, and simplifying procurement transactions. A must-attend online webinar for ERP and SAP professionals.",
    "url": "https://www.rialtes.com/insights/webinars/sap-ariba-cig-integration-for-s4hana-erp-cloud",
    "startDate": "2025-06-10T20:30:00+05:30",
    "endDate": "2025-06-10T21:00:00+05:30",
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
        "name": "Sapna Chauhan",
        "jobTitle": "Software Engineer",
        "url": "https://www.linkedin.com/in/sapna-chauhan-a85b32219/"
    },
    "image": "https://www.rialtes.com/images/webinar/Webinar_27%20May%2025_webinar%20Banner.webp",
    "audience": {
        "@type": "Audience",
        "audienceType": "Procurement Leaders, Sourcing Managers, IT Decision-Makers, SAP Consultants, ERP Professionals"
    },
    "location": {
        "@type": "VirtualLocation",
        "url": "https://www.rialtes.com/insights/webinars/sap-ariba-cig-integration-for-s4hana-erp-cloud"
    },
    "keywords": "sap ariba cig integration, S4HANA erp cloud, sap procurement webinar"

}

export default function () {
    const t = useTranslations("CIGWebinar");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { webinarAdvantagesData, whoShouldAttendData } = content.CIGWebinar
    return (
        <>
            <WebinarComponent fullUrl="https://rialtes.netlify.app/insights/webinars/sap-ariba-cig-integration-for-s4hana-erp-cloud"
                seoData={
                    <Seo
                        title="SAP Ariba CIG Integration Webinar: S/4HANA Cloud Sync | Rialtes"
                        description="Discover how SAP Ariba CIG integration helps ERP and S/4HANA users streamline procurement with cloud-based automation and insights."
                        canonical="https://www.rialtes.com/insights/webinars/sap-ariba-cig-integration-for-s4hana-erp-cloud/"
                    />
                }
                schemaData={schemaData}
                deskImg="/images/webinar/Webinar_27 May 25_webinar Banner.webp"
                mobImg="/images/webinar/Webinar_27 May 25_webinar Banner.webp"
                webinarTitle={t('webinarTitle')}
                speakerName="Sapna Chauhan"
                speakerDesignation="Software Engineer - SAP"
                speakerImg="/images/webinar/sapna-chauhan.webp"
                speakerImgAlt="webinar speaker image"
                webinarInfo={t('webinarInfo')}
                webinarAdvantages={webinarAdvantagesData}
                whoShouldAttend={whoShouldAttendData}
                dateNumber="10"
                monthYear="June 2025"
                CstIstTime={`10:00 AM CST\u00A0\u00A0\u00A0|\u00A0\u00A08:30 PM IST`}
                estPstTime={`11 AM EST\u00A0\u00A0\u00A0|\u00A0\u00A08 AM PST`} // u00A0 for exrtra space
                redirectUrl="https://youtu.be/cBwMv23szkU"
                emailWebinarLink="https://www.rialtes.com/insights/webinars/rialtes-web/src/app/insights/webinars/sap-ariba-cig-integration-for-s4hana-erp-cloud" />
        </>
    );
}