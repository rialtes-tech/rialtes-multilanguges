"use client";
import Seo from "../components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../messages/en/insight.json';
import esContent from '../../../../messages/es/insight.json';

export default function Page() {
    const t = useTranslations('termsUse');
    const locale = useLocale();
    const termsUseContent = locale === "es" ? esContent : enContent;
    const { useRestrictions, noWarranties, limitationOfLiability, submissionTerms } = termsUseContent.termsUse;

    return (
        <div className="min-h-screen">
            <Seo
                title="Terms of Use | Rialtes"
                description="Review the terms and conditions for using Rialtes’ website, services, and content. Understand your rights, responsibilities, and legal disclaimers."
                keywords="Contact, website, welcome"
                canonical={"https://www.rialtes.com/terms-of-use/"}
            />
            <section className="custom-container mb-[40px]">
                <div className="pb-10 xl:max-w-[1084px] xl:w-[1084px]">
                    <div>
                        <h1 className="text-[#0092E0] py-6 ">{t('termsTitle')}</h1>
                    </div>
                    <div>
                        <p>{t('termsDesc')}</p>
                        <p className="mt-5">{t('termsDescOne')}</p>

                        <h3 className="text-[#0092E0] mt-5">{t('useTitle')}</h3>
                        <p className="mt-3">{t('useDesc')}</p>
                        <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 mt-3 xl:text-[20px] text-[16px] font-medium">
                            {useRestrictions.map((item, index) => (
                                <li key={index} className="pb-4 text-black">{item}</li>
                            ))}
                        </ul>
                        <p>{t('useDescOne')}</p>

                        <h3 className="text-[#0092E0] pb-2 mt-10">{t('noTitle')}</h3>
                        <p>{t('noDesc')}</p>
                        <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 mt-3 xl:text-[20px] text-[16px] font-medium">
                            {noWarranties.map((item, index) => (
                                <li key={index} className="pb-4 text-black">{item}</li>
                            ))}
                        </ul>
                        <p>{t('noDescOne')}</p>

                        <h3 className="text-[#0092E0] pb-2 mt-10">{t('limitationTitle')}</h3>
                        <p>{t('limitationDesc')}</p>
                        <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 mt-3 xl:text-[20px] text-[16px] font-medium">
                            {limitationOfLiability.map((item, index) => (
                                <li key={index} className="pb-4 text-black">{item}</li>
                            ))}
                        </ul>
                        <p>{t('limitationDescOne')}</p>

                        <h3 className="text-[#0092E0] pb-2 mt-10">{t('linksTitle')}</h3>
                        <p>{t('linksDesc')}</p>

                        <h3 className="text-[#0092E0] pb-2 mt-10">{t('lawTitle')}</h3>
                        <p>{t('lawDesc')}</p>
                        <p className="mt-3">{t('lawDescOne')}</p>

                        <h3 className="text-[#0092E0] pb-2 mt-10">{t('complianceTitle')}</h3>
                        <p>{t('complianceDesc')}</p>

                        <h3 className="text-[#0092E0] pb-2 mt-10">{t('submissionTitle')}</h3>
                        <p>{t('submissionOne')}</p>
                        <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 mt-3 xl:text-[20px] text-[16px] font-medium">
                            {submissionTerms.map((item, index) => (
                                <li key={index} className="pb-4 text-black">{item}</li>
                            ))}
                        </ul>
                        <p>{t('submissionTwo')}</p>

                        <p className="mt-5">{t('submissionThree')}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}