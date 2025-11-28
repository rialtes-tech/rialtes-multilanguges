"use client";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/webinars.json';
import esContent from '../../../../../../messages/es/webinars.json';
import frContent from '../../../../../../messages/fr/webinars.json';
import WebinarComponent from "@/app/[locale]/components/webinarComponent";
import { changeLocalization } from "../../../components/changeLocalization";


export default function () {
    const t = useTranslations("deliverEndToEndWebinar");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { webinarAdvantagesData, whoShouldAttendData,schemaData } = content.deliverEndToEndWebinar
    return (
        <>
            <WebinarComponent fullUrl="https://rialtes.netlify.app/insights/webinars/deliver-end-to-end-customer-journey-with-salesforce-automotive-cloud"
                seoData={
                    < Seo
                        title={t('seoTitle')}
                        description={t('seoDescription')}
                        canonical={`https://www.rialtes.com/${locale}/insights/webinars/deliver-end-to-end-customer-journey-with-salesforce-automotive-cloud/`}
                    />
                }
                schemaData={schemaData}
                deskImg="/images/webinar/automotive-fleet-inventory-aerial-view.webp"
                mobImg="/images/webinar/automotive-fleet-inventory-aerial-view.webp"
                imageAlt={t('imageAlt')}
                webinarTitle={t('webinarTitle')}
                speakerName="Divya Agarwal"
                speakerDesignation="Software Engineer - Salesforce"
                speakerImg="/images/webinar/Divya.webp"
                speakerImgAlt="webinar speaker Divya Agarwal"
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


