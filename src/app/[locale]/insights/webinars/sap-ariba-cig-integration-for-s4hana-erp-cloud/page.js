"use client";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/webinars.json';
import esContent from '../../../../../../messages/es/webinars.json';
import frContent from '../../../../../../messages/fr/webinars.json';
import WebinarComponent from "@/app/[locale]/components/webinarComponent";
import { changeLocalization } from "../../../components/changeLocalization";



export default function () {
    const t = useTranslations("CIGWebinar");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { webinarAdvantagesData, whoShouldAttendData,schemaData } = content.CIGWebinar
    return (
        <>
            <WebinarComponent fullUrl="https://rialtes.netlify.app/insights/webinars/sap-ariba-cig-integration-for-s4hana-erp-cloud"
                seoData={
                    <Seo
                        title={t('seoTitle')}
                        description={t('seoDescription')}
                        canonical={`https://www.rialtes.com/${locale}/insights/webinars/sap-ariba-cig-integration-for-s4hana-erp-cloud`}
                    />
                }
                schemaData={schemaData}
                deskImg="/images/webinar/futuristic-glass-building-reflection.webp"
                mobImg="/images/webinar/futuristic-glass-building-reflection.webp"
                imageAlt={t('imageAlt')}
                webinarTitle={t('webinarTitle')}
                speakerName="Sapna Chauhan"
                speakerDesignation="Software Engineer - SAP"
                speakerImg="/images/webinar/Sapna.webp"
                speakerImgAlt="webinar speaker Sapna Chauhan"
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