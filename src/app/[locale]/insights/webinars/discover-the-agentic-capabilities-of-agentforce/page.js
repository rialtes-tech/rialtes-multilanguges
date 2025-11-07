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
    "name": "Discover the Agentic Capabilities of Agentforce",
    "description": "Join this exclusive webinar to explore how Agentforce brings agentic AI to life with intelligent autonomous agents that think, act, learn, and evolve alongside your team. Discover how Agentforce transforms workplaces with proactive AI agents capable of autonomous task execution, contextual human-like interactions, seamless integration, and real-world impact across industries.",
    "url": "https://www.rialtes.com/insights/webinars/discover-the-agentic-capabilities-of-agentforce",
    "startDate": "2025-05-15T20:30:00+05:30",
    "endDate": "2025-05-15T21:00:00+05:30",
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
        "name": "Lokesh Adhikari",
        "jobTitle": "Software Engineer",
        "url": "https://www.linkedin.com/in/lokeshadhikari/"
    },
    "location": {
        "@type": "VirtualLocation",
        "url": "https://www.rialtes.com/insights/webinars/discover-the-agentic-capabilities-of-agentforce"
    },
    "audience": {
        "@type": "Audience",
        "audienceType": [
            "Business Leaders",
            "Innovation & AI Teams",
            "IT Decision-Makers",
            "Salesforce Administrators and Consultants",
            "Anyone looking to supercharge workflows with intelligent, agentic AI solutions"
        ]
    },
    "keywords": [
        "Agentforce webinar",
        "agentic AI webinar",
        "Salesforce AI",
        "Rialtes webinar"
    ]
}
export default function () {
    const t = useTranslations("discoverAgenticWebinar");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { webinarAdvantagesData, whoShouldAttendData } = content.discoverAgenticWebinar
    return (
        <>
            <WebinarComponent fullUrl="https://rialtes.netlify.app/insights/webinars/discover-the-agentic-capabilities-of-agentforce"
                seoData={
                    < Seo
                        title={t('seoTitle')}
                        description={t('seoDescription')}
                        canonical={`https://www.rialtes.com/${locale}/insights/webinars/discover-the-agentic-capabilities-of-agentforce/`}
                    />
                }
                schemaData={schemaData}
                deskImg="/images/webinar/ai-digital-transformation-data-overlay.webp"
                mobImg="/images/webinar/ai-digital-transformation-data-overlay.webp"
                imageAlt={t('imageAlt')}
                webinarTitle={t('webinarTitle')}
                speakerName="Lokesh Adhikari"
                speakerDesignation="Software Engineer - Salesforce"
                speakerImg="/images/webinar/Lokesh.webp"
                speakerImgAlt="webinar speaker Lokesh Adhikari"
                webinarInfo={t('webinarInfo')}
                webinarAdvantages={webinarAdvantagesData}
                whoShouldAttend={whoShouldAttendData}
                dateNumber="15"
                monthYear="May 2025"
                CstIstTime={`10:00 AM CST\u00A0\u00A0\u00A0|\u00A0\u00A08:30 PM IST`}
                estPstTime={`11 AM EST\u00A0\u00A0\u00A0|\u00A0\u00A08 AM PST`} // u00A0 for exrtra space
                redirectUrl="https://www.youtube.com/watch?v=EcPEwPAG2SM"
                emailWebinarLink="https://www.rialtes.com/insights/webinars/discover-the-agentic-capabilities-of-agentforce" />
        </>
    );
}


