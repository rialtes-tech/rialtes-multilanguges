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
                        <h1 className="text-[#0092E0] py-6 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('termsTitle')}</h1>
                    </div>
                    <div>
                        <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t('termsDesc')}</p>
                        <p className="mt-5 4xl:text-[22px] xl:text-[18px] text-[16px]">{t('termsDescOne')}</p>

                        <h3 className="text-[#0092E0] mt-5 4xl:text-[35px] xl:text-[30px] text-[24px]">{t('useTitle')}</h3>
                        <p className="mt-3 4xl:text-[22px] xl:text-[18px] text-[16px]">{t('useDesc')}</p>

                        <UnorderedList arrName={useRestrictions} ulClassName="list-disc marker:text-[#0092E0] text-black pl-[32px] pb-2 mt-3 font-medium" liClassName="pb-4 4xl:text-[22px] xl:text-[18px] text-[16px] text-black" />
                        <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t('useDescOne')}</p>

                        <h3 className="text-[#0092E0] pb-2 mt-10 4xl:text-[35px] xl:text-[30px] text-[24px]"> {t('noTitle')}</h3>
                        <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t('noDesc')}</p>

                        <UnorderedList arrName={noWarranties} ulClassName="list-disc marker:text-[#0092E0] text-black pl-[32px] pb-2 mt-3 font-medium" liClassName="pb-4 4xl:text-[22px] xl:text-[18px] text-[16px] text-black" />

                        <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t('noDescOne')}</p>

                        <h3 className="text-[#0092E0] pb-2 mt-10 4xl:text-[35px] xl:text-[30px] text-[24px]">{t('limitationTitle')}</h3>
                        <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t('limitationDesc')}</p>

                        <UnorderedList arrName={limitationOfLiability} ulClassName="list-disc marker:text-[#0092E0] text-black pl-[32px] pb-2 mt-3 font-medium" liClassName="pb-4 4xl:text-[22px] xl:text-[18px] text-[16px] text-black" />

                        <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t('limitationDescOne')}</p>

                        <h3 className="text-[#0092E0] pb-2 mt-10 4xl:text-[35px] xl:text-[30px] text-[24px]">{t('linksTitle')}</h3>
                        <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t('linksDesc')}</p>

                        <h3 className="text-[#0092E0] pb-2 mt-10 4xl:text-[35px] xl:text-[30px] text-[24px]">{t('lawTitle')}</h3>
                        <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t('lawDesc')}</p>
                        <p className="mt-3 4xl:text-[22px] xl:text-[18px] text-[16px]">{t('lawDescOne')}</p>

                        <h3 className="text-[#0092E0] pb-2 mt-10 4xl:text-[35px] xl:text-[30px] text-[24px]">{t('complianceTitle')}</h3>
                        <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t('complianceDesc')}</p>

                        <h3 className="text-[#0092E0] pb-2 mt-10 4xl:text-[35px] xl:text-[30px] text-[24px]">{t('submissionTitle')}</h3>
                        <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t('submissionOne')}</p>

                        <UnorderedList arrName={submissionTerms} ulClassName="list-disc marker:text-[#0092E0] text-black pl-[32px] pb-2 mt-3 font-medium" liClassName="pb-4 4xl:text-[22px] xl:text-[18px] text-[16px] text-black" />

                        <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t('submissionTwo')}</p>

                        <p className="mt-5 4xl:text-[22px] xl:text-[18px] text-[16px]">{t('submissionThree')}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}