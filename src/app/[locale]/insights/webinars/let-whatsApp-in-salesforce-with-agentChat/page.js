"use client";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/webinars.json';
import esContent from '../../../../../../messages/es/webinars.json';
import frContent from '../../../../../../messages/fr/webinars.json';
import WebinarComponent from "@/app/[locale]/components/webinarComponent";
import { changeLocalization } from "../../../components/changeLocalization";



export default function () {
    const t = useTranslations("letsWhatsappWebinar");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { webinarAdvantagesData, whoShouldAttendData,schemaData } = content.letsWhatsappWebinar
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


