"use client";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/webinars.json';
import esContent from '../../../../../../messages/es/webinars.json';
import WebinarComponent from "@/app/[locale]/components/webinarComponent";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Deliver End-to-End Customer Journey with Salesforce Automotive Cloud",
    "description": "Explore how Salesforce Automotive Cloud is revolutionizing customer engagement in the auto industry. Discover how your teams can steer every customer interaction using data, AI, and automation—from lead to loyalty, all inside one connected platform.",
    "url": "https://www.rialtes.com/insights/webinars/deliver-end-to-end-customer-journey-with-salesforce-automotive-cloud",
    "startDate": "2025-05-08T20:30:00+05:30",
    "endDate": "2025-05-08T21:00:00+05:30",
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
        "name": "Divya Agarwal",
        "jobTitle": "Software Engineer",
        "url": "https://www.linkedin.com/in/divya-agarwal-071324207/"
    },
    "location": {
        "@type": "VirtualLocation",
        "url": "https://www.rialtes.com/insights/webinars/deliver-end-to-end-customer-journey-with-salesforce-automotive-cloud"
    },
    "audience": {
        "@type": "Audience",
        "audienceType": [
            "Automotive Sales & Service Leaders",
            "CRM & Digital Transformation Heads",
            "Dealership Owners & Operators",
            "Auto Manufacturer IT Teams",
            "Salesforce Admins & Consultants"
        ]
    },
    "keywords": [
        "Salesforce Automotive Cloud",
        "automotive cloud webinar",
        "auto industry webinar",
        "Rialtes webinars"
    ]
}
export default function () {
    const t = useTranslations("deliverEndToEndWebinar");
    const locale = useLocale();
    const content = locale === "es" ? esContent : enContent;
    const { webinarAdvantagesData, whoShouldAttendData } = content.deliverEndToEndWebinar
    return (
        <>
            <WebinarComponent fullUrl="https://rialtes.netlify.app/insights/webinars/deliver-end-to-end-customer-journey-with-salesforce-automotive-cloud"
                seoData={
                    < Seo
                        title="Salesforce Automotive Cloud Webinar: Transforming Customer Engagement"
                        description="Join our webinar to explore how Salesforce Automotive Cloud enhances customer journeys with unified data, AI-driven insights, and seamless automation."
                        canonical="https://www.rialtes.com/insights/webinars/deliver-end-to-end-customer-journey-with-salesforce-automotive-cloud/"
                    />
                }
                schemaData={schemaData}
                deskImg="/images/webinar/thumbc.webp"
                mobImg="/images/webinar/thumbc.webp"
                webinarTitle={t('webinarTitle')}
                speakerName="Divya Agarwal"
                speakerDesignation="Software Engineer - Salesforce"
                speakerImg="/images/webinar/Divya.webp"
                speakerImgAlt="webinar speaker image"
                webinarInfo={t('webinarInfo')}
                webinarAdvantages={webinarAdvantagesData}
                whoShouldAttend={whoShouldAttendData}
                dateNumber="08"
                monthYear="May 2025"
                CstIstTime={`10:00 AM CST\u00A0\u00A0\u00A0|\u00A0\u00A08:30 PM IST`}
                estPstTime={`11 AM EST\u00A0\u00A0\u00A0|\u00A0\u00A08 AM PST`} // u00A0 for exrtra space
                redirectUrl="https://www.youtube.com/watch?v=41Cz_wwRCPU"
                emailWebinarLink="https://www.rialtes.com/insights/webinars/deliver-end-to-end-customer-journey-with-salesforce-automotive-cloud" />
        </>
    );
}


