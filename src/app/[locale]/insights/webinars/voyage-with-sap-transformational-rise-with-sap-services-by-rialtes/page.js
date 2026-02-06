"use client";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/webinars.json';
import esContent from '../../../../../../messages/es/webinars.json';
import frContent from '../../../../../../messages/fr/webinars.json';
import WebinarComponent from "@/app/[locale]/components/webinarComponent";
import { changeLocalization } from "../../../components/changeLocalization";


export default function () {
    const t = useTranslations("voyageWebinar");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { webinarAdvantagesData, whoShouldAttendData,schemaData } = content.voyageWebinar
    return (
        <>
            <WebinarComponent fullUrl="https://rialtes.netlify.app/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes"
                seoData={
                    < Seo
                        title={t('seoTitle')}
                        description={t('seoDescription')}
                        canonical={`https://www.rialtes.com/${locale}/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes`}
                    />

                }
                schemaData={schemaData}
                deskImg="/images/webinar/digital-wave-data-network.webp"
                mobImg="/images/webinar/digital-wave-data-network.webp"
                imageAlt={t('imageAlt')}
                webinarTitle={t('webinarTitle')}
                speakerName="Anuraag Aggarwal"
                speakerDesignation="Vice President of Global Sales"
                speakerImg="/images/webinar/Anurag.webp"
                speakerImgAlt="webinar speaker Anuraag Aggarwal"
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


