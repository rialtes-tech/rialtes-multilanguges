"use client";
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react";


const MenuItem = ({ label, link, onHover, className, onClick, isActive }) => {
  return (
    <Link href={link}>
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
  const [activeMenu, setActiveMenu] = useState(null);
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
            { label: 'Salesforce Data Cloud', href: '/solutions/data-ai/salesforce-data-cloud-consulting' },
            { label: 'Data-Sphere', href: '/solutions/data-ai/data-sphere' },

          ],
        },
        {
          label: 'Enterprise Platforms', href: '/',
          subLinks: [
            { label: 'SAP', href: '/solutions/enterprise-platforms/sap-consulting' },
            { label: 'Salesforce', href: '/solutions/enterprise-platforms/salesforce-consulting' },
            { label: 'SAP Ariba', href: '/services/spend-management/sapbuyplus-ariba-implementation-partner' },
            { label: 'Revenue Cloud', href: '/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting' },
            { label: 'Agentforce', href: '/solutions/artificial-intelligence/salesforce-agentforce-consulting' },
            { label: 'SAP SuccessFactors', href: '/services/hxm-transformation/successplus-successfactors-implementation-partner' },
            { label: 'Oracle', href: '/solutions/enterprise-platforms/oracle-ebs-consulting' },
            { label: 'Kinaxis', href: '/solutions/enterprise-platforms/kinaxis' },
          ],
        },
        {
          label: 'Integration', href: '/',
          subLinks: [
            { label: 'MuleSoft', href: '/solutions/integration/mulesoft-salesforce' },

          ],
        },
        {
          label: 'Artificial Intelligence', href: '/',
          subLinks: [
            { label: 'Agentforce', href: '/solutions/artificial-intelligence/salesforce-agentforce-consulting' },
          ],
        },
        {
          label: 'Process Automation', href: '/',
          subLinks: [
            { label: 'Agentforce', href: '/solutions/artificial-intelligence/salesforce-agentforce-consulting' },
          ],
        },
      ],
    },
    {
      label: 'Products',
      links: [
        { label: 'AgentChat', href: '/products/agentchat' },
      ],
    },
    {
      label: 'Services',
      links: [
        {
          label: 'Business Transformation', href: '/',
          subLinks: [
            { label: 'Grow with SAP', href: '/services/business-transformation/grow-with-sap-services' },
            { label: 'Rise with SAP', href: '/services/business-transformation/rise-with-sap-services' },
            { label: 'Oracle EBSPlus', href: '/solutions/enterprise-platforms/oracle-ebs-consulting' },

          ],
        },
        {
          label: 'LOB Services', href: '/',
          subLinks: [
            { label: 'AutoSense', href: '/services/lob/autosense-automotive-digital-transformation-services' },
            { label: 'Retail+', href: '/services/lob/retail-plus-business-consulting-omnichannel-solutions' },
            { label: 'SAPBuy+', href: '/services/spend-management/sapbuyplus-ariba-implementation-partner' },
            { label: 'Life AI+', href: '/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting' }
          ],


        },
        {
          label: 'Spend Management', href: '/',
          subLinks: [
            { label: 'SAPBuy+', href: '/services/spend-management/sapbuyplus-ariba-implementation-partner' },],
        },
        {
          label: 'HXM Transformation', href: '/',
          subLinks: [
            { label: 'SuccessFactors Implementation', href: '/services/hxm-transformation/successplus-successfactors-implementation-partner' },],
        },
        {
          label: 'Data and AI', href: '/',
          subLinks: [
            { label: 'Salesforce Data Cloud', href: '/solutions/data-ai/salesforce-data-cloud-consulting' },
            { label: 'Agentforce', href: '/solutions/artificial-intelligence/salesforce-agentforce-consulting' },
            { label: 'SAP Datasphere', href: '/solutions/data-ai/sap-datasphere-implementation-consulting' }

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
          label: 'Life Sciences', href: '/',
          subLinks: [
            { label: 'Healthcare', href: '/industry/life-sciences/healthcare-medtech-patient-care' },
            { label: 'Medical Devices', href: '/industry/life-sciences/medical-devices-it-solutions' },
            { label: 'Pharma And BioTech', href: '/industry/life-sciences/pharma-biotech-digital-transformation' },
          ],
        },
        {
          label: 'Hi-Tech', href: '/industry/hitech-semiconductor',
        },
        {
          label: 'Manufacturing', href: '/industry/manufacturing-cloud-erp',
        },
        {
          label: 'Education', href: '/industry/connected-education',
        },
        {
          label: 'Automotive', href: '/industry/automotive-industry-cloud-solutions',
        },

      ],
    },
    {
      label: 'About Us', href: '/about-us',
      links: [
        { label: 'Overview', href: '/about-us' },
        // { label: 'Contact Us', href: '/contact-us' },
        { label: 'Partnership', href: '/about-us/global-alliences' },
        { label: 'Culture and Values', href: '/about-us/our-values' },
        { label: 'News and Press Releases', href: '/insights/news' },
        { label: 'Corporate Citizenship', href: '/about-us/impact-and-social-responsibility' },


      ],
    },
    {
      label: 'Insights', href: '/insights',
      links: [
        { label: 'Overview', href: '/insights' },
        { label: 'Blogs', href: '/insights/blogs' },
        { label: 'Case Studies', href: '/insights/case-studies' },
        { label: 'Webinars', href: '/insights/webinars' },


      ],
    },
  ];

  const Accordion = ({ label, links, expanded, onToggle, toggleSubAccordion, expandedSub, onMenuItemClick }) => {
    return (
      <li className="py-2">
        <button onClick={onToggle} className="w-full text-left flex justify-between items-center">
          <h4 className={`text-sm ${expanded ? 'text-[#0092E0]' : ''}`}>
            {label}
          </h4>
          <span>
            {expanded ? (
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

        {expanded && (
          <div className="pt-2 text-gray-600">
            {links.map((link, idx) => (
              <div key={idx} className="pb-2 pt-2">
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => toggleSubAccordion(link.label)} // Toggle sub-menu for the link
                      className="w-full text-left flex justify-between items-center"
                    >
                      <h4
                        className={`text-sm cursor-pointer ${activeLink === link.label ? 'text-blue-500 font-bold' : 'text-black'}`}
                        onClick={() => handleLinkClick(link.label)} // Handle active state change for submenu
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
                          <div key={subIdx} className="border-b-[2px] pb-2 pt-2">
                            <Link
                              href={subLink.href}
                              onClick={() => handleSubLinkClick(subLink.label)} // Track active sublink
                              className={`text-sm ${activeSubLink === subLink.label ? 'text-blue-500 font-bold' : 'text-[#505050] hover:text-[#05B1FD]'} cursor-pointer`}
                            >
                              <h5>{subLink.label}</h5>
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={onMenuItemClick}// Track active link
                    className={`text-sm ${activeLink === link.label ? 'text-blue-500 font-bold' : 'text-[#505050] hover:text-[#05B1FD]'} cursor-pointer`}
                  >
                    <h5>{link.label}</h5>
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
    <section>
      {/* <div className="hidden relative xl:pb-3 bg-white mt-auto mx-auto xl:gap-5  md:gap-2 pt-5  xl:pl-[260px] md:pl-[85px] top-0 z-50 items-center right-0 left-0 xl:grid lg:grid md:grid grid-cols-12"></div> */}
      <div className="fixed w-full bg-white top-0 z-50 shadow-md lg:pr-0 md:pr-36 hidden xl:block md:block lg:block">
        <div className="md:grid hidden relative bg-white my-auto mx-auto xl:gap-6 md:gap-4 container
      ml-[200px] w-[calc(100%-200px)]  
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        top-0 z-50 items-center right-0 left-0 2xl:grid-cols-12 xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 py-6 mr-6">
          <div className="2xl:col-span-4 xl:col-span-2 lg:col-span-2 md:col-span-1 md:pr-0 pr-6">
            <Link href="/" passHref>
              <Image
                className="z-[999] cursor-pointer lg:w-[165px] md:w-[130px] w-[120px]"
                alt="Company logo"
                width={0}
                height={0}
                sizes="100vw"
                src="/images/homepage/logo.svg"
                style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                priority
              />
            </Link>
          </div>


          <div className="2xl:col-span-8 xl:col-span-8 lg:col-span-6 md:col-span-5 flex 2xl:gap-8 xl:gap-6 md:gap-4 items-center text-nowrap">
            <MenuItem
              label="Solutions"
              link="/"
              onHover={() => handleMouseEnterCard(1)}
              onClick={() => handleMenuClick(1)}
              className={`xl:font-bold font-normal`}
              isActive={activeCard === 1}
            />
            <MenuItem
              label="Products"
              link="/"
              onHover={() => handleMouseEnterCard(2)}
              onClick={() => handleMenuClick(2)}
              isActive={activeCard === 2}
              className={`xl:font-bold font-normal`}

            />
            <MenuItem
              label="Services"
              link="/"
              onHover={() => handleMouseEnterCard(3)}
              onClick={() => handleMenuClick(3)}
              isActive={activeCard === 3}
              className={`xl:font-bold font-normal`}

            />
            <MenuItem
              label="Industries"
              link="/industry"
              onHover={() => handleMouseEnterCard(4)}
              onClick={() => handleMenuClick(4)}
              isActive={activeCard === 4}
              className={`xl:font-bold font-normal`}

            />
            <MenuItem
              label="About Us"
              link="/about-us"
              onHover={() => handleMouseEnterCard(5)}
              onClick={() => handleMenuClick(5)}
              className={`xl:font-bold font-normal`}
              isActive={activeCard === 5}
            />
            <MenuItem
              label="Insights"
              link="/insights"
              onHover={() => handleMouseEnterCard(6)}
              onClick={() => handleMenuClick(6)}
              className={`xl:font-bold font-normal`}
              isActive={activeCard === 6}
            />
            <MenuItem
              label="Contact Us"
              link="/contact-us"
              className={`xl:font-bold font-normal`}
              isActive={activeCard === 7}
            />

            <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
              <Link href='/contact-us#section1'>Let's Begin</Link>
            </button>
          </div>
        </div>

        {/* Cards for each menu item */}
        <div>
          {/* solutions Card */}
          {activeCard === 1 && (
            <div onMouseEnter={() => handleMouseEnterCard(1)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white w-full h-auto pb-8 left-0 z-30 border-t-2 absolute" >
              <div className="grid grid-cols-12 xl:pl-[280px]  gap-3 md:mt-10 xl:mt-10 md:pl-[100px]">
                <div className="col-span-3 bg-[#deebf8] p-3 relative">
                  {/* Data & AI Section */}
                  <div
                    className={`cursor-pointer font-bold mt-3 ${openSectionSolution === "dataAI" ? "bg-white pl-3 pt-3 pb-3 pr-3" : "p-2"}`}
                    onClick={() => handleSubMenuClickSolution("dataAI")}
                  >
                    Data & AI
                  </div>

                  <div
                    className={`cursor-pointer mt-3 font-bold ${openSectionSolution === "enterprise" ? "bg-white pl-3 pt-3 pb-3 pr-3" : "p-2"}`}
                    onClick={() => handleSubMenuClickSolution("enterprise")}
                  >
                    Enterprise Platforms
                  </div>

                  <div
                    className={`cursor-pointer mt-3 font-bold ${openSectionSolution === "integration" ? "bg-white pl-3 pt-3 pb-3 pr-3" : "p-2"}`}
                    onClick={() => handleSubMenuClickSolution("integration")}
                  >
                    Integration
                  </div>

                  {/* <div
                  className={`cursor-pointer mt-3 font-bold ${openSectionSolution === "cloudeMigration" ? "bg-white pl-3 pt-3 pb-3 pr-3" : "p-2"}`}
                  onClick={() => handleSubMenuClickSolution("cloudeMigration")}
                >
                  Cloud Migration
                </div> */}

                  <div
                    className={`cursor-pointer mt-3 font-bold ${openSectionSolution === "artificialIntelligence" ? "bg-white  pl-3 pt-3 pb-3 pr-3" : "p-2"}`}
                    onClick={() => handleSubMenuClickSolution("artificialIntelligence")}
                  >
                    Artificial Intelligence
                  </div>


                  {/* <div
                  className={`cursor-pointer mt-3 font-bold ${openSectionSolution === "qualityEnAss" ? "bg-white pl-3 pt-3 pb-3 pr-3" : "p-2"}`}
                  onClick={() => handleSubMenuClickSolution("qualityEnAss")}
                >
                  Quality Engineering & Assurance
                </div> */}

                  <div
                    className={`cursor-pointer mt-3 font-bold ${openSectionSolution === "aiAutomation" ? "bg-white  pl-3 pt-3 pb-3 pr-3" : "p-2"}`}
                    onClick={() => handleSubMenuClickSolution("aiAutomation")}
                  >
                    Process Automation
                  </div>
                </div>

                {openSectionSolution === "dataAI" && (
                  <div className="col-span-8 flex space-x-5"  >
                    <div>
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5">From Data to Decisions — Smarter, Faster, Better with AI</div>
                        <p className="mt-3">Turn raw data into real-time intelligence that drives efficiency, innovation, and growth</p>
                        {/* <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button> */}
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4]" label="Salesforce Data Cloud" link="/solutions/data-ai/salesforce-data-cloud-consulting" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/salesforce-data-cloud-consulting")}
                              onHover={() => { }} />

                          </div>
                          <div>
                            {/* <MenuItem className="font-bold text-[#2f78c4]" label="Snowflake" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Qlik" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}
                            <MenuItem className="font-bold text-[#2f78c4]" label="Datasphere" link="/solutions/data-ai/sap-datasphere-implementation-consulting/" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/sap-datasphere-implementation-consulting/")} onHover={() => { }} />

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {openSectionSolution === "enterprise" && (
                  <div className="col-span-6 flex space-x-5">

                    <div>
                      <div>
                        <div className="border-b pb-5">
                          <div className="font-bold mt-5">Transform. Automate. Lead — The Power of Intelligent Enterprise</div>
                          <p className="mt-3">Achieve operational excellence and customer-centric growth with scalable, intelligent enterprise platforms.</p>
                          {/* <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                          <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                        </button> */}
                        </div>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-32">
                            <div>
                              <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="SAP" link="/solutions/enterprise-platforms/sap-consulting" onHover={() => { }} onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/sap-consulting")} />
                              <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="Salesforce" link="/solutions/enterprise-platforms/salesforce-consulting" onHover={() => { }} onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/salesforce-consulting")} />
                              {/* <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="YARDI" link="/" onHover={() => { }} /> */}
                              <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="SAP Ariba" link="/services/spend-management/sapbuyplus-ariba-implementation-partner" onHover={() => { }} onClick={(e) => handleLinkClick(e, "/services/spend-management/sapbuyplus-ariba-implementation-partner")} />
                              <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="Oracle" link="/solutions/enterprise-platforms/oracle-ebs-consulting" onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/oracle-ebs-consulting")} onHover={() => { }} />
                            </div>
                            <div>
                              <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="Agentforce" link="/solutions/artificial-intelligence/salesforce-agentforce-consulting" onClick={(e) => handleLinkClick(e, "/solutions/artificial-intelligence/salesforce-agentforce-consulting")} onHover={() => { }} />
                              <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="SAP SuccessFactors" link="/services/hxm-transformation/successplus-successfactors-implementation-partner" onClick={(e) => handleLinkClick(e, "/services/hxm-transformation/successplus-successfactors-implementation-partner")} onHover={() => { }} />
                              <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Revenue Cloud" link="/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting" onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting")} onHover={() => { }} />
                              <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Kinaxis" link="/solutions/enterprise-platforms/kinaxis" onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/kinaxis")} onHover={() => { }} />

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
                        <div className="font-bold mt-5">Smarter Connections. Faster Growth. Intelligent Integration Services</div>
                        <p className="mt-3">Future-ready integration strategies that align business goals with seamless technology execution</p>
                        {/* <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/sap/sap-integration' onClick={handleLinkClick}>Let's Begin</Link>
                      </button> */}
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          <div>
                            <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="Mulesoft" link="/solutions/integration/mulesoft-salesforce" onHover={() => { }} onClick={(e) => handleLinkClick(e, "/solutions/integration/mulesoft-salesforce")}
                            />
                            {/* <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="SAP CPI" link="/" onHover={() => { }} onClick={handleLinkClick} /> */}
                          </div>
                          <div>
                            {/* <MenuItem className="font-bold text-[#2f78c4]" label="Workato" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}

                          </div>

                        </div>

                      </div>
                    </div>

                  </div>
                )}
                {/* {openSectionSolution === "cloudeMigration" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">Transform Legacy Systems with Expert Cloud Migration</div>
                      <p className="mt-3">Move beyond outdated infrastructure and embrace the future with secure, optimized cloud environments</p>
                      <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button>
                    </div>
                    <div className="mt-5">

                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="Amazon Web Services" link="/" onHover={() => { }} onClick={handleLinkClick} />
                          <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="Google Cloud Platform" link="/" onHover={() => { }} onClick={handleLinkClick} />


                        </div>
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="Microsoft Azure Platform" link="/" onClick={handleLinkClick} onHover={() => { }} />

                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              )} */}
                {openSectionSolution === "artificialIntelligence" && (
                  <div className="col-span-8 flex space-x-5">
                    <div>
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5">Make AI Your Competitive Advantage</div>
                        <p className="mt-3">Empowering businesses to solve complex problems, automate workflows, and deliver real-time insights with AI.</p>
                        {/* <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button> */}
                      </div>
                      <div className="mt-5">

                        <div className="grid grid-cols-2 gap-32">
                          {/* <div>
                          <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="RialBot" link="/" onHover={() => { }} onClick={handleLinkClick} />
                          <MenuItem className="font-bold pb-3 mt-6 text-[#2f78c4]" label="Microsoft Co-Pilot" link="/" onHover={() => { }} onClick={handleLinkClick} />
                        </div> */}
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4]" label="Agentforce" link="/solutions/artificial-intelligence/salesforce-agentforce-consulting" onClick={(e) => handleLinkClick(e, "/solutions/artificial-intelligence/salesforce-agentforce-consulting")} onHover={() => { }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* {openSectionSolution === "qualityEnAss" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">Quality Engineering and Assurance (QE & QA) services</div>
                      <p className="mt-3">Ensuring Every Digital Experience is Exceptional</p>
                      <p>Delivering quality-first outcomes with AI, automation, and deep domain expertise.</p>
                      <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button>
                    </div>
                    <div className="mt-5">
                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="TOSCA" link="/" onHover={() => { }} onClick={handleLinkClick} />
                        </div>
                        <div>
                          <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="Automated Testing" link="/" onHover={() => { }} onClick={handleLinkClick} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )} */}
                {openSectionSolution === "aiAutomation" && (
                  <div className="col-span-8 flex space-x-5">
                    <div>
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5">Agility Meets Efficiency with Next-Gen Process Automation</div>
                        <p className="mt-3">Integrating AI, RPA, and analytics to drive seamless, intelligent, and high-performing business processes.</p>
                        {/* <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button> */}
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          <div>
                            {/* <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="Automation Anywhere" link="/" onHover={() => { }} onClick={handleLinkClick} /> */}
                            <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="Agentforce" link="/solutions/artificial-intelligence/salesforce-agentforce-consulting" onHover={() => { }} onClick={(e) => handleLinkClick(e, "/solutions/artificial-intelligence/salesforce-agentforce-consulting")}
                            />
                          </div>
                          <div>
                            {/* <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="UIPath" link="/" onHover={() => { }} onClick={handleLinkClick} />
                          <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="Alteryx" link="/" onHover={() => { }} onClick={handleLinkClick} /> */}
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
            <div onMouseEnter={() => handleMouseEnterCard(2)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-auto pb-8  left-0 z-20 border-t-2 absolute">
              <div className="grid grid-cols-12 xl:pl-[280px] gap-5 xl:w-full lg:pl-[7.25rem] md:gap-5  lg:gap-5 md:pl-[100px] md:pr-2 md:mt-10 xl:justify-between md:justify-center xl:mt-10">
                <div className="col-span-3  p-3">
                  <div className="bg-[#deebf8] p-3">
                    <div
                      className={`cursor-pointer font-bold ${openSectionProduct === "rialchat" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                      onClick={() => handleSubMenuClickProduct("rialchat")}
                    >
                      AgentChat
                    </div>
                  </div>
                  {/* <div
                  className={`cursor-pointer mt-3 font-bold ${openSectionProduct === "exelona" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                  onClick={() => handleSubMenuClickProduct("exelona")}
                >
                  Exelona
                </div> */}
                  {/* <div
                  className={`cursor-pointer mt-3 font-bold ${openSectionProduct === "mediAIna" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}

                  onClick={() => handleSubMenuClickProduct("mediAIna")}
                >
                  MediAIna
                </div> */}
                </div>
                {openSectionProduct === "rialchat" && (
                  <div className="col-span-8 flex space-x-5"  >
                    <div>
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5">Engage, Support, and Close Deals — All Through WhatsApp. All Inside Salesforce.</div>
                        <p className="mt-3">Connect and respond to customers over WhatsApp from any Salesforce record — Leads, Cases, Opportunities, Work Orders, or Custom Objects.</p>
                        <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                          <Link href='/products/agentchat' onClick={(e) => handleLinkClick(e, "/products/agentchat")}
                          >Let's Begin</Link>
                        </button>
                      </div>
                    </div>

                  </div>
                )}

                {/* {openSectionProduct === "exelona" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">Exelona: Built for Real Estate, Powered by AI</div>
                      <p className="mt-3">Real Estate CRM, property accounting, and operationns — all connected, automated, and empowered by advanced AI analytics.
                        Optimize decision-making and drive profitability with a unified view of your real estate portfolio.

                      </p>
                      <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {openSectionProduct === "mediAIna" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">Unify trial management, prior authorization, and long-term care coordination in one intelligent, AI-driven healthcare CRM platform. </div>
                      <p className="mt-3"> Manage the entire patient lifecycle with ease — from trial management to long-term care — all powered by predictive AI insights.
                        Gain actionable insights, reduce administrative burdens, and ensure patients receive timely, personalized care.
                      </p>

                      <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/product/mediyina' onClick={handleLinkClick}>Let's Begin</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )} */}
              </div>
            </div>
          )}

          {/* Services Card */}
          {activeCard === 3 && (
            <div onMouseEnter={() => handleMouseEnterCard(3)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-auto pb-20  left-0 z-20 border-t-2 absolute">
              <div className="grid grid-cols-12 xl:pl-[280px] gap-5 xl:w-full lg:pl-[7.25rem] md:gap-5  lg:gap-5 md:pl-[100px] md:pr-2 md:mt-10 xl:justify-between md:justify-center xl:mt-10">
                <div className="col-span-3 bg-[#deebf8] p-3">
                  <div
                    className={`cursor-pointer font-bold ${openSectionbusiness === "businessTransform" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                    onClick={() => handleSubMenuClickBusiness("businessTransform")}
                  >
                    Business Transformation
                  </div>
                  {/* <div
                  className={`cursor-pointer mt-3 font-bold ${openSectionbusiness === "applicationServices" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                  onClick={() => handleSubMenuClickBusiness("applicationServices")}
                >
                  Application Services
                </div> */}

                  <div
                    className={`cursor-pointer mt-3 font-bold ${openSectionbusiness === "intelligentScm" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                    onClick={() => handleSubMenuClickBusiness("intelligentScm")}
                  >
                    LOB Services
                  </div>
                  <div
                    className={`cursor-pointer mt-3 font-bold ${openSectionbusiness === "spentMangemnet" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                    onClick={() => handleSubMenuClickBusiness("spentMangemnet")}
                  >
                    Spend Management
                  </div>
                  <div
                    className={`cursor-pointer mt-3 font-bold ${openSectionbusiness === "hxmTransformation" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                    onClick={() => handleSubMenuClickBusiness("hxmTransformation")}
                  >
                    HXM Transformation
                  </div>
                  <div
                    className={`cursor-pointer mt-3 font-bold ${openSectionbusiness === "data-ai" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                    onClick={() => handleSubMenuClickBusiness("data-ai")}
                  >
                    Data and AI
                  </div>
                </div>
                {openSectionbusiness === "businessTransform" && (
                  <div className="col-span-8 flex space-x-5"  >
                    <div>
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5">From Vision to Value — Transform Smarter, Grow Faster</div>
                        <p className="mt-3">From strategy to execution, we accelerate your transformation journey with AI-powered insights and industry-leading expertise, turning challenges into competitive advantages</p>
                        {/* <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button> */}
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4]" label="Grow with SAP" link="/services/business-transformation/grow-with-sap-services" onClick={(e) => handleLinkClick(e, "/services/business-transformation/grow-with-sap-services")} onHover={() => { }} />
                            {/* <MenuItem className="font-bold text-[#2f78c4]" label="For Grow with SAP" link="/grow-with-sap" onClick={handleLinkClick} onHover={() => { }} /> */}
                            <MenuItem className="font-bold text-[#2f78c4] mt-8" label="Oracle EBSPlus" link="/solutions/enterprise-platforms/oracle-ebs-consulting" onClick={(e) => handleLinkClick(e, "/solutions/enterprise-platforms/oracle-ebs-consulting")}
                              onHover={() => { }} />
                          </div>

                          <div>
                            {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="For  Rise with SAP" link="/rise-with-sap" onClick={handleLinkClick} onHover={() => { }} /> */}
                            <MenuItem className="font-bold text-[#2f78c4]" label="Rise with SAP" link="/services/business-transformation/rise-with-sap-services" onClick={(e) => handleLinkClick(e, "/services/business-transformation/rise-with-sap-services")}
                              onHover={() => { }} />
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
                        <div className="font-bold mt-5">Subtext - Smarter Data. Sharper Decisions. Stronger Outcomes.</div>
                        <p className="mt-3">Experience the future of consulting — powered by AI and insight-driven innovation.</p>
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4]" label="Salesforce Data Cloud" link="/solutions/data-ai/salesforce-data-cloud-consulting" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/salesforce-data-cloud-consulting")} onHover={() => { }} />
                            <MenuItem className="font-bold text-[#2f78c4] mt-8" label="Agentforce" link="/solutions/artificial-intelligence/salesforce-agentforce-consulting" onClick={(e) => handleLinkClick(e, "/solutions/artificial-intelligence/salesforce-agentforce-consulting")}
                              onHover={() => { }} />
                          </div>
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4]" label="SAP Datasphere" link="/solutions/data-ai/sap-datasphere-implementation-consulting" onClick={(e) => handleLinkClick(e, "/solutions/data-ai/sap-datasphere-implementation-consulting")}
                              onHover={() => { }} />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* {openSectionbusiness === "applicationServices" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">Your Partner for Resilient, Scalable, and Secure IT Operations</div>
                      <p className="mt-3">Simplify operations and maximize efficiency with our global managed services — delivering 24/7 support, proactive monitoring, and seamless scalability with onsite, nearshore and offshore teams.</p>
                      <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button>
                    </div>
                    <div className="mt-10">
                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="RunAgents+" link="/data-cloud" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="for Salesforce AMS" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="YARDI+" link="/" onClick={handleLinkClick} onHover={() => { }} />

                        </div>
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="ManageAgents+" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="for SAP AMS" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="For YARDI AMS" link="/" onClick={handleLinkClick} onHover={() => { }} />

                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              )} */}
                {openSectionbusiness === "lobServices" && (
                  <div className="col-span-8 flex space-x-5">
                    <div>
                      {/* <div className="border-b pb-5"> */}
                      {/* <div className="font-bold mt-5">Tailored Industry Solutions, Unmatched Results</div> */}
                      {/* <p className="mt-3">From healthcare to automotive, our industry-specific consulting services deliver actionable insights and innovative solutions that drive sustainable growth.</p> */}
                      {/* <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button> */}
                    </div>
                    <div className="mt-5">
                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          {/* <MenuItem className="font-bold text-[#2f78c4]" label="AutoSense" link="/services/lob/autosense-automotive-digital-transformation-services
" onClick={handleLinkClick} onHover={() => { }} /> */}

                          {/* <MenuItem className="font-bold text-[#2f78c4]" label="RunRialFinance+" link="/data-cloud" onClick={handleLinkClick} onHover={() => { }} /> */}
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Advantage+" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="RialEstate+" link="/industry/real-estate" onClick={handleLinkClick} onHover={() => { }} /> */}
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Empower+" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Retail+" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="LifeAI+" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Travel+" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="EduA+" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}
                        </div>
                        <div>

                          {/* <MenuItem className="font-bold text-[#2f78c4]" label="[ Financial ]" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="for marketing industry" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="for real estate industry" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="for automotive industry" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="for non profit industry" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="for Retail Industry" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="For life sciences industry" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="a TTH service" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="For Education Industry" link="/" onClick={handleLinkClick} onHover={() => { }} /> */}

                        </div>

                      </div>
                    </div>
                  </div>
                  // </div>
                )}
                {/* {openSectionbusiness === "intelligentScm" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">Transform Complexity into Competitive Advantage</div>
                      <p className="mt-3">Our end-to-end supply chain consulting services ensure visibility, agility, and operational excellence across your value chain</p>
                      <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button>
                    </div>
                    <div className="mt-10">
                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="Demand+" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        </div>
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="for Kinaxis Implementation" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )} */}
                {openSectionbusiness === "spentMangemnet" && (
                  <div className="col-span-8 flex space-x-5">
                    <div>
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5">Visibility. Control. Savings.</div>
                        <p className="mt-3">Our comprehensive spend management services deliver transparency and accountability, transforming how you manage business expenses.
                        </p>
                        {/* <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button> */}
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          {/* <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="SAPBuy+" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        </div> */}
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4]" label="SAPBuy+" link="/services/spend-management/sapbuyplus-ariba-implementation-partner" onClick={(e) => handleLinkClick(e, "/services/spend-management/sapbuyplus-ariba-implementation-partner")}
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
                        <div className="font-bold mt-5">Reduce operational costs and increase ROI For Every Line of Business</div>
                        <p className="mt-3">Whether it's modernizing legacy systems or streamlining operations, our LOB services are built to scale with your business.
                        </p>
                        {/* <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button> */}
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-10">
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4]" label="Retail+" link="/services/lob/retail-plus-business-consulting-omnichannel-solutions" onClick={(e) => handleLinkClick(e, "/services/lob/retail-plus-business-consulting-omnichannel-solutions")} onHover={() => { }} />
                          </div>
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4]" label="AutoSense" link="/services/lob/autosense-automotive-digital-transformation-services" onClick={(e) => handleLinkClick(e, "/services/lob/autosense-automotive-digital-transformation-services")}
                              onHover={() => { }} />
                          </div>
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4]" label="SAPBuy+" link="/services/spend-management/sapbuyplus-ariba-implementation-partner" onClick={(e) => handleLinkClick(e, "/services/spend-management/sapbuyplus-ariba-implementation-partner")}
                              onHover={() => { }} />
                          </div>
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4]" label="Life AI+" link="/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting" onClick={(e) => handleLinkClick(e, "/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting")}
                              onHover={() => { }} />
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
                        <div className="font-bold mt-5">Empower Your Workforce with Smarter HCM Solutions</div>
                        <p className="mt-3">From hire to retire, our Human Capital Management (HCM) services optimize talent management, boost productivity, and enhance employee experiences.</p>
                        {/* <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button> */}
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          {/* <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="Success+" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        </div> */}
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4]" label="SAP SuccessFactors" link="/services/hxm-transformation/successplus-successfactors-implementation-partner" onClick={(e) => handleLinkClick(e, "/services/hxm-transformation/successplus-successfactors-implementation-partner")}
                              onHover={() => { }} />
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
            <div onMouseEnter={() => handleMouseEnterCard(4)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-auto  pb-20 left-0 z-20 border-t-2 absolute">
              <div className="grid grid-cols-12 xl:pl-[280px]  w-full lg:gap-5 xl:gap-[22px] md:gap-5  lg:pl-[7.25rem] md:pl-[100px] md:mt-10 xl:mt-10">
                <div className="col-span-3 bg-[#deebf8] p-3">
                  <div
                    className={`cursor-pointer mt-3 font-bold ${openSection === "automotive" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                    onClick={() => handleSubMenuClick("automotive")}
                  >
                    Real Estate
                  </div>
                  {/* <div
                  className={`cursor-pointer mt-3 font-bold ${openSection === "education" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                  onClick={() => handleSubMenuClick("education")}
                >
                  Education
                </div> */}
                  <div
                    className={`cursor-pointer mt-3 font-bold ${openSection === "lifeSciences" ? "bg-white pl-3 pt-3 pb-3 " : "p-2"}`}
                    onClick={() => handleSubMenuClick("lifeSciences")}
                  >
                    Life Sciences
                  </div>
                  {/* <div
                  className={`cursor-pointer mt-3 font-bold ${openSection === "nonProfit" ? "bg-white pl-3 pt-3 pb-3 " : "p-2"}`}

                  onClick={() => handleSubMenuClick("nonProfit")}
                >
                  Non Profit
                </div> */}
                  {/* <div
                  className={`cursor-pointer mt-3 font-bold ${openSection === "retail" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}

                  onClick={() => handleSubMenuClick("retail")}
                >
                  Retail
                </div> */}
                  {/* <div
                  className={`cursor-pointer mt-3 font-bold ${openSection === "travelHospitality" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}

                  onClick={() => handleSubMenuClick("travelHospitality")}
                >
                  Travel and Hospitality
                </div> */}
                  {/* <div
                  className={`cursor-pointer mt-3 font-bold ${openSection === "finance" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}

                  onClick={() => handleSubMenuClick("finance")}
                >
                  Finance
                </div> */}
                  <div
                    className={`cursor-pointer mt-3 font-bold ${openSection === "hiTech" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                    onClick={() => handleSubMenuClick("hiTech")}
                  >
                    Hi-Tech
                  </div>
                  <div
                    className={`cursor-pointer mt-3 font-bold ${openSection === "manufacturing" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                    onClick={() => handleSubMenuClick("manufacturing")}
                  >
                    Manufacturing
                  </div>
                  <div
                    className={`cursor-pointer mt-3 font-bold ${openSection === "education" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                    onClick={() => handleSubMenuClick("education")}
                  >
                    Education
                  </div>
                  <div
                    className={`cursor-pointer mt-3 font-bold ${openSection === "autoinstry" ? "bg-white pl-3 pt-3 pb-3" : "p-2"}`}
                    onClick={() => handleSubMenuClick("autoinstry")}
                  >
                    Automotive
                  </div>

                </div>
                {openSection === "automotive" && (
                  <div className="col-span-8 flex space-x-5"  >
                    <div className="flex-1">
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5"> From the Factory Floor to the Driver's Seat — Smarter Automotive Solutions</div>
                        <div className="mt-3">Transforming production, sales, and service experiences through AI, IoT, and data-driven strategies</div>
                        <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                          <Link href='/industry/real-estate-property-management' onClick={(e) => handleLinkClick(e, "/industry/real-estate-property-management")}
                          >Let's Begin</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {openSection === "lifeSciences" && (
                  <div className="col-span-8 flex space-x-5">
                    <div className="flex-1">
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5"> Shaping the Future of Healthcare and Life Sciences with Digital Innovation</div>
                        <p className="mt-3">Empowering life sciences companies to improve patient outcomes and operationalexcellence through next-gen technology</p>
                        {/* <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button> */}
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          {/* <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="Medical Devices" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        </div> */}
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4] " label="Healthcare" link="/industry/life-sciences/healthcare-medtech-patient-care" onClick={(e) => handleLinkClick(e, "/industry/life-sciences/healthcare-medtech-patient-care")}
                              onHover={() => { }} />
                          </div>
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4] " label="Pharma and Biotech" link="/industry/life-sciences/pharma-biotech-digital-transformation" onClick={(e) => handleLinkClick(e, "/industry/life-sciences/pharma-biotech-digital-transformation/")}
                              onHover={() => { }} />
                          </div>
                        </div>
                        {/* <div className="mt-6">
                        <MenuItem className="font-bold text-[#2f78c4]" label="Pharma and Bio" link="/" onClick={handleLinkClick} onHover={() => { }} />
                      </div> */}
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Medical Devices" link="/industry/life-sciences/medical-devices-it-solutions" onClick={(e) => handleLinkClick(e, "/industry/life-sciences/medical-devices-it-solutions")}
                            onHover={() => { }} />
                        </div>
                      </div>
                    </div>
                  </div>

                )}
                {/* {openSection === "nonProfit" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5"> Accelerating Mission Impact — Enterprise Transformation for Non-Profits</div>
                      <p className="mt-3">Strategic consulting for global non-profits to drive donor engagement, operational agility,and community outcomes with confidence</p>
                      <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )} */}
                {/* {openSection === "retail" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5"> Elevate Retail — Engage Customers, Optimize Operations, Drive Growth</div>
                      <p className="mt-3">End-to-end consulting solutions to help retail enterprises thrive in a digital, customer-firstworld</p>
                      <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )} */}
                {/* {openSection === "travelHospitality" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">From Check-In to Check-Out — Reinventing Hospitality with Innovation</div>
                      <p className="mt-3">Helping leading hospitality brands deliver seamless, connected, and memorable guest experiences at every touch point</p>
                      <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )} */}
                {/* {openSection === "finance" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5"> Powering Finance — From Risk to Revenue with Intelligent Solutions</div>
                      <p className="mt-3">Enabling large banks and financial firms to optimize risk, unlock new revenue streams, andmeet evolving regulatory demands with AI and automation</p>
                      <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/' onClick={handleLinkClick}>Let's Begin</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )} */}
                {openSection === "hiTech" && (
                  <div className="col-span-8 flex space-x-5">
                    <div className="flex-1">
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5">Semiconductor Industry 4.0 — Powering Next-Gen Chips with Next-Gen Solutions</div>
                        <p className="mt-3">Reimagining semiconductor operations with intelligent automation, data-driven insights,and global supply chain resilience for large enterprises</p>
                        <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                          <Link href='/industry/hitech-semiconductor' onClick={(e) => handleLinkClick(e, "/industry/hitech-semiconductor")}
                          >Let's Begin</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {openSection === "autoinstry" && (
                  <div className="col-span-8 flex space-x-5">
                    <div className="flex-1">
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5">Breakdowns to Breakthroughs: We're There for Your Automotive Service Journeys</div>
                        <p className="mt-3">We empower OEMs and dealerships with efficient case management and smart warranty administration to resolve issues quickly, manage complex vehicle lifecycles, and build customer trust.</p>
                        <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                          <Link href='/industry/automotive-industry-cloud-solutions' onClick={(e) => handleLinkClick(e, "/industry/automotive-industry-cloud-solutions")}
                          >Let's Begin</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {openSection === "manufacturing" && (
                  <div className="col-span-8 flex space-x-5">
                    <div className="flex-1">
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5">Powering Smart, Seamless Manufacturing with Mobility and Efficiency</div>
                        <p className="mt-3">Making Manufacturing Smarter — AI, Automation, and Actionable Insights</p>
                        <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                          <Link href='/industry/manufacturing-cloud-erp' onClick={(e) => handleLinkClick(e, "/industry/manufacturing-cloud-erp")}
                          >Let's Begin</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {openSection === "education" && (
                  <div className="col-span-8 flex space-x-5">
                    <div className="flex-1">
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5">Driving Education with Student-Centric Solutions</div>
                        <p className="mt-3">Igniting the future of learning, unlocking potential, powering progress—technology for tomorrow’s education.</p>
                        <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                          <Link href='/industry/connected-education' onClick={(e) => handleLinkClick(e, "/industry/connected-education")}
                          >Let's Begin</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* about us Card */}
          {activeCard === 5 && (
            <div onMouseEnter={() => handleMouseEnterCard(5)} onMouseLeave={handleMouseLeaveCard} className="transition-all pb-20 duration-300 ease-in-out bg-white shadow-lg w-full h-auto left-0 z-20 border-t-2 absolute">
              <div className="grid grid-cols-12 gap-3 xl:pl-[280px] lg:pl-[7.25rem] md:pl-[100px] md:mt-10 xl:mt-10">
                <div className="col-span-3  p-3">

                  <div className="bg-[#deebf8] p-3">
                    <div
                      className="cursor-pointer font-bold bg-white pl-3 pt-3 pb-3"
                    >
                      About Rialtes: Innovating with Impact
                    </div>
                  </div>
                  {/* <p className="mt-10 border-b-[2px] pb-5 border-black">
                  At <strong className="font-bold">Rialtes</strong>, we’re more than a consulting company — we’re a force for positive change. Our commitment to <strong className="font-bold">innovation</strong>,  <strong className="font-bold">sustainability</strong>, and  <strong className="font-bold">inclusion</strong> drives everything we do. From empowering businesses through AI and digital transformation to supporting communities and the environment, we believe in making a lasting impact.

                </p>
                <div className="mt-5 border-b-[2px] pb-5 border-black">
                  <h4>🌿 Leading with Thought Leadership</h4>
                  <p className="mt-3">Innovation starts with knowledge. At Rialtes, we lead the conversation with actionable insights and future-ready strategies. Our experts collaborate with industry leaders like <strong className="font-bold">SAP</strong>  and <strong className="font-bold">Salesforce</strong>  to solve complex challenges, sharing our knowledge through <strong className="font-bold">blogs</strong> , <strong className="font-bold">white papers</strong>, and <strong className="font-bold">case studies</strong> . With a finger on the pulse of emerging technology, we guide businesses toward smarter decisions.
                  </p>
                </div>
                <div className="mt-5 border-b-[2px] pb-5 border-black">
                  <h4>🌎 Sustainability for a Greener Future</h4>
                  <p className="mt-3">A commitment to sustainability is at the heart of Rialtes. As proud members of <strong className="font-bold">1t.org</strong> , we contribute to the growth of <strong className="font-bold">1 trillion trees</strong>  to combat climate change. Our solutions promote eco-friendly operations by helping organizations track and reduce their carbon footprint through data-driven insights. Every partnership is an opportunity to drive responsible business practices for a sustainable tomorrow.

                  </p>
                </div>

                <div className="mt-5">
                  <h4>🤝 Diversity, Equity, and Inclusion (DEI)</h4>
                  <p className="mt-3">We believe diversity fuels innovation. Rialtes fosters an inclusive workplace where <strong className="font-bold">women in tech</strong>  thrive, <strong className="font-bold">veterans</strong>  are celebrated, and every individual’s perspective is valued. Through mentorship programs, leadership opportunities, and a supportive culture, we ensure all voices are heard. Our dedication to <strong className="font-bold">DEI</strong>  shapes both our internal culture and our client solutions, creating lasting social impact.
                  </p>
                </div> */}
                </div>
                <div className="col-span-8 flex space-x-5"  >
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">Beyond Business: A Commitment to Change</div>
                      <p className="mt-3">Rialtes is more than a technology leader — we are advocates for positive change. From sustainability initiatives to empowering underrepresented voices, we’re dedicated to making a meaningful impact</p>
                      <button className="text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/about-us' onClick={(e) => handleLinkClick(e, "/about-us")}>Let's Begin</Link>
                      </button>
                    </div>
                    <div className="mt-5">
                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="Culture and Values" link="/about-us/our-values" onClick={(e) => handleLinkClick(e, "/about-us/our-values")} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Partnership" link="/about-us/global-alliences" onClick={(e) => handleLinkClick(e, "/about-us/global-alliences")}
                            onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="News and Press Releases" link="/insights/news" onClick={(e) => handleLinkClick(e, "/insights/news")} onHover={() => { }} />
                        </div>
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label=" Corporate Citizenship" link="/about-us/impact-and-social-responsibility" onClick={(e) => handleLinkClick(e, "/about-us/impact-and-social-responsibility")} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label=" Contact Us" link="/contact-us" onClick={(e) => handleLinkClick(e, "/contact-us")}
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
          )}

          {activeCard === 6 && (
            <div onMouseEnter={() => handleMouseEnterCard(6)} onMouseLeave={handleMouseLeaveCard} className="transition-all pb-20 duration-300 ease-in-out bg-white shadow-lg w-full h-auto left-0 z-20 border-t-2 absolute">
              <div className="grid grid-cols-12 gap-3 xl:pl-[280px] lg:pl-[7.25rem] md:pl-[100px] md:mt-10 xl:mt-10">
                <div className="col-span-3">
                  <div className="bg-[#deebf8] p-3">
                    <div
                      className="cursor-pointer font-bold bg-white pl-3 pt-3 pb-3"
                    >
                      Insights
                    </div>
                  </div>
                </div>
                <div className="col-span-8 flex space-x-5"  >
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">Explore Our Insights: Blogs, Case Studies, and Thought Leadership</div>
                      <p className="mt-3">Stay ahead of the curve with expert perspectives, success stories, and the latest innovations in AI.</p>
                      <button className=" text-[#134874] border-[1px] border-[solid] border-[#134874] py-2 px-6 mt-4">
                        <Link href='/insights' onClick={(e) => handleLinkClick(e, "/insights")}
                        >Let's Begin</Link>
                      </button>
                    </div>
                    <div className="mt-5">
                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="Blogs" link="/insights/blogs" onClick={(e) => handleLinkClick(e, "/insights/blogs")}
                            onHover={() => { }} />
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-10" label="News" link="/insights/news" onClick={(e) => handleLinkClick(e, "/insights/news")}
                            onHover={() => { }} /> */}
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Webinars" link="/insights/webinars" onClick={handleLinkClick} onHover={() => { }} /> */}
                          <div>
                            <MenuItem className="font-bold text-[#2f78c4] mt-10" label="Webinars" link="/insights/webinars" onClick={(e) => handleLinkClick(e, "/insights/webinars")}
                              onHover={() => { }} />
                            {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Events" link="/events" onClick={handleLinkClick} onHover={() => { }} /> */}
                          </div>
                        </div>
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="Case Studies" link="/insights/case-studies" onClick={(e) => handleLinkClick(e, "/insights/case-studies")}
                            onHover={() => { }} />
                          {/* <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Events" link="/events" onClick={handleLinkClick} onHover={() => { }} /> */}
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

      {/* ///mobile menu */}
      <div>
        <div className="xl:hidden md:block  flex justify-between items-center px-[35px] py-3" id="mobile-menu">
          <Link href='/'>
            <Image
              loading="lazy"
              className="cursor-pointer"
              alt="Company Logo"
              lang="Company Logo2"
              height='150'
              width='100'
              src='/images/homepage/logo.svg'
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
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transform transition-transform duration-300 xl:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="bg-white w-full h-full p-4">
            <div className="flex justify-between items-center px-4" onClick={toggleMenu}>
              <div>
                <svg
                  className="w-6 h-6 text-gray-800"
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
              </div>
              <div>
                <Image
                  loading="lazy"
                  className="cursor-pointer"
                  href='/'
                  alt="Company Logo"
                  lang="Company Logo2"
                  height='150'
                  width='100'
                  src='/images/homepage/logo.svg'
                />
              </div>
            </div>

            <nav className="mt-5 border-t-2 p-3">
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
                <Link onClick={toggleMenu} href='/contact-us'>

                  <h4 className="text-sm mt-3">Contact Us</h4>

                </Link>

                <button onClick={toggleMenu} className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                  <Link href='/contact-us'>Let's Begin</Link>
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>

  )
}
export default Header