"use client";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/webinars.json';
import esContent from '../../../../../../messages/es/webinars.json';
import frContent from '../../../../../../messages/fr/webinars.json';
import WebinarComponent from "@/app/[locale]/components/webinarComponent";
import { changeLocalization } from "../../../components/changeLocalization";



export default function () {
    const t = useTranslations("databricksWebinar");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { webinarAdvantagesData, whoShouldAttendData,schemaData } = content.databricksWebinar
    return (
        <>
            <WebinarComponent fullUrl="https://rialtes.netlify.app/insights/webinars/databricks-and-datasphere-whats-in-sap-business-data-cloud"
                seoData={
                    <Seo
                        title={t('seoTitle')}
                        description={t('seoDescription')}
                        canonical={`https://www.rialtes.com/${locale}/insights/webinars/databricks-and-datasphere-whats-in-sap-business-data-cloud`}
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


