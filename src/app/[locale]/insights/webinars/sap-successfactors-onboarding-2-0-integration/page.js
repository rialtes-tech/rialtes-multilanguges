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
    "name": "SAP SuccessFactors Onboarding 2.0 Webinar: Smarter Hiring Journeys",
    "description": "Explore how SAP SuccessFactors Onboarding 2.0 transforms the new hire journey with digital tools, seamless Employee Central integration, and greater admin control. A must-attend webinar for HR professionals and SAP consultants.",
    "url": "https://www.rialtes.com/insights/webinars/sap-successfactors-onboarding-2-0-integration/",
    "startDate": "2025-05-27T20:30:00+05:30",
    "endDate": "2025-05-27T21:00:00+05:30",
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
        "name": "Vidya Kumar",
        "jobTitle": "Principal Managing Consultant",
        "url": "https://www.linkedin.com/in/vidya-kumar-a82a5b21/"
    },
    "audience": {
        "@type": "Audience",
        "audienceType": "HR Leaders, Talent Acquisition Specialists, Hiring Managers, SAP SuccessFactors Users, SAP Consultants"
    },
    "location": {
        "@type": "VirtualLocation",
        "url": "https://www.rialtes.com/insights/webinars/sap-successfactors-onboarding-2-0-integration"
    },
    "keywords": "SAP SuccessFactors onboarding 2.0, hr onboarding webinar, employee central integration, onboarding automation"
}
export default function () {
    const t = useTranslations("successFactorWebinar");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { webinarAdvantagesData, whoShouldAttendData } = content.voyageWebinar
    return (
        <>
            <WebinarComponent fullUrl="https://rialtes.netlify.app/insights/webinars/sap-successfactors-onboarding-2-0-integration"
                seoData={
                    < Seo
                        title="SAP SuccessFactors Onboarding 2.0 Webinar: Boost HR ROI | Rialtes"
                        description="Join our SAP SuccessFactors Onboarding 2.0 webinar—see how it compares to 1.0, integrates with Employee Central, and powers automated HR workflows"
                        canonical="https://www.rialtes.com/insights/webinars/sap-successfactors-onboarding-2-0-integration/"
                    />

                }
                schemaData={schemaData}
                deskImg="/images/webinar/banner-what.webp"
                mobImg="/images/webinar/banner-what.webp"
                webinarTitle={t('webinarTitle')}
                speakerName="Vidya Kumar"
                speakerDesignation="Principal Managing Consultant"
                speakerImg="/images/webinar/Vidya-Kumar.webp"
                speakerImgAlt="webinar speaker image"
                webinarInfo={t('webinarInfo')}
                webinarAdvantages={webinarAdvantagesData}
                whoShouldAttend={whoShouldAttendData}
                dateNumber="27"
                monthYear="May 2025"
                CstIstTime={`10:00 AM CST\u00A0\u00A0\u00A0|\u00A0\u00A08:30 PM IST`}
                estPstTime={`11 AM EST\u00A0\u00A0\u00A0|\u00A0\u00A08 AM PST`} // u00A0 for exrtra space
                redirectUrl="https://www.youtube.com/watch?v=a0ad90kWp0c&t=201s"
                emailWebinarLink="https://www.rialtes.com/insights/webinars/rialtes-web/src/app/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes" />
        </>
    );
}