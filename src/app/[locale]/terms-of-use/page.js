"use client";
import Seo from "../components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../messages/en/homepage.json';
import esContent from '../../../../messages/es/homepage.json';
import frContent from '../../../../messages/fr/homepage.json';
import { changeLocalization } from "../components/changeLocalization";
import UnorderedList from "../components/unorderedList";
export default function Page() {
    const t = useTranslations('termsUse');
    const locale = useLocale();
    const termsUseContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { useRestrictions, noWarranties, limitationOfLiability, submissionTerms } = termsUseContent.termsUse;

    return (
        <section className="min-h-screen">
            <Seo
                title="Terms of Use | Rialtes"
                description="Review the terms and conditions for using Rialtes’ website, services, and content. Understand your rights, responsibilities, and legal disclaimers."
                keywords="Contact, website, welcome"
                canonical={"https://www.rialtes.com/terms-of-use/"}
            />
            <section className="custom-container pt-[40px] pb-[80px]">
                <div className="grid lg:grid-cols-12">
                    <div className="4xl:col-span-9 xl:col-span-10 lg:col-span-11">
                        <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t('termsTitle')}</h1>
                        <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('termsDesc')}</p>
                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('termsDescOne')}</p>


                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('useTitle')}</h2>
                            <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('useDesc')}</p>
                            <UnorderedList arrName={useRestrictions} ulClassName="list-disc marker:text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 space-y-3 pl-[34px] font-medium" liClassName="" />
                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">{t('useDescOne')}</p>
                        </div>

                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('noTitle')}</h2>
                            <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('noDesc')}</p>
                            <UnorderedList arrName={noWarranties} ulClassName="list-disc marker:text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 space-y-3 pl-[34px] font-medium" liClassName="" />
                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">{t('noDescOne')}</p>
                        </div>

                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('limitationTitle')}</h2>
                            <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('limitationDesc')}</p>
                            <UnorderedList arrName={limitationOfLiability} ulClassName="list-disc marker:text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 space-y-3 pl-[34px] font-medium" liClassName="" />
                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">{t('limitationDescOne')}</p>
                        </div>

                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('linksTitle')}</h2>
                            <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('linksDesc')}</p>
                        </div>

                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('lawTitle')}</h2>
                            <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('lawDesc')}</p>
                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('lawDescOne')}</p>
                        </div>

                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('complianceTitle')}</h2>
                            <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('complianceDesc')}</p>
                        </div>

                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('submissionTitle')}</h2>
                            <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('submissionOne')}</p>
                            <UnorderedList arrName={submissionTerms} ulClassName="list-disc marker:text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 space-y-3 pl-[34px] font-medium" liClassName="" />
                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('submissionTwo')}</p>
                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('submissionThree')}</p>
                        </div>

                    </div>
                </div>
            </section>
        </section>
    );
}