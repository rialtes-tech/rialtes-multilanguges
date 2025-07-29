import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    // Typically corresponds to the `[locale]` segment
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    const homepage = (await import(`../../messages/${locale}/homepage.json`)).default;
    const header = (await import(`../../messages/${locale}/homepage.json`)).default;
    const footer = (await import(`../../messages/${locale}/homepage.json`)).default;
    const contactForm = (await import(`../../messages/${locale}/homepage.json`)).default;
    const learnMorePage = (await import(`../../messages/${locale}/homepage.json`)).default;
    const useCarouselComponent = (await import(`../../messages/${locale}/homepage.json`)).default;
    const featuredCarousel = (await import(`../../messages/${locale}/homepage.json`)).default;
    const servicesBlogs = (await import(`../../messages/${locale}/homepage.json`)).default;
    const exploreMore = (await import(`../../messages/${locale}/homepage.json`)).default;

    const agentChat = (await import(`../../messages/${locale}/products.json`)).default;

    const uiPath = (await import(`../../messages/${locale}/solutions.json`)).default;
    const tosca = (await import(`../../messages/${locale}/solutions.json`)).default;
    const aboutUs = (await import(`../../messages/${locale}/aboutus.json`)).default;
    const sapBdc = (await import(`../../messages/${locale}/solutions.json`)).default;
    const salesforceDataCloud = (await import(`../../messages/${locale}/solutions.json`)).default;
    const datasphere = (await import(`../../messages/${locale}/solutions.json`)).default;
    const agentforce = (await import(`../../messages/${locale}/solutions.json`)).default;
    const sapConsulting = (await import(`../../messages/${locale}/solutions.json`)).default;
    const oracle = (await import(`../../messages/${locale}/solutions.json`)).default;
    const sapCpi = (await import(`../../messages/${locale}/solutions.json`)).default;

    const successPlus = (await import(`../../messages/${locale}/services.json`)).default;
    const sapBuyPlus = (await import(`../../messages/${locale}/services.json`)).default;
    const kinaxis = (await import(`../../messages/${locale}/services.json`)).default;
    const growWithSap = (await import(`../../messages/${locale}/services.json`)).default;
    const riseWithSap = (await import(`../../messages/${locale}/services.json`)).default;
    const autoSense = (await import(`../../messages/${locale}/services.json`)).default;
    const salesforceAgent = (await import(`../../messages/${locale}/services.json`)).default;
    const sapDigitalDesk = (await import(`../../messages/${locale}/services.json`)).default;
    const retailPlus = (await import(`../../messages/${locale}/services.json`)).default;
    const lifeAiPlus = (await import(`../../messages/${locale}/services.json`)).default;
    const advantagePlus = (await import(`../../messages/${locale}/services.json`)).default;
<<<<<<< Updated upstream
    const industry = (await import(`../../messages/${locale}/industry.json`)).default;
    const realEstate = (await import(`../../messages/${locale}/industry.json`)).default;
    const caseStudyIndivisual = (await import(`../../messages/${locale}/industry.json`)).default;

=======
    const rialFinance = (await import(`../../messages/${locale}/services.json`)).default;
>>>>>>> Stashed changes


    return {
        locale,
        messages: {
            ...homepage,
            ...aboutUs,
            ...header,
            ...learnMorePage,
            ...contactForm,
            ...footer,
            ...sapBdc,
            ...salesforceDataCloud,
            ...datasphere,
            ...agentforce,
            ...sapConsulting,
            ...useCarouselComponent,
            ...featuredCarousel,
            ...sapBuyPlus,
            ...oracle,
            ...successPlus,
            ...servicesBlogs,
            ...exploreMore,
            ...agentChat,
            ...sapCpi,
            ...kinaxis,
            ...growWithSap,
            ...riseWithSap,
            ...uiPath,
            ...tosca,
            ...autoSense,
            ...salesforceAgent,
            ...sapDigitalDesk,
            ...retailPlus,
            ...lifeAiPlus,
            ...advantagePlus,
<<<<<<< Updated upstream
            ...industry,
            ...realEstate,
            ...caseStudyIndivisual,

=======
            ...rialFinance
>>>>>>> Stashed changes
        }
    };
});
