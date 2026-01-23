"use client";
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react";


const MenuItem = ({ label, link, onHover, className, onClick, isActive }) => {
  return (
    <Link href={link ? link : ""}>
      <div
        onClick={onClick}
        onMouseEnter={onHover}
        className={`cursor-pointer xl:pt-0 hover:text-[#0092E1] ${isActive ? 'text-[#0092E0]' : ''} ${className}`}
      >
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
    const w = window.innerWidth;

    // XL → 2XL → 3XL (1280px to < 2240px)
    if (w >= 1280 && w < 1900) {
      scrollToTop();
    }

    setActiveCard(cardId);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  };

  const handleMouseLeaveCard = () => {
    setActiveCard(null);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleMenuClick = (menuIndex) => {
    const isSame = activeCard === menuIndex;
    if (isSame) {
      setActiveCard(null);
    } else {
      setActiveCard(menuIndex);
    }
  };


  const toggleSubAccordion = (label) => {
    setExpandedSub(expandedSub === label ? null : label);
  };

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setActiveLink(false); // Close the card
    window.location.href = link;  // This will navigate after closing the card
  };
  const handleSubLinkClick = (label) => {
    setActiveSubLink(label); // Set the submenu link as active
    onMenuItemClick(); // Call the menu item click handler passed as prop
  };


  const menuItems = [
    {
      label: 'Solutions',
      links: [
        {
          label: 'Data & AI', href: '/',
          subLinks: [
            { label: 'Salesforce Data Cloud', href: '/solutions/data-ai/salesforce-data-cloud-consulting/' },
            { label: 'Datasphere', href: '/solutions/data-ai/sap-datasphere-implementation-consulting/' },
            { label: 'SAP Business Data Cloud', href: '/solutions/data-ai/sap-business-data-cloud-bdc-consulting/' },


          ],
        },
        {
          label: 'Enterprise Platforms', href: '/',
          subLinks: [
            { label: 'SAP', href: '/solutions/enterprise-platforms/sap-consulting-implementation-partners/' },
            { label: 'Salesforce', href: '/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/' },
            { label: 'SAP Ariba', href: '/services/spend-management/sapbuyplus-ariba-implementation-partner/' },
            { label: 'Revenue Cloud', href: '/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting/' },
            { label: 'Agentforce', href: '/solutions/artificial-intelligence/salesforce-agentforce-consulting/' },
            { label: 'SuccessFactors', href: '/services/hxm-transformation/successplus-successfactors-implementation-partner/' },
            { label: 'Oracle', href: '/solutions/enterprise-platforms/oracle-ebs-consulting/' },
            { label: 'Kinaxis', href: '/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/' },

          ],
        },
        {
          label: 'Integration', href: '/',
          subLinks: [
            { label: 'MuleSoft', href: '/solutions/integration/mulesoft-salesforce/' },
            { label: 'SAP CPI', href: '/solutions/integration/sap-cloud-platform-integration-consulting/' },

          ],
        },
        {
          label: 'Artificial Intelligence', href: '/',
          subLinks: [
            { label: 'Agentforce', href: '/solutions/artificial-intelligence/salesforce-agentforce-consulting/' },
          ],
        },
        {
          label: 'Process Automation', href: '/',
          subLinks: [
            { label: 'Agentforce', href: '/solutions/artificial-intelligence/salesforce-agentforce-consulting/' },
            { label: 'UIPath', href: '/solutions/process-automation/rpa-consulting-services-provider/' },

          ],
        },
        {
          label: 'Quality Engineering & Assurance', href: '/',
          subLinks: [
            { label: 'Tricentis Tosca', href: '/solutions/quality-engineering-assurance/tosca-software-automation-testing/' },
          ],
        },


      ],
    },
    {
      label: 'Products',
      links: [
        { label: 'AgentChat', href: '/products/agentchat/' },
        { label: 'MediAIna', href: '/products/mediaina-reimagining-patient-journeys/' },
        { label: 'Exelona', href: '/products/exelona-salesforce-for-real-estate-management/' },

      ],

    },
    {
      label: 'Services',
      links: [
        {
          label: 'Business Transformation', href: '/',
          subLinks: [
            { label: 'Grow with SAP', href: '/services/business-transformation/grow-with-sap-services/' },
            { label: 'Rise with SAP', href: '/services/business-transformation/rise-with-sap-services/' },
            { label: 'Oracle EBSPlus', href: '/solutions/enterprise-platforms/oracle-ebs-consulting/' },
            { label: 'SAP Digital Desk', href: '/services/business-transformation/sap-managed-services-provider/' },
          ],
        },
        {
          label: 'LOB Services', href: '/',
          subLinks: [
            { label: 'AutoSense', href: '/services/lob/salesforce-automotive-cloud-business-solutions-autosense/' },
            { label: 'Retail+', href: '/services/lob/retail-plus-business-consulting-omnichannel-solutions/' },
            { label: 'SAPBuy+', href: '/services/spend-management/sapbuyplus-ariba-implementation-partner/' },
            { label: 'Life AI+', href: '/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting/' },
            { label: 'Advantage+', href: '/services/lob/salesforce-marketing-cloud-implementation-consulting/' },
            { label: 'RialFinance+', href: '/services/lob/salesforce-fsc-consulting-rialfinanceplus//' }
          ],


        },
        {
          label: 'Spend Management', href: '/',
          subLinks: [
            { label: 'SAPBuy+', href: '/services/spend-management/sapbuyplus-ariba-implementation-partner/' },],
        },
        {
          label: 'HXM Transformation', href: '/',
          subLinks: [
            { label: 'Success+', href: '/services/hxm-transformation/successplus-successfactors-implementation-partner/' },],
        },
        {
          label: 'Data and AI', href: '/',
          subLinks: [
            { label: 'Salesforce Data Cloud', href: '/solutions/data-ai/salesforce-data-cloud-consulting/' },
            { label: 'Agentforce', href: '/solutions/artificial-intelligence/salesforce-agentforce-consulting/' },
            { label: 'SAP Datasphere', href: '/solutions/data-ai/sap-datasphere-implementation-consulting/' },
            { label: 'SAP Business Data Cloud', href: '/solutions/data-ai/sap-business-data-cloud-bdc-consulting/' }

          ],

        },
        {
          label: 'Intelligent SCM', href: '/',
          subLinks: [
            { label: 'Kinaxis', href: '/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/' },
          ],
        },
        {
          label: 'Application Services', href: '/',
          subLinks: [
            { label: 'SalesforceAgent+', href: '/services/application-services/salesforce-managed-services-provider-salesforceagentplus/' },
          ],
        },
      ],
    },
    {
      label: 'Industries',
      links: [
        {
          label: 'Real Estate', href: '/industry/real-estate-property-management',
        },
        {
          label: 'Life Sciences', href: '/industry/life-sciences-digital-transformation',
          subLinks: [
            { label: 'Overview', href: '/industry/life-sciences-digital-transformation/' },
            { label: 'Healthcare', href: '/industry/life-sciences/healthcare-medtech-patient-care/' },
            { label: 'Medical Devices', href: '/industry/life-sciences/medical-devices-it-solutions/' },
            { label: 'Pharma And BioTech', href: '/industry/life-sciences/pharma-biotech-digital-transformation/' },
            { label: 'Home Health', href: '/industry/life-sciences/home-health-ai-tech-solutions/' },
          ],
        },
        {
          label: 'Semiconductor', href: '/industry/hitech-semiconductor-ai-it-solutions/',
        },
        {
          label: 'Manufacturing', href: '/industry/manufacturing-cloud-erp/',
        },
        {
          label: 'Education', href: '/industry/education-cloud-it-solutions/',
        },
        {
          label: 'Automotive', href: '/industry/digital-transformation-in-automotive-industry/',
        },
        {
          label: 'Travel and Hospitality', href: '/industry/travel-hospitality-it-solutions/',
        },
        {
          label: 'Retail', href: '/industry/retail-industry-digital-transformation/',
        },
        {
          label: 'Non-Profit', href: '/industry/nonprofit-digital-transformation-it-solutions/',
        },
        {
          label: 'Finance', href: '/industry/finance-industry-digital-transformation-services-solutions/',
        },
      ],
    },
    {
      label: 'About Us', href: '/about-us/',
      links: [
        { label: 'Overview', href: '/about-us/' },
        // { label: 'Contact Us', href: '/contact-us/' },
        { label: 'Partnership', href: '/about-us/global-alliances/' },
        { label: 'Culture and Values', href: '/about-us/our-values/' },
        { label: 'News and Press Releases', href: '/insights/news/' },
        { label: 'Corporate Citizenship', href: '/about-us/impact-and-social-responsibility/' },


      ],
    },
    {
      label: 'Insights', href: '/insights/',
      links: [
        { label: 'Overview', href: '/insights/' },
        { label: 'Blogs', href: '/insights/blogs/' },
        { label: 'Case Studies', href: '/insights/case-studies/' },
        { label: 'Webinars', href: '/insights/webinars/' },


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
                      className="w-full text-left flex justify-between items-center"
                    >
                      <h4
                        className={`text-sm cursor-pointer text-[16px] ${link.label == "Life Sciences" && "font-light"} ${activeLink === link.label ? 'text-blue-500 font-bold' : 'text-black'}`}
                        onClick={() => handleLinkClick(link.label)}
                      >
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
                              className={`text-sm ${link.label == "Life Sciences" && "ml-3"} ${activeSubLink === subLink.label ? 'text-blue-500 font-bold' : 'text-[#505050] hover:text-[#05B1FD]'} cursor-pointer`}
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
      <div
        className={`${activeCard ? "static 4xl:fixed" : "4xl:fixed fixed"
          } top-0 left-0 right-0 w-full max-w-[1920px] mx-auto z-50`}>

        <div className="bg-white shadow-md custom-container grid grid-cols-12 items-center gap-4 md:gap-4 xl:gap-6 py-4 md:py-6">

          <div className="col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2">
            <Link rel='preload' href="/" aria-label="Homepage"  >
              <Image
                className="cursor-pointer w-[120px] md:w-[130px] lg:w-[165px] h-auto"
                alt="Rialtes Logo"
                width={165}
                height={50}
                sizes="100vw"
                src="/images/homepage/logo.svg"
                style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                priority
              />
            </Link>
          </div>

          <div className="col-span-9 md:col-span-10 lg:col-span-10 xl:col-span-10 overflow-x-auto whitespace-nowrap flex items-center justify-end gap-2 md:gap-3 lg:gap-5 xl:gap-6 2xl:gap-8">
            <MenuItem
              label="Solutions"
              onHover={() => handleMouseEnterCard(1)}
              onClick={() => handleMenuClick(1)}
              className={`md:font-bold font-normal 4xl:text-[20px] xl:text-[18px] text-[16px]`}
              isActive={activeCard === 1}
              aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions"
            />
            <MenuItem
              label="Products"
              onHover={() => handleMouseEnterCard(2)}
              onClick={() => handleMenuClick(2)}
              isActive={activeCard === 2}
              className={`md:font-bold font-normal 4xl:text-[20px] xl:text-[18px] text-[16px]`}
              aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions"

            />
            <MenuItem
              label="Services"
              onHover={() => handleMouseEnterCard(3)}
              onClick={() => handleMenuClick(3)}
              isActive={activeCard === 3}
              className={`md:font-bold font-normal 4xl:text-[20px] xl:text-[18px] text-[16px]`}
              aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions"

            />
            <MenuItem
              label="Industries"
              link="/industry"
              onHover={() => handleMouseEnterCard(4)}
              onClick={() => handleMenuClick(4)}
              isActive={activeCard === 4}
              className={`md:font-bold font-normal 4xl:text-[20px] xl:text-[18px] text-[16px]`}
              aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions"

            />
            <MenuItem
              label="About Us"
              link="/about-us"
              onHover={() => handleMouseEnterCard(5)}
              onClick={() => handleMenuClick(5)}
              className={`md:font-bold font-normal 4xl:text-[20px] xl:text-[18px] text-[16px]`}
              isActive={activeCard === 5}
              aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions"
            />
            <MenuItem
              label="Insights"
              link="/insights"
              onHover={() => handleMouseEnterCard(6)}
              onClick={() => handleMenuClick(6)}
              className={`md:font-bold font-normal 4xl:text-[20px] xl:text-[18px] text-[16px]`}
              isActive={activeCard === 6}
              aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions"
            />
            <MenuItem
              label="Contact Us"
              link="/contact-us"
              className={`md:font-bold font-normal 4xl:text-[20px] xl:text-[18px] text-[16px]`}
              isActive={activeCard === 7}
              aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions"
            />
          </div>
        </div>


        {/* Cards for each menu item */}
        <div>
          {/* solutions Card */}
          {activeCard === 1 && (
            <div onMouseEnter={() => handleMouseEnterCard(1)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white w-full h-auto pb-8 left-0 z-40 border-t-2 absolute " >
              <div className="grid grid-cols-12 gap-5 xl:w-full md:gap-5 lg:gap-10  md:mt-10 xl:justify-between md:justify-center xl:mt-10 custom-container ">
                <div className="col-span-3">
                  <div className="bg-[#deebf8] p-3">
                    <div
                      className={`cursor-pointer font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionSolution === "dataAI" ? "bg-white" : "bg-transparent"
                        }`}
                      onClick={() => handleSubMenuClickSolution("dataAI")}
                    >
                      Data & AI
                    </div>

                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionSolution === "enterprise" ? "bg-white " : "p-2"}`}
                      onClick={() => handleSubMenuClickSolution("enterprise")}
                    >
                      Enterprise Platforms
                    </div>

                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionSolution === "integration" ? "bg-white" : "bg-transparent"}`}
                      onClick={() => handleSubMenuClickSolution("integration")}
                    >
                      Integration
                    </div>

                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionSolution === "artificialIntelligence" ? "bg-white" : "bg-transparent"}`}
                      onClick={() => handleSubMenuClickSolution("artificialIntelligence")}
                    >
                      Artificial Intelligence
                    </div>

                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionSolution === "aiAutomation" ? "bg-white" : "bg-transparent"}`}
                      onClick={() => handleSubMenuClickSolution("aiAutomation")}
                    >
                      Process Automation
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionSolution === "quality-engi" ? "bg-white" : "bg-transparent"}`}
                      onClick={() => handleSubMenuClickSolution("quality-engi")}
                    >
                      Quality Engineering & Assurance
                    </div>
                  </div>
                </div>

                {openSectionSolution === "dataAI" && (
                  <div className="col-span-8 flex space-x-5"  >
                    <div>
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">From Data to Decisions — Smarter, Faster, Better with AI</div>
                        <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px]">Turn raw data into real-time intelligence that drives efficiency, innovation, and growth</p>
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Salesforce Data Cloud" link="/solutions/data-ai/salesforce-data-cloud-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/salesforce-data-cloud-consulting/")}
                              onHover={() => { }} />
                            <MenuItem className="font-bold text-[#2f78c4] mt-10 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="SAP Business Data Cloud" link="/solutions/data-ai/sap-business-data-cloud-bdc-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/sap-business-data-cloud-bdc-consulting/")} onHover={() => { }} />
                          </div>
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Datasphere" link="/solutions/data-ai/sap-datasphere-implementation-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/sap-datasphere-implementation-consulting/")} onHover={() => { }} />
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
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Transform. Automate. Lead — The Power of Intelligent Enterprise</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px]">Achieve operational excellence and customer-centric growth with scalable, intelligent enterprise platforms.</p>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold pb-3 text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="SAP" link="/solutions/enterprise-platforms/sap-consulting-implementation-partners/" onHover={() => { }} onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/sap-consulting-implementation-partners/")} />
                              <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Salesforce" link="/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/" onHover={() => { }} onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/")} />
                              <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="SAP Ariba" link="/services/spend-management/sapbuyplus-ariba-implementation-partner/" onHover={() => { }} onClick={(e) => handleLinkClick(e, "/services/spend-management/sapbuyplus-ariba-implementation-partner/")} />
                              <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Oracle" link="/solutions/enterprise-platforms/oracle-ebs-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/oracle-ebs-consulting/")} onHover={() => { }} />
                            </div>
                            <div>
                              <MenuItem className="font-bold pb-3 text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Agentforce" link="/solutions/artificial-intelligence/salesforce-agentforce-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/artificial-intelligence/salesforce-agentforce-consulting/")} onHover={() => { }} />
                              <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="SuccessFactors" link="/services/hxm-transformation/successplus-successfactors-implementation-partner/" onClick={(e) => handleLinkClick(e, "/services/hxm-transformation/successplus-successfactors-implementation-partner/")} onHover={() => { }} />
                              <MenuItem className="font-bold text-[#2f78c4] mt-6 pb-3 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Revenue Cloud" link="/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting/")} onHover={() => { }} />
                              <MenuItem className="font-bold text-[#2f78c4] mt-6 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Kinaxis" link="/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/" onClick={(e) => handleLinkClick(e, "/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/")} onHover={() => { }} />
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
                        <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Smarter Connections. Faster Growth. Intelligent Integration Services</div>
                        <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px]">Future-ready integration strategies that align business goals with seamless technology execution</p>
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          <div>
                            <MenuItem className="font-bold pb-3 text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Mulesoft" link="/solutions/integration/mulesoft-salesforce/" onHover={() => { }} onClick={(e) => handleLinkClick(e, "/solutions/integration/mulesoft-salesforce/")}
                            />
                          </div>
                          <div>
                            <MenuItem className="font-bold pb-3 text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="SAP CPI" link="/solutions/integration/sap-cloud-platform-integration-consulting/" onHover={() => { }} onClick={(e) => handleLinkClick(e, "/solutions/integration/sap-cloud-platform-integration-consulting/")}
                            />
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
                        <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Empowering Digital Excellence with Advanced Testing Solutions</div>
                        <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px]">Ensure the highest standards of software quality, performance, and reliability with our Quality Engineering and Assurance services. </p>
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          <div>
                            <MenuItem className="font-bold pb-3 text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Tricentis Tosca" link="/solutions/quality-engineering-assurance/tosca-software-automation-testing/" onHover={() => { }} onClick={(e) => handleLinkClick(e, "/solutions/quality-engineering-assurance/tosca-software-automation-testing/")}
                            />
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
                        <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Make AI Your Competitive Advantage</div>
                        <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px]">Empowering businesses to solve complex problems, automate workflows, and deliver real-time insights with AI.</p>

                      </div>
                      <div className="mt-5">

                        <div className="grid grid-cols-2 gap-32">

                          <div>
                            <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Agentforce" link="/solutions/artificial-intelligence/salesforce-agentforce-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/artificial-intelligence/salesforce-agentforce-consulting/")} onHover={() => { }} />
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
                        <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Agility Meets Efficiency with Next-Gen Process Automation</div>
                        <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px]">Integrating AI, RPA, and analytics to drive seamless, intelligent, and high-performing business processes.</p>
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          <div>
                            <MenuItem className="font-bold pb-3 text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Agentforce" link="/solutions/artificial-intelligence/salesforce-agentforce-consulting/" onHover={() => { }} onClick={(e) => handleLinkClick(e, "/solutions/artificial-intelligence/salesforce-agentforce-consulting/")}
                            />
                          </div>
                          <div>
                            <MenuItem className="font-bold pb-3 text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="UIPath" link="/solutions/process-automation/rpa-consulting-services-provider/" onHover={() => { }} onClick={(e) => handleLinkClick(e, "/solutions/process-automation/rpa-consulting-services-provider/")}
                            />
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
            <div onMouseEnter={() => handleMouseEnterCard(2)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-auto pb-8  left-0 z-40 border-t-2 absolute">
              <div className="grid grid-cols-12 gap-5 xl:w-full md:gap-5 lg:gap-10  md:mt-10 xl:justify-between md:justify-center xl:mt-10 custom-container">
                <div className="col-span-3">
                  <div className="bg-[#deebf8] p-3">
                    <div
                      className={`cursor-pointer font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionProduct === "rialchat" ? "bg-white" : "bg-transparent"}`}
                      onClick={() => handleSubMenuClickProduct("rialchat")}
                    >
                      AgentChat
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionProduct === "mediaina" ? "bg-white" : "bg-transparent"}`}
                      onClick={() => handleSubMenuClickProduct("mediaina")}
                    >
                      MediAIna
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionProduct === "exelona" ? "bg-white" : "bg-transparent"}`}
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
                        <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Engage, Support, and Close Deals — All Through WhatsApp. All Inside Salesforce.</div>
                        <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">Connect and respond to customers over WhatsApp from any Salesforce record — Leads, Cases, Opportunities, Work Orders, or Custom Objects.</p>
                        <Link href='/products/agentchat/' className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={(e) => handleLinkClick(e, "/products/agentchat/")}
                        >Let's Begin</Link>
                      </div >
                    </div >

                  </div >
                )}

                {
                  openSectionProduct === "mediaina" && (
                    <div className="col-span-8 flex space-x-5"  >
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Transform Patient Care—From Discovery to Recovery</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">Powered by LifeAI+, Rialtes' consulting service dedicated to life sciences, MediAIana delivers intelligent, scalable, and compliant healthcare innovation at every stage of the patient journey.</p>
                          <Link href='/products/mediaina-reimagining-patient-journeys/' className="text-[#134874] border-[1px] border-[solid] border-[#134874] 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] py-3 px-6 mt-4" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={(e) => handleLinkClick(e, "/products/mediaina-reimagining-patient-journeys/")}
                          >Let's Begin</Link>
                        </div>
                      </div>

                    </div>
                  )
                }
                {
                  openSectionProduct === "exelona" && (
                    <div className="col-span-8 flex space-x-5"  >
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Exelona™ – Your End-to-End Real Estate Command Center</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">Unites every stage of your property business—sales, operations, and finance into one AI-powered, mobile-ready platform, merging CRM and ERP for faster, smarter decisions.</p>
                          <Link href='/products/exelona-salesforce-for-real-estate-management/' className="text-[#134874] border-[1px] 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] border-[solid] border-[#134874] py-3 px-6 mt-4" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={(e) => handleLinkClick(e, "/products/exelona-salesforce-for-real-estate-management/")}
                          >Let's Begin</Link>
                        </div>
                      </div>

                    </div>
                  )
                }

              </div >
            </div >
          )}

          {/* Services Card */}
          {
            activeCard === 3 && (
              <div onMouseEnter={() => handleMouseEnterCard(3)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-auto pb-20  left-0 z-40 border-t-2 absolute">
                <div className="grid grid-cols-12 custom-container gap-5 xl:w-full  md:gap-5  lg:gap-10 md:mt-10 xl:justify-between md:justify-center xl:mt-10">
                  <div className="col-span-3 bg-[#deebf8] p-3">
                    <div
                      className={`cursor-pointer font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionbusiness === "businessTransform" ? "bg-white" : "bg-transparent"}`}
                      onClick={() => handleSubMenuClickBusiness("businessTransform")}
                    >
                      Business Transformation
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionbusiness === "intelligentScm" ? "bg-white" : "bg-transparent"}`}
                      onClick={() => handleSubMenuClickBusiness("intelligentScm")}
                    >
                      LOB Services
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionbusiness === "spentMangemnet" ? "bg-white" : "bg-transparent"}`}
                      onClick={() => handleSubMenuClickBusiness("spentMangemnet")}
                    >
                      Spend Management
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionbusiness === "hxmTransformation" ? "bg-white" : "bg-transparent"}`}
                      onClick={() => handleSubMenuClickBusiness("hxmTransformation")}
                    >
                      HXM Transformation
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionbusiness === "data-ai" ? "bg-white" : "bg-transparent"}`}
                      onClick={() => handleSubMenuClickBusiness("data-ai")}
                    >
                      Data and AI
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionbusiness === "intelligent" ? "bg-white" : "bg-transparent"}`}
                      onClick={() => handleSubMenuClickBusiness("intelligent")}
                    >
                      Intelligent SCM
                    </div>
                    <div
                      className={`cursor-pointer mt-3 font-bold 4xl:text-[18px] xl:text-[16px] text-[14px] p-3 ${openSectionbusiness === "applicationServices" ? "bg-white" : "bg-transparent"}`}
                      onClick={() => handleSubMenuClickBusiness("applicationServices")}
                    >
                      Application Services
                    </div>
                  </div>
                  {openSectionbusiness === "businessTransform" && (
                    <div className="col-span-8 flex space-x-5"  >
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">From Vision to Value — Transform Smarter, Grow Faster</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px]">From strategy to execution, we accelerate your transformation journey with AI-powered insights and industry-leading expertise, turning challenges into competitive advantages</p>

                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Grow with SAP" link="/services/business-transformation/grow-with-sap-services/" onClick={(e) => handleLinkClick(e, "/services/business-transformation/grow-with-sap-services/")} onHover={() => { }} />
                              <MenuItem className="font-bold text-[#2f78c4] mt-8 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Oracle EBSPlus" link="/solutions/enterprise-platforms/oracle-ebs-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/oracle-ebs-consulting/")}
                                onHover={() => { }} />
                            </div>

                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Rise with SAP" link="/services/business-transformation/rise-with-sap-services/" onClick={(e) => handleLinkClick(e, "/services/business-transformation/rise-with-sap-services/")}
                                onHover={() => { }} />
                              <MenuItem className="font-bold text-[#2f78c4] mt-8 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="SAP Digital Desk" link="/services/business-transformation/sap-managed-services-provider/" onClick={(e) => handleLinkClick(e, "/services/business-transformation/sap-managed-services-provider/")}
                                onHover={() => { }} />
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
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Subtext - Smarter Data. Sharper Decisions. Stronger Outcomes.</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px]">Experience the future of consulting — powered by AI and insight-driven innovation.</p>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Salesforce Data Cloud" link="/solutions/data-ai/salesforce-data-cloud-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/salesforce-data-cloud-consulting/")} onHover={() => { }} />
                              <MenuItem className="font-bold text-[#2f78c4] mt-8 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Agentforce" link="/solutions/artificial-intelligence/salesforce-agentforce-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/artificial-intelligence/salesforce-agentforce-consulting/")}
                                onHover={() => { }} />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="SAP Datasphere" link="/solutions/data-ai/sap-datasphere-implementation-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/sap-datasphere-implementation-consulting/")}
                                onHover={() => { }} />
                              <MenuItem className="font-bold text-[#2f78c4] mt-8 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="SAP Business Data Cloud" link="/solutions/data-ai/sap-business-data-cloud-bdc-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/sap-business-data-cloud-bdc-consulting/")}
                                onHover={() => { }} />
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
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Visibility. Control. Savings.</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px]">Our comprehensive spend management services deliver transparency and accountability, transforming how you manage business expenses.
                          </p>

                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">

                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="SAPBuy+" link="/services/spend-management/sapbuyplus-ariba-implementation-partner/" onClick={(e) => handleLinkClick(e, "/services/spend-management/sapbuyplus-ariba-implementation-partner/")}
                                onHover={() => { }} />
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
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Reduce operational costs and increase ROI For Every Line of Business</div>
                          <div className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">Whether it's modernizing legacy systems or streamlining operations, our LOB services are built to scale with your business.
                          </div>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-10">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Retail+" link="/services/lob/retail-plus-business-consulting-omnichannel-solutions/" onClick={(e) => handleLinkClick(e, "/services/lob/retail-plus-business-consulting-omnichannel-solutions/")} onHover={() => { }} />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="AutoSense" link="/services/lob/salesforce-automotive-cloud-business-solutions-autosense/" onClick={(e) => handleLinkClick(e, "/services/lob/salesforce-automotive-cloud-business-solutions-autosense/")}
                                onHover={() => { }} />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="SAPBuy+" link="/services/spend-management/sapbuyplus-ariba-implementation-partner/" onClick={(e) => handleLinkClick(e, "/services/spend-management/sapbuyplus-ariba-implementation-partner/")}
                                onHover={() => { }} />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Life AI+" link="/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting/" onClick={(e) => handleLinkClick(e, "/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting/")}
                                onHover={() => { }} />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Advantage+" link="/services/lob/salesforce-marketing-cloud-implementation-consulting/" onClick={(e) => handleLinkClick(e, "/services/lob/salesforce-marketing-cloud-implementation-consulting/")}
                                onHover={() => { }} />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4]" label="RialFinance+" link="/services/lob/salesforce-fsc-consulting-rialfinanceplus/" onClick={(e) => handleLinkClick(e, "/services/lob/salesforce-fsc-consulting-rialfinanceplus/")}
                                onHover={() => { }} />
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
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Expert-Led Managed Services for Application Performance and Maximum Business Impact</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px]">From strategic implementation to day-to-day operations, we offer end-to-end managed services for SAP and Salesforce platforms—ensuring performance, scalability, and continuous innovation.
                          </p>

                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-10">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="SalesforceAgent+" link="/services/application-services/salesforce-managed-services-provider-salesforceagentplus/" onClick={(e) => handleLinkClick(e, "/services/application-services/salesforce-managed-services-provider-salesforceagentplus/")} onHover={() => { }} />
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
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Empower Your Workforce with Smarter HCM Solutions</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px]">From hire to retire, our Human Capital Management (HCM) services optimize talent management, boost productivity, and enhance employee experiences.</p>

                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">

                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Success+" link="/services/hxm-transformation/successplus-successfactors-implementation-partner/" onClick={(e) => handleLinkClick(e, "/services/hxm-transformation/successplus-successfactors-implementation-partner/")}
                                onHover={() => { }} />
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
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Reinvent Supply Chains with AI and Real-Time Intelligence</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px]">Empower businesses to anticipate demand, automate operations, and respond to disruptions swiftly, turning supply chains into strategic, resilient growth drivers.</p>

                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">

                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Demand+" link="/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/" onClick={(e) => handleLinkClick(e, "/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/")}
                                onHover={() => { }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          }

          {/* Industries Card */}
          {
            activeCard === 4 && (
              <div onMouseEnter={() => handleMouseEnterCard(4)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-auto  pb-20 left-0 z-40 border-t-2 absolute">
                <div className="grid grid-cols-12 custom-container gap-5 xl:w-full  md:gap-5  lg:gap-10 md:mt-10 xl:justify-between md:justify-center xl:mt-10">
                  <div className="col-span-3">
                    <div className="bg-[#deebf8] p-3">
                      <div
                        className={`cursor-pointer font-bold 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px]  text-[14px] 4xl:p-3 md:p-2   ${openSection === "automotive" ? "bg-white" : "bg-transparent"}`}
                        onClick={() => handleSubMenuClick("automotive")}
                      >
                        Real Estate
                      </div>

                      <div
                        className={`cursor-pointer 4xl:mt-3 2xl:mt-3 xl:mt-2  font-bold 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] text-[14px] 4xl:p-3 2xl:p-3 md:p-2  ${openSection === "lifeSciences" ? "bg-white" : "bg-transparent"}`}
                        onClick={() => handleSubMenuClick("lifeSciences")}
                      >
                        Life Sciences
                      </div>
                      <div
                        className={`cursor-pointer 4xl:mt-3 2xl:mt-3 xl:mt-2 font-bold 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] text-[14px] 4xl:p-3 2xl:p-3 md:p-2  ${openSection === "hiTech" ? "bg-white" : "bg-transparent"}`}
                        onClick={() => handleSubMenuClick("hiTech")}
                      >
                        Semiconductor
                      </div>
                      <div
                        className={`cursor-pointer 4xl:mt-3 2xl:mt-3 xl:mt-2 font-bold 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] text-[14px] 4xl:p-3 2xl:p-3 md:p-2  ${openSection === "manufacturing" ? "bg-white" : "bg-transparent"}`}
                        onClick={() => handleSubMenuClick("manufacturing")}
                      >
                        Manufacturing
                      </div>
                      <div
                        className={`cursor-pointer 4xl:mt-3 2xl:mt-3 xl:mt-2 font-bold 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] text-[14px] 4xl:p-3 2xl:p-3 md:p-2  ${openSection === "education" ? "bg-white" : "bg-transparent"}`}
                        onClick={() => handleSubMenuClick("education")}
                      >
                        Education
                      </div>
                      <div
                        className={`cursor-pointer 4xl:mt-3 2xl:mt-3 xl:mt-2 font-bold 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] text-[14px] 4xl:p-3 2xl:p-3 md:p-2  ${openSection === "autoinstry" ? "bg-white" : "bg-transparent"}`}
                        onClick={() => handleSubMenuClick("autoinstry")}
                      >
                        Automotive
                      </div>
                      <div
                        className={`cursor-pointer 4xl:mt-3 2xl:mt-3 xl:mt-2 font-bold 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] text-[14px] 4xl:p-3 2xl:p-3 md:p-2  ${openSection === "travelHospitality" ? "bg-white" : "bg-transparent"}`}
                        onClick={() => handleSubMenuClick("travelHospitality")}
                      >
                        Travel and Hospitality
                      </div>
                      <div
                        className={`cursor-pointer 4xl:mt-3 2xl:mt-3 xl:mt-2 font-bold 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] text-[14px] 4xl:p-3 2xl:p-3 md:p-2  ${openSection === "retailIndustry" ? "bg-white" : "bg-transparent"}`}
                        onClick={() => handleSubMenuClick("retailIndustry")}
                      >
                        Retail
                      </div>
                      <div
                        className={`cursor-pointer 4xl:mt-3 2xl:mt-3 xl:mt-2 font-bold 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] text-[14px] 4xl:p-3 2xl:p-3 md:p-2  ${openSection === "nonProfitIndustry" ? "bg-white" : "bg-transparent"}`}
                        onClick={() => handleSubMenuClick("nonProfitIndustry")}
                      >
                        Non-Profit
                      </div>
                      <div
                        className={`cursor-pointer 4xl:mt-3 2xl:mt-3 xl:mt-2 font-bold 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] text-[14px] 4xl:p-3 2xl:p-3 md:p-2  ${openSection === "financeIndustry" ? "bg-white" : "bg-transparent"}`}
                        onClick={() => handleSubMenuClick("financeIndustry")}
                      >
                        Finance
                      </div>
                    </div>
                  </div>
                  {openSection === "automotive" && (
                    <div className="col-span-8 flex space-x-5"  >
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]"> From the Factory Floor to the Driver's Seat — Smarter Automotive Solutions</div>
                          <div className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">Transforming production, sales, and service experiences through AI, IoT, and data-driven strategies</div>
                          <Link href='/industry/real-estate-property-management/' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" className="text-[#134874] 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" onClick={(e) => handleLinkClick(e, "/industry/real-estate-property-management/")}
                          >Let's Begin</Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {openSection === "lifeSciences" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]"> Shaping the Future of Healthcare and Life Sciences with Digital Innovation</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">Empowering life sciences companies to improve patient outcomes and operationalexcellence through next-gen technology</p>

                          <Link href='/industry/life-sciences-digital-transformation/' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" className="text-[#134874] 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-10" onClick={(e) => handleLinkClick(e, "/industry/life-sciences-digital-transformation/")}
                          >Let's Begin</Link>
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">

                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" label="Healthcare" link="/industry/life-sciences/healthcare-medtech-patient-care/" onClick={(e) => handleLinkClick(e, "/industry/life-sciences/healthcare-medtech-patient-care/")}
                                onHover={() => { }} aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Pharma and Biotech" link="/industry/life-sciences/pharma-biotech-digital-transformation/" onClick={(e) => handleLinkClick(e, "/industry/life-sciences/pharma-biotech-digital-transformation/")}
                                onHover={() => { }} />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] mt-6 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Medical Devices" link="/industry/life-sciences/medical-devices-it-solutions/" onClick={(e) => handleLinkClick(e, "/industry/life-sciences/medical-devices-it-solutions/")}
                                onHover={() => { }} />
                            </div>
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] mt-6 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Home Health" link="/industry/life-sciences/home-health-ai-tech-solutions/" onClick={(e) => handleLinkClick(e, "/industry/life-sciences/home-health-ai-tech-solutions/")}
                                onHover={() => { }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  )}

                  {openSection === "hiTech" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Semiconductor Industry 4.0 — Powering Next-Gen Chips with Next-Gen Solutions</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">Reimagining semiconductor operations with intelligent automation, data-driven insights,and global supply chain resilience for large enterprises</p>
                          <Link href='/industry/hitech-semiconductor-ai-it-solutions/' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" className="text-[#134874] 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" onClick={(e) => handleLinkClick(e, "/industry/hitech-semiconductor-ai-it-solutions/")}
                          >Let's Begin</Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSection === "autoinstry" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Breakdowns to Breakthroughs: We're There for Your Automotive Service Journeys</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">We empower OEMs and dealerships with efficient case management and smart warranty administration to resolve issues quickly, manage complex vehicle lifecycles, and build customer trust.</p>
                          <Link className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" href='/industry/digital-transformation-in-automotive-industry/' onClick={(e) => handleLinkClick(e, "/industry/digital-transformation-in-automotive-industry/")}
                          >Let's Begin</Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSection === "travelHospitality" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">AI-Driven Innovation for Travel, Transportation & Hospitality</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">Our solutions streamline operations, boost agility, and drive revenue across airlines, hotels, logistics, and more</p>
                          <Link href='/industry/travel-hospitality-it-solutions/' className="text-[#134874] border-[1px] 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] border-[solid] border-[#134874] py-3 px-6 mt-4" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={(e) => handleLinkClick(e, "/industry/travel-hospitality-it-solutions/")}
                          >Let's Begin</Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {openSection === "retailIndustry" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Smart Retail Solutions to Build Intelligent, Scalable Retail Ecosystems</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">Bringing 10+ years of global expertise to help B2B and B2C retailers modernize operations and exceed customer expectations.</p>
                          <Link href='/industry/retail-industry-digital-transformation/' className="text-[#134874] 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={(e) => handleLinkClick(e, "/industry/retail-industry-digital-transformation/")}
                          >Let's Begin</Link>
                        </div>
                      </div>
                    </div>
                  )}



                  {openSection === "nonProfitIndustry" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Partnering with Nonprofits to Scale Mission-Driven Outcomes</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">We understand the heart of nonprofit work lies in its mission. Rialtes supports that mission with integrated solutions, strategic consulting, and continuous innovation.</p>
                          <Link href='/industry/nonprofit-digital-transformation-it-solutions/' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" className="text-[#134874] 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" onClick={(e) => handleLinkClick(e, "/industry/nonprofit-digital-transformation-it-solutions/")}
                          >Let's Begin</Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {openSection === "financeIndustry" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Bringing Digital Transformation to Financial Services</div>
                          <p className="mt-3  4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">Transforming retail banking, commercial banking, credit unions, and mortgages through analytics and AI-driven predictions</p>

                          <Link href='/industry/finance-industry-digital-transformation-services-solutions/' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" className="text-[#134874] 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" onClick={(e) => handleLinkClick(e, "/industry/finance-industry-digital-transformation-services-solutions/")}
                          >Let's Begin</Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSection === "manufacturing" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Powering Smart, Seamless Manufacturing with Mobility and Efficiency</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">Making Manufacturing Smarter — AI, Automation, and Actionable Insights</p>
                          <Link href='/industry/manufacturing-cloud-erp/' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" className="text-[#134874] 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" onClick={(e) => handleLinkClick(e, "/industry/manufacturing-cloud-erp/")}
                          >Let's Begin</Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {openSection === "education" && (
                    <div className="col-span-8 flex space-x-5">
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Driving Education with Student-Centric Solutions</div>
                          <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">Igniting the future of learning, unlocking potential, powering progress—technology for tomorrow’s education.</p>
                          <Link href='/industry/education-cloud-it-solutions/' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" className="text-[#134874] 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4" onClick={(e) => handleLinkClick(e, "/industry/education-cloud-it-solutions/")}
                          >Let's Begin</Link>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            )
          }

          {/* about us Card */}
          {
            activeCard === 5 && (
              <div onMouseEnter={() => handleMouseEnterCard(5)} onMouseLeave={handleMouseLeaveCard} className="transition-all pb-20 duration-300 ease-in-out bg-white shadow-lg w-full h-auto left-0 z-40 border-t-2 absolute">
                <div className="grid grid-cols-12 gap-3 lg:gap-10 custom-container md:mt-10 xl:mt-10">
                  <div className="col-span-3">

                    <div className="bg-[#deebf8] p-3">
                      <div
                        className="cursor-pointer font-bold bg-white pl-3 pt-3 pb-3 4xl:text-[18px] xl:text-[16px] text-[14px]">
                        About Rialtes: Innovating with Impact
                      </div>
                    </div>

                  </div>
                  <div className="col-span-8 flex space-x-5"  >
                    <div>
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Beyond Business: A Commitment to Change</div>
                        <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">Rialtes is more than a technology leader — we are advocates for positive change. From sustainability initiatives to empowering underrepresented voices, we’re dedicated to making a meaningful impact</p>
                        <Link href='/about-us/' className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-3 px-6 mt-4 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={(e) => handleLinkClick(e, "/about-us/")}>Let's Begin</Link>
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Culture and Values" link="/about-us/our-values/" onClick={(e) => handleLinkClick(e, "/about-us/our-values/")} onHover={() => { }} />
                            <MenuItem className="font-bold text-[#2f78c4] mt-6 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Partnership" link="/about-us/global-alliances/" onClick={(e) => handleLinkClick(e, "/about-us/global-alliances/")}
                              onHover={() => { }} />
                            <MenuItem className="font-bold text-[#2f78c4] mt-6 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="News and Press Releases" link="/insights/news/" onClick={(e) => handleLinkClick(e, "/insights/news/")} onHover={() => { }} />
                          </div>
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Corporate Citizenship" link="/about-us/impact-and-social-responsibility/" onClick={(e) => handleLinkClick(e, "/about-us/impact-and-social-responsibility/")} onHover={() => { }} />
                            <MenuItem className="font-bold text-[#2f78c4] mt-6  4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label=" Contact Us" link="/contact-us/" onClick={(e) => handleLinkClick(e, "/contact-us/")}
                              onHover={() => { }} />
                          </div>
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }

          {
            activeCard === 6 && (
              <div onMouseEnter={() => handleMouseEnterCard(6)} onMouseLeave={handleMouseLeaveCard} className="transition-all pb-20 duration-300 ease-in-out bg-white shadow-lg w-full h-auto left-0 z-40 border-t-2 absolute">
                <div className="grid grid-cols-12 gap-3 lg:gap-10 custom-container md:mt-10 xl:mt-10">
                  <div className="col-span-3">
                    <div className="bg-[#deebf8] p-3">
                      <div
                        className="cursor-pointer font-bold bg-white pl-3 pt-3 pb-3 4xl:text-[18px] xl:text-[16px] text-[14px]"
                      >
                        Insights
                      </div>
                    </div>
                  </div>
                  <div className="col-span-8 flex space-x-5"  >
                    <div>
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]">Explore Our Insights: Blogs, Case Studies, and Thought Leadership</div>
                        <p className="mt-3 4xl:text-[18px] xl:text-[16px] text-[14px] pb-8">Stay ahead of the curve with expert perspectives, success stories, and the latest innovations in AI.</p>
                        <Link href='/insights/' className="text-[#134874] border-[1px] border-[solid] border-[#134874] 4xl:text-[18px] 2xl:text-[16px] xl:text-[16px] py-3 px-6 mt-4" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={(e) => handleLinkClick(e, "/insights/")}
                        >Let's Begin</Link>
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Blogs" link="/insights/blogs/" onClick={(e) => handleLinkClick(e, "/insights/blogs/")}
                              onHover={() => { }} />
                            <div>
                              <MenuItem className="font-bold text-[#2f78c4] mt-10 4xl:text-[18px] xl:text-[16px] text-[14px]" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" label="Webinars" link="/insights/webinars/" onClick={(e) => handleLinkClick(e, "/insights/webinars/")}
                                onHover={() => { }} />
                            </div>
                          </div>
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4] 4xl:text-[18px] xl:text-[16px] text-[14px]" label="Case Studies" aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" link="/insights/case-studies/" onClick={(e) => handleLinkClick(e, "/insights/case-studies/")}
                              onHover={() => { }} />
                          </div>
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div >
      </div>

      <div>
        <div className="lg:hidden flex justify-between items-center px-[35px] py-3 bg-white w-full z-50 fixed top-0" id="mobile-menu">

          <Link href='/' aria-label="Homepage">
            <Image
              loading="lazy"
              className="cursor-pointer"
              alt="Rialtes Logo"
              height='150'
              width='100'
              src='/images/homepage/logo.svg'
              aria-label="logo2"
            />
          </Link>

          <button onClick={toggleMenu} className="pt-4 pb-4">
            {isMenuOpen ? (
              <svg
                className="w-6 h-6 text-gray-800 transform rotate-45 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
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
                xmlns="http://www.w3.org/2000/svg"
              >
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
                    alt="Rialtes Logo White"
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
                <Link onClick={toggleMenu} href='/contact-us/' aria-label="Contact us page">
                  <p className="text-sm mt-3 font-bold pb-8">Contact Us</p>
                </Link>
                <Link href='/contact-us/' aria-label="Let's begin exploring HiTech Semiconductor AI and IT solutions" onClick={toggleMenu} className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">Lets Begin</Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section >

  )
}
export default Header