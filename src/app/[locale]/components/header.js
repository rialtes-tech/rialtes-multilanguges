"use client";
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcherDropdown";
import arrowImg from "../../../../public/images/flags/arrow.png"
import { useLocale, useTranslations } from "next-intl";
import SearchBar from "./searchBar";
import { useRouter } from "next/navigation";


const MenuItem = ({ label, link, onHover, className, onClick, isActive }) => {
  return (
    <Link href={link}>
      <div
        onClick={onClick}
        onMouseEnter={onHover}
        className={`cursor-pointer xl:pt-0 hover:text-[#0092E1] ${isActive ? 'text-[#0092E0]' : ''} ${className}`}>
        {label}
      </div>
    </Link>
  );
};


const Header = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSub, setExpandedSub] = useState(null);
  const [openSection, setOpenSection] = useState("automotive");
  const [openSectionbusiness, setOpenSectionBusiness] = useState("businessTransform");
  const [openSectionSolution, setOpenSectionSolution] = useState("dataAI");
  const [openSectionProduct, setOpenSectionProduct] = useState("rialchat");
  const [activeLink, setActiveLink] = useState(true); // Track active link
  const [activeSubLink, setActiveSubLink] = useState(null);
  const t = useTranslations("header")
  const locale = useLocale();
  const router = useRouter()
  const handleSubMenuClick = (section) => {
    setOpenSection(section);
  };
  const handleSubMenuClickBusiness = (section) => {
    setOpenSectionBusiness(section);
  };
  const handleSubMenuClickSolution = (section) => {
    setOpenSectionSolution(section);
  };
  const handleSubMenuClickProduct = (section) => {
    setOpenSectionProduct(section);
  };
  const cardRef = useRef(null);
  const handleMouseEnterCard = (cardId) => {
    setActiveCard(cardId);
  };
  const handleMouseLeaveCard = () => {
    setActiveCard(null);
  };
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  const handleMenuClick = (menuIndex) => {
    if (activeCard === menuIndex) {
      setActiveCard(null);  // Close the card if clicked again
    } else {
      setActiveCard(menuIndex);  // Open the clicked card
    }
  };
  const toggleSubAccordion = (label) => {
    setExpandedSub(expandedSub === label ? null : label);
  };
  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setActiveLink(false); // Close the card
    router.push(link)
  };
  const handleSubLinkClick = (label) => {
    setActiveSubLink(label); // Set the submenu link as active
    onMenuItemClick(); // Call the menu item click handler passed as prop
  };
  const menuItems = [
    {
      label: t('solutionTitle'),
      links: [
        {
          label: t('dataAiLabel'), href: '/',
          subLinks: [
            { label: t('SalesforceDataCloud'), href: '/solutions/data-ai/salesforce-data-cloud-consulting/' },
            { label: t('dataSphere'), href: '/solutions/data-ai/data-sphere/' },
            { label: t('sapBusinessDataCloud'), href: '/solutions/data-ai/sap-business-data-cloud-bdc-consulting/' },
          ],
        },
        {
          label: t('enterpriseLabel'), href: '/',
          subLinks: [
            { label: t('SAP'), href: '/solutions/enterprise-platforms/sap-consulting-implementation-partners/' },
            { label: t('Salesforce'), href: '/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/' },
            { label: t('SAPAriba'), href: '/services/spend-management/sapbuyplus-ariba-implementation-partner/' },
            { label: t('RevenueCloud'), href: '/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting/' },
            { label: t('Agentforce'), href: '/solutions/artificial-intelligence/salesforce-agentforce-consulting/' },
            { label: t('SuccessPlus'), href: '/services/hxm-transformation/successplus-successfactors-implementation-partner/' },
            { label: t('Oracle'), href: '/solutions/enterprise-platforms/oracle-ebs-consulting/' },
            { label: t('Kinaxis'), href: '/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/' },
          ],
        },
        {
          label: t('integrationLabel'), href: '/',
          subLinks: [
            { label: t('MuleSoft'), href: '/solutions/integration/mulesoft-salesforce/' },
            { label: t('SAPCPI'), href: '/solutions/integration/sap-cloud-platform-integration-consulting/' },

          ],
        },
        {
          label: t('artificialLabel'), href: '/',
          subLinks: [
            { label: t('Agentforce'), href: '/solutions/artificial-intelligence/salesforce-agentforce-consulting/' },
          ],
        },
        {
          label: t('processAutoLabel'), href: '/',
          subLinks: [
            { label: t('Agentforce'), href: '/solutions/artificial-intelligence/salesforce-agentforce-consulting/' },
            { label: t('UIPath'), href: '/solutions/process-automation/rpa-consulting-services-provider/' },

          ],
        },
        {
          label: t('qualityEngLabel'), href: '/',
          subLinks: [
            { label: t('Tosca'), href: '/solutions/quality-engineering-assurance/tosca-software-automation-testing/' },
          ],
        },
      ],
    },
    {
      label: t('productsTitle'),
      links: [
        { label: t('agentchatLabel'), href: '/products/agentchat/' },
        { label: 'MediAIna', href: '/products/mediaina-reimagining-patient-journeys//' },
        { label: ' Exelona', href: '/products/exelona-salesforce-for-real-estate-management/' },
      ],
    },
    {
      label: t('servicesTitle'),
      links: [
        {
          label: t('businessTransformationLabel'), href: '/',
          subLinks: [
            { label: t('GrowwithSAP'), href: '/services/business-transformation/grow-with-sap-services/' },
            { label: t('RisewithSAP'), href: '/services/business-transformation/rise-with-sap-services/' },
            { label: t('OracleEBSPlus'), href: '/solutions/enterprise-platforms/oracle-ebs-consulting/' },
            { label: t('SAPDigitalDesk'), href: '/services/business-transformation/sap-managed-services-provider/' },
          ],
        },
        {
          label: t('LobLabel'), href: '/',
          subLinks: [
            { label: t('AutoSense'), href: '/services/lob/salesforce-automotive-cloud-business-solutions-autosense/' },
            { label: t('Retail+'), href: '/services/lob/retail-plus-business-consulting-omnichannel-solutions/' },
            { label: t('SAPBuy+'), href: '/services/spend-management/sapbuyplus-ariba-implementation-partner/' },
            { label: t('LifeAI+'), href: '/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting/' },
            { label: t('Advantage+'), href: '/services/lob/salesforce-marketing-cloud-implementation-consulting/' },
            { label: t('RialFinance+'), href: '/services/lob/salesforce-fsc-consulting-rialfinanceplus/' }
          ],
        },
        {
          label: t('spendMgmtLabel'), href: '/',
          subLinks: [
            { label: t('SAPBuy+'), href: '/services/spend-management/sapbuyplus-ariba-implementation-partner/' },],
        },
        {
          label: t('hxmLabel'), href: '/',
          subLinks: [
            { label: t('SuccessPlus'), href: '/services/hxm-transformation/successplus-successfactors-implementation-partner/' },],
        },
        {
          label: t('dataAiLabel'), href: '/',
          subLinks: [
            { label: t('SalesforceDataCloud'), href: '/solutions/data-ai/salesforce-data-cloud-consulting/' },
            { label: t('Agentforce'), href: '/solutions/artificial-intelligence/salesforce-agentforce-consulting/' },
            { label: t('SAPDatasphere'), href: '/solutions/data-ai/sap-datasphere-implementation-consulting/' },
            { label: t('sapBusinessDataCloud'), href: '/solutions/data-ai/sap-business-data-cloud-bdc-consulting/' }
          ],
        },
        {
          label: t('intelligentLabel'), href: '/',
          subLinks: [
            { label: t('Kinaxis'), href: '/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/' },
          ],
        },
        {
          label: t('appServicesLabel'), href: '/',
          subLinks: [
            { label: t('SalesforceAgent+'), href: '/services/application-services/salesforce-managed-services-provider-salesforceagentplus/' },
          ],
        },
      ],
    },
    {
      label: t('industriesTitle'),
      links: [
        {
          label: t('realEstateLabel'), href: '/industry/real-estate-property-management/',
        },
        {
          label: t('lifeScienceLabel'), href: '/industry/life-sciences-digital-transformation/',
          subLinks: [
            { label: t('Overview'), href: '/industry/life-sciences-digital-transformation/' },
            { label: t('healthcareTitle'), href: '/industry/life-sciences/healthcare-medtech-patient-care/' },
            { label: t('MedicalDevices'), href: '/industry/life-sciences/medical-devices-it-solutions/' },
            { label: t('pharmaLabel'), href: '/industry/life-sciences/pharma-biotech-digital-transformation/' },
            { label: t('HomeHealth'), href: '/industry/life-sciences/home-health-ai-tech-solutions/' },
          ],
        },
        {
          label: t('semiconductorLabel'), href: '/industry/hitech-semiconductor-ai-it-solutions/',
        },
        {
          label: t('manufacturingLabel'), href: '/industry/manufacturing-cloud-erp/',
        },
        {
          label: t('educationLabel'), href: '/industry/education-cloud-it-solutions/',
        },
        {
          label: t('automativeLabel'), href: '/industry/digital-transformation-in-automotive-industry/',
        },
        {
          label: t('TTHLabel'), href: '/industry/travel-hospitality-it-solutions/',
        },
        {
          label: t('retailLabel'), href: '/industry/retail-industry-digital-transformation/',
        },
        {
          label: t('nonProfitLabel'), href: '/industry/nonprofit-digital-transformation-it-solutions/',
        },
        {
          label: t('financeLabel'), href: '/industry/finance-industry-digital-transformation-services-solutions/',
        },
      ],
    },
    {
      label: t('aboutusTitle'), href: '/about-us/',
      links: [
        { label: t('Overview'), href: '/about-us/' },
        { label: t('Partnership'), href: '/about-us/global-alliances/' },
        { label: t('CultureandValues'), href: '/about-us/our-values/' },
        { label: t('news'), href: '/insights/news/' },
        { label: t('CorporateCitizenship'), href: '/about-us/impact-and-social-responsibility/' },
      ],
    },
    {
      label: t('insightTitle'), href: '/insights/',
      links: [
        { label: t('Overview'), href: '/insights/' },
        { label: t('Blogs'), href: '/insights/blogs/' },
        { label: t('CaseStudies'), href: '/insights/case-studies/' },
        { label: t('Webinars'), href: '/insights/webinars/' },
      ],
    },
  ];
  const Accordion = ({ label, links, expanded, onToggle, toggleSubAccordion, expandedSub, onMenuItemClick }) => {
    return (
      <li className="py-2">
        <button onClick={onToggle} className="w-full text-left flex justify-between items-center">
          <p className={`text-sm font-bold  text-[16px] ${expanded ? 'text-[#0092E0]' : ''}`}>
            {label}
          </p>
          <span>
            {expanded ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
        </button>
        {expanded && (
          <div className="pt-2 text-gray-600">
            {links.map((link, idx) => (
              <div key={idx} className="pb-2 pt-2">
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => toggleSubAccordion(link.label)}
                      className="w-full text-left flex justify-between items-center">
                      <h4
                        className={`text-sm cursor-pointer text-[16px] ${link.label == t('lifeScienceLabel') && "font-light"} ${activeLink === link.label ? 'text-blue-500 font-bold' : 'text-black'}`}
                        onClick={() => handleLinkClick(link.label)}>
                        {link.label}
                      </h4>
                      <span>
                        {expandedSub === link.label ? (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                            <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                            <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                    </button>
                    {expandedSub === link.label && (
                      <div className="pt-2 text-gray-600">
                        {link.subLinks.map((subLink, subIdx) => (
                          <div key={subIdx} className="pb-2 pt-2">
                            <Link
                              href={subLink.href}
                              onClick={() => handleSubLinkClick(subLink.label)}
                              className={`text-sm ${link.label == t('lifeScienceLabel') && "ml-3"} ${activeSubLink === subLink.label ? 'text-blue-500 font-bold' : 'text-[#505050] hover:text-[#05B1FD]'} cursor-pointer`}
                              aria-label={subLink.label}
                            >
                              {subLink.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={onMenuItemClick}
                    aria-label={link.label}
                    className={`text-sm ${activeLink === link.label ? 'text-blue-500 font-bold' : 'text-[#505050] hover:text-[#05B1FD]'} cursor-pointer`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </li>
    );
  };
  return (
    <section className="relative">
      <div className="fixed top-0 left-0 right-0 w-full max-w-[1920px] mx-auto z-50">
        <div className="hidden lg:block bg-white shadow-md custom-container 2xl:pt-[37px] 2xl:pb-[36px] py-[18px]">
          <div className="flex justify-between">
            <div className="">
              <Link rel='preload' href="/" aria-label="Homepage"  >
                <Image
                  className="cursor-pointer w-[120px] md:w-[130px] lg:w-[100px] 2xl:w-[145px] h-auto"
                  alt="Company logo"
                  width={165}
                  height={50}
                  sizes="100vw"
                  src="/images/homepage/logo.svg"
                  style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                  priority
                />
              </Link>
            </div>
            <div className="my-auto flex gap-4">
              <SearchBar />
              <LanguageSwitcher arrowImg={arrowImg} />
            </div>
          </div>

          <div className={`whitespace-nowrap flex items-center gap-2 md:gap-3 lg:gap-[60px] lg:mt-[28px]
            ${locale === "es"
              ? "lg:gap-3"
              : locale === "fr"
                ? "lg:gap-3"
                : "lg:gap-6 overflow-x-auto"
            }`}>
            <MenuItem
              label={t('solutionTitle')}
              link="/"
              onHover={() => handleMouseEnterCard(1)}
              onClick={() => handleMenuClick(1)}
              className={`md:font-bold font-normal 4xl:text-[19px]  2xl:text-[16px]  xl:text-[13px] text-[15px] lg:text-[14px]`}
              isActive={activeCard === 1}
              aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions"
            />
            <MenuItem
              label={t('productsTitle')}
              link="/"
              onHover={() => handleMouseEnterCard(2)}
              onClick={() => handleMenuClick(2)}
              isActive={activeCard === 2}
              className={`md:font-bold font-normal 4xl:text-[19px]  2xl:text-[16px]  xl:text-[13px] text-[15px] lg:text-[14px]`}
              aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions"

            />
            <MenuItem
              label={t('servicesTitle')}
              link="/"
              onHover={() => handleMouseEnterCard(3)}
              onClick={() => handleMenuClick(3)}
              isActive={activeCard === 3}
              className={`md:font-bold font-normal 4xl:text-[19px]  2xl:text-[16px]  xl:text-[13px] text-[15px] lg:text-[14px]`}
              aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions"

            />
            <MenuItem
              label={t('industriesTitle')}
              link="/industry"
              onHover={() => handleMouseEnterCard(4)}
              onClick={() => handleMenuClick(4)}
              isActive={activeCard === 4}
              className={`md:font-bold font-normal 4xl:text-[19px]  2xl:text-[16px]  xl:text-[13px] text-[15px] lg:text-[14px]`}
              aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions"

            />
            <MenuItem
              label={t('aboutusTitle')}
              link="/about-us"
              onHover={() => handleMouseEnterCard(5)}
              onClick={() => handleMenuClick(5)}
              className={`md:font-bold font-normal 4xl:text-[19px]   2xl:text-[16px]  xl:text-[13px] text-[15px] lg:text-[14px]`}
              isActive={activeCard === 5}
              aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions"
            />
            <MenuItem
              label={t('insightTitle')}
              link="/insights"
              onHover={() => handleMouseEnterCard(6)}
              onClick={() => handleMenuClick(6)}
              className={`md:font-bold font-normal 4xl:text-[19px]   2xl:text-[16px]  xl:text-[13px] text-[15px] lg:text-[14px]`}
              isActive={activeCard === 6}
              aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions"
            />
            <MenuItem
              label={t('contactTitle')}
              link="/contact-us"
              className={`md:font-bold font-normal 4xl:text-[19px]   2xl:text-[16px]  xl:text-[13px] text-[15px] lg:text-[14px]`}
              isActive={activeCard === 7}
              aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions"
            />
          </div>

          {/* Cards for each menu item */}
          <div>
            {/* solutions Card */}
            {activeCard === 1 && (
              <div onMouseEnter={() => handleMouseEnterCard(1)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white w-full h-auto pb-8 mt-[18px] 4xl:mt-[32px] left-0 z-30 border-t-2 absolute" >
                <div className="grid grid-cols-12 custom-container gap-10 md:mt-10 xl:mt-10 ">
                  <div className="col-span-3 bg-[#deebf8] p-3 relative">
                    {/* Data & AI Section */}
                    <div
                      className={`cursor-pointer font-bold mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionSolution === "dataAI" ? "bg-white pl-3 pt-3 pb-3 pr-3" : "p-2"}`}
                      onClick={() => handleSubMenuClickSolution("dataAI")}>
                      {t('dataAiLabel')}
                    </div>

                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionSolution === "enterprise" ? "bg-white pl-3 pt-3 pb-3 pr-3" : "p-2"}`}
                      onClick={() => handleSubMenuClickSolution("enterprise")}>
                      {t('enterpriseLabel')}
                    </div>

                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionSolution === "integration" ? "bg-white pl-3 pt-3 pb-3 pr-3" : "p-2"}`}
                      onClick={() => handleSubMenuClickSolution("integration")}>
                      {t('integrationLabel')}
                    </div>

                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionSolution === "artificialIntelligence" ? "bg-white  pl-3 pt-3 pb-3 pr-3" : "p-2"}`}
                      onClick={() => handleSubMenuClickSolution("artificialIntelligence")}>
                      {t('artificialLabel')}
                    </div>

                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionSolution === "aiAutomation" ? "bg-white  pl-3 pt-3 pb-3 pr-3" : "p-2"}`}
                      onClick={() => handleSubMenuClickSolution("aiAutomation")}>
                      {t('processAutoLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionSolution === "quality-engi" ? "bg-white  pl-3 pt-3 pb-3 pr-3" : "p-2"}`}
                      onClick={() => handleSubMenuClickSolution("quality-engi")}>
                      {t('qualityEngLabel')}
                    </div>
                  </div>

                  {openSectionSolution === "dataAI" && (
                    <div className="col-span-8 flex space-x-5"  >
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]   2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('dataAiDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]">{t('dataAiDesc2')}</p>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('SalesforceDataCloud')} link="/solutions/data-ai/salesforce-data-cloud-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/salesforce-data-cloud-consulting/")} />
                              <MenuItem className="font-bold text-[#2f78c4] mt-10 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('sapBusinessDataCloud')} link="/solutions/data-ai/sap-business-data-cloud-bdc-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/sap-business-data-cloud-bdc-consulting/")} />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('dataSphere')} link="/solutions/data-ai/sap-datasphere-implementation-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/sap-datasphere-implementation-consulting/")} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {openSectionSolution === "enterprise" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div>
                          <div className="border-b pb-5">
                            <div className="font-bold mt-5 4xl:text-[20px]   2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('enterpriseDesc')}</div>
                            <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]">{t('enterpriseDesc2')}</p>
                          </div>
                          <div className="mt-5">
                            <div className="grid grid-cols-2 gap-32">
                              <div>
                                <MenuItem className="font-bold pb-3 text-[#2f78c4] 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('SAP')} link="/solutions/enterprise-platforms/sap-consulting-implementation-partners/" onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/sap-consulting-implementation-partners/")} />
                                <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('Salesforce')} link="/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/" onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/")} />
                                <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('SAPAriba')} link="/services/spend-management/sapbuyplus-ariba-implementation-partner/" onClick={(e) => handleLinkClick(e, "/services/spend-management/sapbuyplus-ariba-implementation-partner/")} />
                                <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('Oracle')} link="/solutions/enterprise-platforms/oracle-ebs-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/oracle-ebs-consulting/")} />
                              </div>
                              <div>
                                <MenuItem className="font-bold pb-3 text-[#2f78c4] 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('Agentforce')} link="/solutions/artificial-intelligence/salesforce-agentforce-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/artificial-intelligence/salesforce-agentforce-consulting/")} />
                                <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('SuccessPlus')} link="/services/hxm-transformation/successplus-successfactors-implementation-partner/" onClick={(e) => handleLinkClick(e, "/services/hxm-transformation/successplus-successfactors-implementation-partner/")} />
                                <MenuItem className="font-bold text-[#2f78c4] mt-6 pb-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('RevenueCloud')} link="/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting/")} />
                                <MenuItem className="font-bold text-[#2f78c4] mt-6 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('Kinaxis')} link="/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/" onClick={(e) => handleLinkClick(e, "/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/")} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSectionSolution === "integration" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]   2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('integrationDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]">{t('integrationDesc2')}</p>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold pb-3 text-[#2f78c4] 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('Mulesoft')} link="/solutions/integration/mulesoft-salesforce/" onClick={(e) => handleLinkClick(e, "/solutions/integration/mulesoft-salesforce/")} />
                            </div>
                            <div>
                              <MenuItem className="font-bold pb-3 text-[#2f78c4] 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('SAPCPI')} link="/solutions/integration/sap-cloud-platform-integration-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/integration/sap-cloud-platform-integration-consulting/")} />
                            </div>
                            <div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSectionSolution === "quality-engi" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]   2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('qualityEngDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]">{t('qualityEngDesc2')}</p>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold pb-3 text-[#2f78c4] 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('Tosca')} link="/solutions/quality-engineering-assurance/tosca-software-automation-testing/" onClick={(e) => handleLinkClick(e, "/solutions/quality-engineering-assurance/tosca-software-automation-testing/")} />
                            </div>
                            <div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSectionSolution === "artificialIntelligence" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]   2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('artificialDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]">{t('artificialDesc2')}</p>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('Agentforce')} link="/solutions/artificial-intelligence/salesforce-agentforce-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/artificial-intelligence/salesforce-agentforce-consulting/")} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSectionSolution === "aiAutomation" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]   2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('aiAutomationDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]">{t('aiAutomationDesc2')}</p>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold pb-3 text-[#2f78c4] 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('Agentforce')} link="/solutions/artificial-intelligence/salesforce-agentforce-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/artificial-intelligence/salesforce-agentforce-consulting/")} />
                            </div>
                            <div>
                              <MenuItem className="font-bold pb-3 text-[#2f78c4] 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('UIPath')} link="/solutions/process-automation/rpa-consulting-services-provider/" onClick={(e) => handleLinkClick(e, "/solutions/process-automation/rpa-consulting-services-provider/")} />
                            </div>
                            <div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* Products Card */}
            {activeCard === 2 && (
              <div onMouseEnter={() => handleMouseEnterCard(2)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-auto pb-8 mt-[18px] 4xl:mt-[32px] left-0 z-20 border-t-2 absolute">
                <div className="grid grid-cols-12 gap-5 xl:w-full md:gap-5 lg:gap-10  md:mt-10 xl:justify-between md:justify-center xl:mt-10 custom-container">
                  <div className="col-span-3">
                    <div className="bg-[#deebf8] p-3">
                      <div
                        className={`cursor-pointer font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionProduct === "rialchat" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                        onClick={() => handleSubMenuClickProduct("rialchat")}>
                        {t('agentchatLabel')}
                      </div>
                      <div
                        className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionProduct === "mediaina" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                        onClick={() => handleSubMenuClickProduct("mediaina")}
                      >
                        MediAIna
                      </div>
                      <div
                        className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionProduct === "exelona" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                        onClick={() => handleSubMenuClickProduct("exelona")}
                      >
                        Exelona
                      </div>
                    </div>

                  </div>
                  {openSectionProduct === "rialchat" && (
                    <div className="col-span-8 flex space-x-5"  >
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]   2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('agentDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] pb-8">{t('agentDesc2')}</p>
                          <Link href='/products/agentchat' className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={(e) => handleLinkClick(e, "/products/agentchat")}>{t('letsBeginBtn')}</Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {openSectionProduct === "mediaina" && (
                    <div className="col-span-8 flex space-x-5"  >
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]   2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('mediainaDescrip')}</div>
                          <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] pb-8">{t('mediainaDes2')}</p>
                          <Link href='/products/mediaina-reimagining-patient-journeys/' className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={(e) => handleLinkClick(e, "/products/mediaina-reimagining-patient-journeys/")}
                          >Let's Begin</Link>
                        </div>
                      </div>

                    </div>
                  )}
                  {openSectionProduct === "exelona" && (
                    <div className="col-span-8 flex space-x-5"  >
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]   2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('exelonaDescription')}</div>
                          <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] pb-8">{t('exelonaDescription2')}</p>
                          <Link href='/products/exelona-salesforce-for-real-estate-management' className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={(e) => handleLinkClick(e, "/products/exelona-salesforce-for-real-estate-management")}
                          >Let's Begin</Link>
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              </div>
            )}
            {/* Services Card */}
            {activeCard === 3 && (
              <div onMouseEnter={() => handleMouseEnterCard(3)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-auto pb-20 mt-[18px] 4xl:mt-[32px] left-0 z-20 border-t-2 absolute">
                <div className="grid grid-cols-12 custom-container gap-5 xl:w-full  md:gap-5  lg:gap-10 md:mt-10 xl:justify-between md:justify-center xl:mt-10">
                  <div className="col-span-3 bg-[#deebf8] p-3">
                    <div
                      className={`cursor-pointer font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionbusiness === "businessTransform" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                      onClick={() => handleSubMenuClickBusiness("businessTransform")}>
                      {t('businessTransformationLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionbusiness === "intelligentScm" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                      onClick={() => handleSubMenuClickBusiness("intelligentScm")}>
                      {t('LobLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionbusiness === "spentMangemnet" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                      onClick={() => handleSubMenuClickBusiness("spentMangemnet")}>
                      {t('spendMgmtLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionbusiness === "hxmTransformation" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                      onClick={() => handleSubMenuClickBusiness("hxmTransformation")}>
                      {t('hxmLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionbusiness === "data-ai" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                      onClick={() => handleSubMenuClickBusiness("data-ai")}>
                      {t('dataAiLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionbusiness === "intelligent" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                      onClick={() => handleSubMenuClickBusiness("intelligent")}>
                      {t('intelligentLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px] 2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSectionbusiness === "applicationServices" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                      onClick={() => handleSubMenuClickBusiness("applicationServices")}>
                      {t('appServicesLabel')}
                    </div>
                  </div>
                  {openSectionbusiness === "businessTransform" && (
                    <div className="col-span-8 flex space-x-5"  >
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]  2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('businessTransDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]">{t('businessTransDesc2')}</p>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('GrowwithSAP')} link="/services/business-transformation/grow-with-sap-services" onClick={(e) => handleLinkClick(e, "/services/business-transformation/grow-with-sap-services")} />
                              <MenuItem className="font-bold text-[#2f78c4] mt-8 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('OracleEBSPlus')} link="/solutions/enterprise-platforms/oracle-ebs-consulting" onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/oracle-ebs-consulting")} />
                            </div>

                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('RisewithSAP')} link="/services/business-transformation/rise-with-sap-services" onClick={(e) => handleLinkClick(e, "/services/business-transformation/rise-with-sap-services")} />
                              <MenuItem className="font-bold text-[#2f78c4] mt-8 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('SAPDigitalDesk')} link="/services/business-transformation/sap-managed-services-provider" onClick={(e) => handleLinkClick(e, "/services/business-transformation/sap-managed-services-provider")} />
                            </div>
                            <div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSectionbusiness === "data-ai" && (
                    <div className="col-span-8 flex space-x-5"  >
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]   2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('servicesDataAiDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]    xl:text-[13px] text-[14px]">{t('servicesDataAiDesc2')}</p>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('SalesforceDataCloud')} link="/solutions/data-ai/salesforce-data-cloud-consulting" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/salesforce-data-cloud-consulting")} />
                              <MenuItem className="font-bold text-[#2f78c4] mt-8 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('Agentforce')} link="/solutions/artificial-intelligence/salesforce-agentforce-consulting" onClick={(e) => handleLinkClick(e, "/solutions/artificial-intelligence/salesforce-agentforce-consulting")} />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]    2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('SAPDatasphere')} link="/solutions/data-ai/sap-datasphere-implementation-consulting" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/sap-datasphere-implementation-consulting")} />
                              <MenuItem className="font-bold text-[#2f78c4] mt-8 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('sapBusinessDataCloud')} link="/solutions/data-ai/sap-business-data-cloud-bdc-consulting" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/sap-business-data-cloud-bdc-consulting")} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSectionbusiness === "spentMangemnet" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]   2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('spendMgmtDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]    xl:text-[13px] text-[14px]">{t('spendMgmtDesc2')}
                          </p>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('SAPBuy+')} link="/services/spend-management/sapbuyplus-ariba-implementation-partner" onClick={(e) => handleLinkClick(e, "/services/spend-management/sapbuyplus-ariba-implementation-partner")} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSectionbusiness === "intelligentScm" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]  2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('intelligentScmDesc')}</div>
                          <div className="mt-3 4xl:text-[18px] 2xl:text-[15px]  xl:text-[13px] text-[14px] pb-8">{t('intelligentScmDesc2')}
                          </div>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-10">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('Retail+')} link="/services/lob/retail-plus-business-consulting-omnichannel-solutions" onClick={(e) => handleLinkClick(e, "/services/lob/retail-plus-business-consulting-omnichannel-solutions")} />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('AutoSense')} link="/services/lob/salesforce-automotive-cloud-business-solutions-autosense" onClick={(e) => handleLinkClick(e, "/services/lob/salesforce-automotive-cloud-business-solutions-autosense")} />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('SAPBuy+')} link="/services/spend-management/sapbuyplus-ariba-implementation-partner" onClick={(e) => handleLinkClick(e, "/services/spend-management/sapbuyplus-ariba-implementation-partner")} />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('LifeAI+')} link="/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting" onClick={(e) => handleLinkClick(e, "/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting")} />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('Advantage+')} link="/services/lob/salesforce-marketing-cloud-implementation-consulting" onClick={(e) => handleLinkClick(e, "/services/lob/salesforce-marketing-cloud-implementation-consulting")} />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" label={t('RialFinance+')} link="/services/lob/salesforce-fsc-consulting-rialfinanceplus/" onClick={(e) => handleLinkClick(e, "/services/lob/salesforce-fsc-consulting-rialfinanceplus/")} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSectionbusiness === "applicationServices" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]   2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('appServicesDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]">{t('appServicesDesc2')}
                          </p>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-10">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('SalesforceAgent+')} link="/services/application-services/salesforce-managed-services-provider-salesforceagentplus" onClick={(e) => handleLinkClick(e, "/services/application-services/salesforce-managed-services-provider-salesforceagentplus")} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSectionbusiness === "hxmTransformation" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]   2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('hxmDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]">{t('hxmDesc2')}</p>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px]text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('SuccessPlus')} link="/services/hxm-transformation/successplus-successfactors-implementation-partner" onClick={(e) => handleLinkClick(e, "/services/hxm-transformation/successplus-successfactors-implementation-partner")} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSectionbusiness === "intelligent" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]  2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('intelligentServicesDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]">{t('intelligentServicesDesc2')}</p>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('Demand+')} link="/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services" onClick={(e) => handleLinkClick(e, "/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services")} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* Industries Card */}
            {activeCard === 4 && (
              <div onMouseEnter={() => handleMouseEnterCard(4)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-auto mt-[18px] 4xl:mt-[32px] pb-20 left-0 z-20 border-t-2 absolute">
                <div className="grid grid-cols-12 w-full lg:gap-10 xl:gap-[22px] md:gap-5 custom-container md:mt-10 xl:mt-10">
                  <div className="col-span-3 bg-[#deebf8] p-3">
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSection === "automotive" ? "bg-white pl-3 pt-3 pb-3" : "4xl:p-2 2xl:p-2 p-2 xl:p-1"}`}
                      onClick={() => handleSubMenuClick("automotive")}>
                      {t('realEstateLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSection === "lifeSciences" ? "bg-white pl-3 pt-3 pb-3 " : "4xl:p-2 2xl:p-2 p-2 xl:p-1"}`}
                      onClick={() => handleSubMenuClick("lifeSciences")}>
                      {t('lifeScienceLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSection === "hiTech" ? "bg-white pl-3 pt-3 pb-3" : "4xl:p-2 2xl:p-2 p-2 xl:p-1"}`}
                      onClick={() => handleSubMenuClick("hiTech")}>
                      {t('semiconductorLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSection === "manufacturing" ? "bg-white pl-3 pt-3 pb-3" : "4xl:p-2 2xl:p-2 p-2 xl:p-1"}`}
                      onClick={() => handleSubMenuClick("manufacturing")}>
                      {t('manufacturingLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSection === "education" ? "bg-white pl-3 pt-3 pb-3" : "4xl:p-2 2xl:p-2 p-2 xl:p-1"}`}
                      onClick={() => handleSubMenuClick("education")}>
                      {t('educationLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSection === "autoinstry" ? "bg-white pl-3 pt-3 pb-3" : "4xl:p-2 2xl:p-2 p-2 xl:p-1"}`}
                      onClick={() => handleSubMenuClick("autoinstry")}>
                      {t('automativeLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSection === "travelHospitality" ? "bg-white pl-3 pt-3 pb-3" : "4xl:p-2 2xl:p-2 p-2 xl:p-1"}`}
                      onClick={() => handleSubMenuClick("travelHospitality")}>
                      {t('TTHLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSection === "retailIndustry" ? "bg-white pl-3 pt-3 pb-3" : "4xl:p-2 2xl:p-2 p-2 xl:p-1"}`}
                      onClick={() => handleSubMenuClick("retailIndustry")}>
                      {t('retailLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSection === "nonProfitIndustry" ? "bg-white pl-3 pt-3 pb-3" : "4xl:p-2 2xl:p-2 p-2 xl:p-1"}`}
                      onClick={() => handleSubMenuClick("nonProfitIndustry")}>
                      {t('nonProfitLabel')}
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] ${openSection === "financeIndustry" ? "bg-white pl-3 pt-3 pb-3" : "4xl:p-2 2xl:p-2 p-2 xl:p-1"}`}
                      onClick={() => handleSubMenuClick("financeIndustry")}>
                      {t('financeLabel')}
                    </div>
                  </div>
                  {openSection === "automotive" && (
                    <div className="col-span-8 flex space-x-5"  >
                      <div className="flex-1">
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] 2xl:text-[15px]  xl:text-[13px] text-[16px]"> {t('automativeIndDesc')}</div>
                          <div className="mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] pb-8">{t('automativeIndDesc2')}</div>
                          <Link href='/industry/real-estate-property-management' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" onClick={(e) => handleLinkClick(e, "/industry/real-estate-property-management")}
                          >{t('letsBeginBtn')}</Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSection === "lifeSciences" && (
                    <div className="col-span-8 flex space-x-5">
                      <div className="flex-1">
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]  2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('lifeSciencesDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px] pb-8">{t('lifeSciencesDesc2')}</p>
                          <Link href='/industry/life-sciences-digital-transformation' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-10" onClick={(e) => handleLinkClick(e, "/industry/life-sciences-digital-transformation")}>{t('letsBeginBtn')}</Link>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] 2xl:text-[15px] xl:text-[13px] text-[14px]" label="Healthcare" link="/industry/life-sciences/healthcare-medtech-patient-care" onClick={(e) => handleLinkClick(e, "/industry/life-sciences/healthcare-medtech-patient-care")}
                                aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] 2xl:text-[15px] xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Pharma and Biotech" link="/industry/life-sciences/pharma-biotech-digital-transformation" onClick={(e) => handleLinkClick(e, "/industry/life-sciences/pharma-biotech-digital-transformation/")} />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] mt-6 4xl:text-[18px] 2xl:text-[15px] xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Medical Devices" link="/industry/life-sciences/medical-devices-it-solutions" onClick={(e) => handleLinkClick(e, "/industry/life-sciences/medical-devices-it-solutions")} />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] mt-6 4xl:text-[18px] 2xl:text-[15px] xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Home Health" link="/industry/life-sciences/home-health-ai-tech-solutions" onClick={(e) => handleLinkClick(e, "/industry/life-sciences/home-health-ai-tech-solutions")} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSection === "hiTech" && (
                    <div className="col-span-8 flex space-x-5">
                      <div className="flex-1">
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] 2xl:text-[15px] xl:text-[13px] text-[16px]">{t('hiTechDesc')}</div>
                          <p className="mt-3 4xl:text-[18px] 2xl:text-[15px] xl:text-[13px] text-[14px] pb-8">{t('hiTechDesc2')}</p>
                          <Link href='/industry/hitech-semiconductor-ai-it-solutions' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" onClick={(e) => handleLinkClick(e, "/industry/hitech-semiconductor-ai-it-solutions")}>{t('letsBeginBtn')}</Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSection === "autoinstry" && (
                    <div className="col-span-8 flex space-x-5">
                      <div className="flex-1">
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] 2xl:text-[15px] xl:text-[13px] text-[16px]">{t('autoIndustryDesc')}</div>
                          <p className="mt-3 4xl:text-[18px] 2xl:text-[15px] xl:text-[13px] text-[14px] pb-8">{t('autoIndustryDesc2')}</p>
                          <Link className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" href='/industry/digital-transformation-in-automotive-industry' onClick={(e) => handleLinkClick(e, "/industry/digital-transformation-in-automotive-industry")}>{t('letsBeginBtn')}</Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSection === "travelHospitality" && (
                    <div className="col-span-8 flex space-x-5">
                      <div className="flex-1">
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]  2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('TTHDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] pb-8">{t('TTHDesc2')}</p>
                          <Link href='/industry/travel-hospitality-it-solutions' className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={(e) => handleLinkClick(e, "/industry/travel-hospitality-it-solutions")}>{t('letsBeginBtn')}</Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSection === "retailIndustry" && (
                    <div className="col-span-8 flex space-x-5">
                      <div className="flex-1">
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]  2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('retailInduDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px] pb-8">{t('retailInduDesc2')}</p>
                          <Link href='/industry/retail-industry-digital-transformation' className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={(e) => handleLinkClick(e, "/industry/retail-industry-digital-transformation")}>{t('letsBeginBtn')}</Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSection === "nonProfitIndustry" && (
                    <div className="col-span-8 flex space-x-5">
                      <div className="flex-1">
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]  2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('nonProfitDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px] pb-8">{t('nonProfitDesc2')}</p>
                          <Link href='/industry/nonprofit-digital-transformation-it-solutions' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" onClick={(e) => handleLinkClick(e, "/industry/nonprofit-digital-transformation-it-solutions")}
                          >{t('letsBeginBtn')}</Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSection === "financeIndustry" && (
                    <div className="col-span-8 flex space-x-5">
                      <div className="flex-1">
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]  2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('financeDesc')}</div>
                          <p className="mt-3  4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px] pb-8">{t('financeDesc2')}</p>
                          <Link href='/industry/finance-industry-digital-transformation-services-solutions' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" onClick={(e) => handleLinkClick(e, "/industry/finance-industry-digital-transformation-services-solutions")}>{t('letsBeginBtn')}</Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSection === "manufacturing" && (
                    <div className="col-span-8 flex space-x-5">
                      <div className="flex-1">
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]  2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('manufacturingDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px] pb-8">{t('manufacturingDesc2')}</p>
                          <Link href='/industry/manufacturing-cloud-erp' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" onClick={(e) => handleLinkClick(e, "/industry/manufacturing-cloud-erp")}
                          >{t('letsBeginBtn')}</Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSection === "education" && (
                    <div className="col-span-8 flex space-x-5">
                      <div className="flex-1">
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px]  2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('educationDesc')}</div>
                          <p className="mt-3 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px] pb-8">{t('educationDesc2')}</p>
                          <Link href='/industry/education-cloud-it-solutions' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" onClick={(e) => handleLinkClick(e, "/industry/education-cloud-it-solutions")}
                          >{t('letsBeginBtn')}</Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* about us Card */}
            {activeCard === 5 && (
              <div onMouseEnter={() => handleMouseEnterCard(5)} onMouseLeave={handleMouseLeaveCard} className="transition-all pb-20 duration-300 ease-in-out bg-white shadow-lg w-full h-auto mt-[18px] 4xl:mt-[32px] left-0 z-20 border-t-2 absolute">
                <div className="grid grid-cols-12 gap-3 lg:gap-10 custom-container md:mt-10 xl:mt-10">
                  <div className="col-span-3">
                    <div className="bg-[#deebf8] p-3">
                      <div
                        className="cursor-pointer font-bold bg-white pl-3 pt-3 pb-3 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]">
                        {t('aboutLabel')}
                      </div>
                    </div>

                  </div>
                  <div className="col-span-8 flex space-x-5"  >
                    <div>
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5 4xl:text-[20px]  2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('aboutDesc')}</div>
                        <p className="mt-3 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px] pb-8">{t('aboutDesc2')}</p>
                        <Link href='/about-us/' className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={(e) => handleLinkClick(e, "/about-us/")}>{t('letsBeginBtn')}</Link>
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('cultureLable')} link="/about-us/our-values/" onClick={(e) => handleLinkClick(e, "/about-us/our-values/")} />
                            <MenuItem className="font-bold text-[#2f78c4] mt-6 4xl:text-[18px]  2xl:text-[15px]    xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('partnershipLable')} link="/about-us/global-alliances/" onClick={(e) => handleLinkClick(e, "/about-us/global-alliances/")} />
                            <MenuItem className="font-bold text-[#2f78c4] mt-6 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('newsLable')} link="/insights/news/" onClick={(e) => handleLinkClick(e, "/insights/news/")} />
                          </div>
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('corporateLable')} link="/about-us/impact-and-social-responsibility/" onClick={(e) => handleLinkClick(e, "/about-us/impact-and-social-responsibility/")} />
                            <MenuItem className="font-bold text-[#2f78c4] mt-6  4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('contactusLable')} link="/contact-us/" onClick={(e) => handleLinkClick(e, "/contact-us/")} />
                          </div>
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeCard === 6 && (
              <div onMouseEnter={() => handleMouseEnterCard(6)} onMouseLeave={handleMouseLeaveCard} className="transition-all pb-20 duration-300 ease-in-out bg-white shadow-lg w-full h-auto mt-[18px] 4xl:mt-[32px] left-0 z-20 border-t-2 absolute">
                <div className="grid grid-cols-12 gap-3 lg:gap-10 custom-container md:mt-10 xl:mt-10">
                  <div className="col-span-3">
                    <div className="bg-[#deebf8] p-3">
                      <div
                        className="cursor-pointer font-bold bg-white pl-3 pt-3 pb-3 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]">
                        {t('insightTitle')}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-8 flex space-x-5">
                    <div>
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5 4xl:text-[20px]  2xl:text-[15px]  xl:text-[13px] text-[16px]">{t('insightDesc')}</div>
                        <p className="mt-3 4xl:text-[18px]   2xl:text-[15px]  xl:text-[13px] text-[14px] pb-8">{t('insightDesc2')}</p>
                        <Link href='/insights/' className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={(e) => handleLinkClick(e, "/insights/")}>{t('letsBeginBtn')}</Link>
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('Blogs')} link="/insights/blogs/" onClick={(e) => handleLinkClick(e, "/insights/blogs/")} />
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] mt-10 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label={t('Webinars')} link="/insights/webinars/" onClick={(e) => handleLinkClick(e, "/insights/webinars/")} />
                            </div>
                          </div>
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px]  2xl:text-[15px]  xl:text-[13px] text-[14px]" label={t('CaseStudies')} aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" link="/insights/case-studies/" onClick={(e) => handleLinkClick(e, "/insights/case-studies/")} />
                          </div>
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* ///mobile menu */}
      <div>
        <div className="lg:hidden flex justify-between items-center px-[35px] py-1 bg-white w-full z-50 fixed top-0 shadow-md" id="mobile-menu">

          <Link href='/' aria-label="Homepage">
            <Image
              loading="lazy"
              className="cursor-pointer"
              alt="Company Logo"
              height='140'
              width='80'
              src='/images/homepage/logo.svg'
              aria-label="logo2"
            />
          </Link>
          <div className="flex gap-4 max-[360px]:gap-1">
            <div className="my-auto flex max-[360px]:gap-1 gap-4">
              <SearchBar />
              <LanguageSwitcher arrowImg={arrowImg} />
            </div>
            <button onClick={toggleMenu} className="pt-4 pb-4">
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6 text-gray-800 transform rotate-45 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-800 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Drawer Menu (Mobile only) */}
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transform transition-transform duration-300 xl:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} >
          <div className="bg-white w-full h-full p-4 overflow-y-auto">

            <div className="fixed top-0 left-0 w-full bg-white z-50 p-4 border-b">
              <div className="flex justify-between items-center px-4" onClick={toggleMenu}>
                <div>
                  <svg
                    className="w-6 h-6 text-gray-800 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <Image
                    loading="lazy"
                    className="cursor-pointer"
                    href='/'
                    alt="Company Logo"
                    height='150'
                    width='100'
                    src='/images/homepage/logo.svg'
                    aria-label="Logo2"
                  />
                </div>
              </div>
            </div>


            <nav className="mt-10 p-3">
              <ul>
                {menuItems.map((item, idx) => (
                  <Accordion
                    key={idx}
                    label={item.label}
                    links={item.links}
                    expanded={expanded === idx}
                    onToggle={() => toggleAccordion(idx)}
                    toggleSubAccordion={toggleSubAccordion}
                    expandedSub={expandedSub}
                    onMenuItemClick={() => toggleMenu()}
                  />
                ))}
                <Link onClick={toggleMenu} href='/contact-us' aria-label="Contact us page">
                  <p className="text-sm mt-3 font-bold pb-8">{t('contactTitle')}</p>
                </Link>
                <Link href='/contact-us/' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={toggleMenu} className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">{t('letsBeginBtn')}</Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Header