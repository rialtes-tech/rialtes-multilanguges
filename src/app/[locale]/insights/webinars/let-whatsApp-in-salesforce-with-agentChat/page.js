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
    "name": "Let’s WhatsApp in Salesforce with AgentChat",
    "description": "Discover how AgentChat, Rialtes' native, bidirectional Salesforce WhatsApp integration, transforms team communication directly within Salesforce. Learn about cross-cloud compatibility, faster customer response times, workflow automation, and more. This is a recorded webinar.",
    "url": "https://www.rialtes.com/insights/webinars/let-whatsapp-in-salesforce-with-agentchat",
    "startDate": "2024-05-06T20:30:00+05:30",
    "endDate": "2024-05-06T21:00:00+05:30",
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
        "jobTitle": "Software Engineer - Salesforce",
        "url": "https://www.linkedin.com/in/lokeshadhikari/"
    },
    "image": "https://www.rialtes.com/images/webinar/woman-smiling-smartphone-blue-background.webp",
    "audience": {
        "@type": "Audience",
        "audienceType": "Salesforce Admins & Developers, Sales & Service Team Leads, Customer Experience Managers, Field Operations Managers, CRM & Marketing Professionals"
    },
    "location": {
        "@type": "VirtualLocation",
        "url": "https://www.rialtes.com/insights/webinars/let-whatsapp-in-salesforce-with-agentchat"
    },
    "keywords": "WhatsApp integration with Salesforce, Salesforce webinar, Salesforce integration webinar"
}

export default function () {
    const t = useTranslations("letsWhatsappWebinar");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { webinarAdvantagesData, whoShouldAttendData } = content.letsWhatsappWebinar
    return (
        <>
            <WebinarComponent fullUrl="https://rialtes.netlify.app/insights/webinars/let-whatsapp-in-salesforce-with-agentchat"
                seoData={
                    < Seo
                        title={t('seoTitle')}
                        description={t('seoDescription')}
                        canonical={`https://www.rialtes.com/${locale}/insights/webinars/let-whatsapp-in-salesforce-with-agentchat/`}
                    />
                }
                schemaData={schemaData}
                deskImg="/images/webinar/woman-smiling-smartphone-blue-background.webp"
                mobImg="/images/webinar/woman-smiling-smartphone-blue-background.webp"
                imageAlt={t('imageAlt')}
                webinarTitle={t('webinarTitle')}
                speakerName="Lokesh Adhikari"
                speakerDesignation="Software Engineer - Salesforce"
                speakerImg="/images/webinar/Lokesh.webp"
                speakerImgAlt="webinar speaker Lokesh Adhikari"
                webinarInfo={t('webinarInfo')}
                webinarAdvantages={webinarAdvantagesData}
                whoShouldAttend={whoShouldAttendData}
                dateNumber="06"
                monthYear="May 2025"
                CstIstTime={`10:00 AM CST\u00A0\u00A0\u00A0|\u00A0\u00A08:30 PM IST`}
                estPstTime={`11 AM EST\u00A0\u00A0\u00A0|\u00A0\u00A08 AM PST`} // u00A0 for exrtra space
                redirectUrl="https://www.youtube.com/watch?v=QGKwqgjEyT4"
                emailWebinarLink="https://www.rialtes.com/insights/webinars/let-whatsapp-in-salesforce-with-agentchat" />
        </>
    );
}


