"use client";
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react";


const MenuItem = ({ label, link, onHover, className, onClick }) => {



  return (
    <Link href={link}>
      <div onClick={onClick} onMouseEnter={onHover} className={`cursor-pointer xl:pt-0 hover:text-[#0092E1] ${className}`}>
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
  const [openSection, setOpenSection] = useState(null);




  const handleSubMenuClick = (section) => {
    setOpenSection(section);
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

  const handleLinkClick = () => {
    setActiveCard(null);  // Close the card
  };




  const menuItems = [
    {
      label: 'About Us',
      links: [
        { label: 'Leadership', href: '/leadership' },
        { label: 'Partners', href: '/partners' },
        { label: 'Career', href: '/career' },

      ],
    },
    {
      label: 'Products',
      links: [
        { label: 'RialChat', href: '/product/rialchat' },
        {
          label: 'Exelona',
          subLinks: [
            { label: 'Experience Cloud', href: '/' },
            { label: 'Property Cloud', href: '/' },
          ],
        },
        { label: 'MediAina', href: '/' },
      ],
    },
    {
      label: 'Services',
      links: [
        { label: 'Artificial Intelligence', href: '/' },
        {
          label: 'Salesforce', href: '/salesforce-consulting',
          subLinks: [
            { label: 'Digital Desk', href: '/' },
            { label: 'Health Cloud', href: '/salesforce-consulting/health-cloud' },
            { label: 'Agentforce', href: '/salesforce-consulting/agentforce' },
            { label: 'Data Cloud', href: '/data-cloud' },
            { label: 'Implementation', href: '/' },
            { label: 'Managed Services', href: '/services/managed-services' },
            { label: 'Mulesoft', href: '/mulesoft-integration' },
            { label: 'Revenue Cloud', href: '/salesforce-consulting/revenue-cloud' },
          ],
        },
        {
          label: 'SAP', href: '/sap',
          subLinks: [
            { label: 'RISE with SAP', href: '/rise-with-sap' },
            { label: 'GROW with SAP', href: '/grow-with-sap' },
            { label: 'Successfactor', href: '/success-factors' },
            { label: 'Application Development', href: '/' },
            { label: 'SAP Integration', href: '/sap/sap-integration' },
            { label: 'SAP ARIBA', href: '/sap/sap-ariba' },
            { label: 'SAP BTP', href: '/sap/sap-btp' },
          ],
        },
        { label: 'Yardi', href: '/' },
        {
          label: 'Data Analytics',
          subLinks: [
            { label: 'Power BI', href: '/' },
            { label: 'QLIK Sense', href: '/' },
            { label: 'ALTERYX', href: '/' },
          ],
        },
        { label: 'Cloud Migration', href: '/' },
        { label: 'Testing', href: '/' },
        { label: 'Integration', href: '/' },
      ],
    },
    {
      label: 'Industry',
      links: [
        { label: 'Healthcare', href: '/healthcare' },
        { label: 'Real Estate', href: '/industry/real-estate' },
        { label: 'Manufacturing', href: '/industry/manufacturing' },
        { label: 'Finance', href: '/' },
        { label: 'Hi-Tech', href: '/industry/hi-tech' },
        { label: 'Public Sector', href: '/' },
      ],
    },
    {
      label: 'Contact Us',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Webinar', href: '/webinar' },
        { label: 'Events', href: '/events' },
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
              <div key={idx} className="border-b-[2px] pb-2 pt-2">
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => toggleSubAccordion(link.label)} // Toggle sub-menu for the link
                      className="w-full text-left flex justify-between items-center"
                    >
                      <h4 className={`text-sm ${expandedSub ? 'text-[#0092E0]' : ''}`}>{link.label}</h4>
                      <span>
                        {expandedSub === link.label ?
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                            <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                            <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        }
                      </span>
                    </button>
                    {expandedSub === link.label && (
                      <div className="pt-2 text-gray-600">
                        {link.subLinks.map((subLink, subIdx) => (
                          <div key={subIdx} className="border-b-[2px] pb-2 pt-2">
                            <Link
                              href={subLink.href}
                              onClick={onMenuItemClick}
                            >
                              <h5 className="text-sm">{subLink.label}</h5>
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} onClick={onMenuItemClick} className="text-[#505050] hover:text-[#05B1FD] cursor-pointer">
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
    <section className="fixed w-full bg-white top-0 z-50 shadow-md lg:pr-0 md:pr-36">
      {/* <div className="hidden relative xl:pb-3 bg-white mt-auto mx-auto xl:gap-5  md:gap-2 pt-5  xl:pl-[260px] md:pl-[85px] top-0 z-50 items-center right-0 left-0 xl:grid lg:grid md:grid grid-cols-12"></div> */}

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
            className={`xl:font-bold font-normal  ${activeMenu === 1 ? 'text-[#0092E0]' : ''}`}
          />
          <MenuItem
            label="Products"
            link="/"
            onHover={() => handleMouseEnterCard(2)}
            onClick={() => handleMenuClick(2)}
            className={`xl:font-bold font-normal  ${activeMenu === 6 ? 'text-[#0092E0]' : '6'}`}
          />
          <MenuItem
            label="Services"
            link="/services"
            onHover={() => handleMouseEnterCard(3)}
            onClick={() => handleMenuClick(3)}
            className={`xl:font-bold font-normal ${activeMenu === 2 ? 'text-[#0092E0]' : ''}`}
          />
          <MenuItem
            label="Industries"
            link="/industry"
            onHover={() => handleMouseEnterCard(4)}
            onClick={() => handleMenuClick(4)}
            className={`xl:font-bold font-normal  ${activeMenu === 3 ? 'text-[#0092E0]' : ''}`}
          />
          <MenuItem
            label="About Us"
            link="/about-us"
            onHover={() => handleMouseEnterCard(5)}
            onClick={() => handleMenuClick(5)}
            className={`xl:font-bold font-normal  ${activeMenu === 1 ? 'text-[#0092E0]' : ''}`}
          />
          <MenuItem
            label="Insights"
            link="/insights"
            onHover={() => handleMouseEnterCard(6)}
            onClick={() => handleMenuClick(6)}
            className={`xl:font-bold font-normal ${activeMenu === 4 ? 'text-[#0092E0]' : ''}`}
          />
          <MenuItem
            label="Contact Us"
            link="/contact-us"
            className={`xl:font-bold font-normal ${activeMenu === 5 ? 'text-[#0092E0]' : ''}`}
          />
          <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
            <Link href='/'>Let's Begin</Link>
          </button>
        </div>
      </div>

      {/* Cards for each menu item */}
      <div>
        {/* solutions Card */}
        {activeCard === 1 && (
          <div className="transition-all duration-300 ease-in-out bg-white w-full h-auto pb-8 left-0 z-30 border-t-2 absolute" >
            <div className="grid grid-cols-12 xl:pl-[280px]  gap-3 md:mt-10 xl:mt-10 md:pl-[100px]">
              <div className="col-span-3 bg-[#deebf8] p-3 relative">
                {/* Data & AI Section */}
                <div
                  className={`cursor-pointer ${openSection === "dataAI" ? "bg-white p-5 left-0 right-0 top-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("dataAI")}
                >
                  Data & AI
                </div>

                {/* Enterprise Platform Consulting Section */}
                <div
                  className={`cursor-pointer mt-5 ${openSection === "enterprise" ? "bg-white pr-5 pl-3 pt-5 pb-5  left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("enterprise")}
                >
                  Enterprise Platforms
                </div>

                {/* Integration Section */}
                <div
                  className={`cursor-pointer mt-5 ${openSection === "integration" ? "bg-white pl-3 pt-5 pb-5  left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("integration")}
                >
                  Integration
                </div>

                {/* Cloud Migration Section */}
                <div
                  className={`cursor-pointer mt-5 ${openSection === "cloudeMigration" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("cloudeMigration")}
                >
                  Cloud Migration
                </div>

                {/* Artificial Intelligence Section */}
                <div
                  className={`cursor-pointer mt-5 ${openSection === "artificialIntelligence" ? "bg-white pl-3 pt-5 pb-5  left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("artificialIntelligence")}
                >
                  Artificial Intelligence
                </div>

                {/* Quality Engineering & Assurance Section */}
                <div
                  className={`cursor-pointer mt-5 ${openSection === "qualityEnAss" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("qualityEnAss")}
                >
                  Quality Engineering & Assurance
                </div>

                {/* AI Automation Section */}
                <div
                  className={`cursor-pointer mt-5 ${openSection === "aiAutomation" ? "bg-white pl-3 pt-5 pb-5  left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("aiAutomation")}
                >
                  AI Automation
                </div>
              </div>

              {openSection === "dataAI" && (
                <div className="col-span-8 flex space-x-5"  >
                  <div className=" p-5">
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">From Data to Decisions — Smarter, Faster, Better with AI</div>
                      <p className="mt-3">Turn raw data into real-time intelligence that drives efficiency, innovation, and growth</p>
                    </div>

                    <div className="mt-10">
                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="Salesforce Data Cloud" link="/data-cloud" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Tableau" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="PowerBI" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        </div>
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="Snowflake" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Qlik" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              )}

              {openSection === "enterprise" && (
                <div className="col-span-6 flex space-x-5">

                  <div>
                    <div>
                      <div className="border-b pb-5">
                        <div className="font-bold mt-5">Transform. Automate. Lead — The Power of Intelligent Enterprise</div>
                        <p className="mt-3">Achieve operational excellence and customer-centric growth with scalable, intelligent enterprise platforms.</p>
                      </div>
                      <div className="mt-5">
                        <div className="grid grid-cols-2 gap-32">
                          <div>
                            <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="SAP" link="/sap" onHover={() => { }} onClick={handleLinkClick} />
                            <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="Salesforce" link="/salesforce-consulting" onHover={() => { }} onClick={handleLinkClick} />
                            <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="YARDI" link="/" onHover={() => { }} />
                            <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="SAP ARIBA" link="/sap/sap-ariba" onHover={() => { }}  onClick={handleLinkClick} />
                            <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Revenue Cloud" link="/salesforce-consulting/revenue-cloud" onClick={handleLinkClick} onHover={() => { }} />

                          </div>
                          <div>
                            <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="Agentforce" link="/salesforce-consulting/agentforce" onClick={handleLinkClick} onHover={() => { }} />
                            <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="SAP Successfactors" link="/success-factors" onClick={handleLinkClick} onHover={() => { }} />
                            <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="Oracle EBS" link="/" onClick={handleLinkClick} onHover={() => { }} />
                            <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="Kinaxis RapidResponse" link="/" onHover={() => { }} onClick={handleLinkClick} />

                          </div>

                          <div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>


                </div>

              )}


              {openSection === "integration" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">Smarter Connections. Faster Growth. Intelligent Integration Services</div>
                      <p className="mt-3">Future-ready integration strategies that align business goals with seamless technology execution</p>
                    </div>
                    <div className="mt-5">
                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="Mulesoft" link="/mulesoft-integration" onHover={() => { }} onClick={handleLinkClick} />
                          <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="SAP CPI" link="/" onHover={() => { }} onClick={handleLinkClick} />
                        </div>
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="Workato" link="/" onClick={handleLinkClick} onHover={() => { }} />

                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              )}
              {openSection === "cloudeMigration" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">Transform Legacy Systems with Expert Cloud Migration</div>
                      <p className="mt-3">Move beyond outdated infrastructure and embrace the future with secure, optimized cloud environments</p>
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
              )}
              {openSection === "artificialIntelligence" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">Make AI Your Competitive Advantage</div>
                      <p className="mt-3">Empowering businesses to solve complex problems, automate workflows, and deliver real-time insights with AI.</p>
                    </div>
                    <div className="mt-5">

                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="RialBot" link="/" onHover={() => { }} onClick={handleLinkClick} />
                          <MenuItem className="font-bold pb-3 mt-6 text-[#2f78c4]" label="Microsoft Co-Pilot" link="/" onHover={() => { }} onClick={handleLinkClick} />
                        </div>
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="Agentforce" link="/salesforce-consulting/agentforce" onClick={handleLinkClick} onHover={() => { }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {openSection === "qualityEnAss" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">Quality Engineering and Assurance (QE & QA) services</div>
                      <p className="mt-3">Ensuring Every Digital Experience is Exceptional</p>
                      <p>Delivering quality-first outcomes with AI, automation, and deep domain expertise.</p>
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
              )}
              {openSection === "aiAutomation" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">Agility Meets Efficiency with Next-Gen Process Automation</div>
                      <p className="mt-3">Integrating AI, RPA, and analytics to drive seamless, intelligent, and high-performing business processes.</p>
                    </div>
                    <div className="mt-5">
                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="Automation Anywhere" link="/" onHover={() => { }} onClick={handleLinkClick} />
                          <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="Agentforce" link="/salesforce-consulting/agentforce" onHover={() => { }} onClick={handleLinkClick} />
                        </div>
                        <div>
                          <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="UIPath" link="/" onHover={() => { }} onClick={handleLinkClick} />
                          <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="Alteryx" link="/" onHover={() => { }} onClick={handleLinkClick} />
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
              <div className="col-span-3 bg-[#deebf8] p-3">
                <div
                  className={`cursor-pointer ${openSection === "rialchat" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("rialchat")}
                >
                  RialChat
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "exelona" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("exelona")}
                >
                  Exelona
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "mediAIna" ? "bg-blue-200" : ""}`}

                  onClick={() => handleSubMenuClick("mediAIna")}
                >
                  MediAIna
                </div>
              </div>
              {openSection === "rialchat" && (
                <div className="col-span-8 flex space-x-5"  >
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold"> Rialchat</div>
                      <div>Rialchat Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="Rialchat" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>Rialchat Info</p>

                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>

                </div>
              )}

              {openSection === "exelona" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold"> Exelona</div>
                      <div>Exelona Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="Exelona" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>Exelona Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "mediAIna" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold"> MediAIna</div>
                      <div>MediAIna Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="MediAIna" link="/product/mediyina" onClick={handleLinkClick} onHover={() => { }} />
                          <p>MediAIna Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Services Card */}
        {activeCard === 3 && (
          <div onMouseEnter={() => handleMouseEnterCard(3)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-auto pb-20  left-0 z-20 border-t-2 absolute">
            <div className="grid grid-cols-12 xl:pl-[280px] gap-5 xl:w-full lg:pl-[7.25rem] md:gap-5  lg:gap-5 md:pl-[100px] md:pr-2 md:mt-10 xl:justify-between md:justify-center xl:mt-10">
              <div className="col-span-3 bg-[#deebf8] p-3">
                <div
                  className={`cursor-pointer ${openSection === "rialFinance" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("rialFinance")}
                >
                  RialFinance+
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "advantage" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("advantage")}
                >
                  Advantage+
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "sAPBuy" ? "bg-blue-200" : ""}`}

                  onClick={() => handleSubMenuClick("sAPBuy")}
                >
                  SAPBuy+
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "rialEstate" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("rialEstate")}
                >
                  RialEstate+
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "autoSense" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("autoSense")}
                >
                  AutoSense
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "empower" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("empower")}
                >
                  Empower+
                </div>

                <div
                  className={`cursor-pointer mt-5 ${openSection === "runAgents" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("runAgents")}
                >
                  RunAgents+
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "manageAgents" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("manageAgents")}
                >
                  ManageAgents+
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "success" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("success")}
                >
                  Success+
                </div> <div
                  className={`cursor-pointer mt-5 ${openSection === "voyagerNext" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("voyagerNext")}
                >
                  VoyagerNext+
                </div> <div
                  className={`cursor-pointer mt-5 ${openSection === "voyager" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("voyager")}
                >
                  Voyager+
                </div> <div
                  className={`cursor-pointer mt-5 ${openSection === "retail" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("retail")}
                >
                  Retail+
                </div> <div
                  className={`cursor-pointer mt-5 ${openSection === "lifeAI" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("lifeAI")}
                >
                  LifeAI+
                </div> <div
                  className={`cursor-pointer mt-5 ${openSection === "travel" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("travel")}
                >
                  Travel+
                </div> <div
                  className={`cursor-pointer mt-5 ${openSection === "demand+" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("demand")}
                >
                  Demand+
                </div> <div
                  className={`cursor-pointer mt-5 ${openSection === "eduA" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("eduA")}
                >
                  EduA+
                </div>
              </div>
              {openSection === "rialFinance" && (
                <div className="col-span-8 flex space-x-5"  >
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold"> [ Financial ]</div>
                      <div>[ Financial ] Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex">
                        <div>
                          <MenuItem className="font-bold" label="Financial" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>Financial Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}

              {openSection === "advantage" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold"> Advantage</div>
                      <div>Advantage Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="Advantage" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>Advantage Info</p>
                        </div>
                      </div>
                    </div>


                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "sAPBuy" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold"> SAPBuy</div>
                      <div>SAPBuy Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="SAPBuy" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>SAPBuy Info</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "rialEstate" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">RialEstate</div>
                      <div>RialEstate Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="RialEstate" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>RialEstate Info</p>
                        </div>
                      </div>
                    </div>


                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "autoSense" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">AutoSense</div>
                      <div>AutoSense Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="AutoSense" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>AutoSense Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "empower" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Empower</div>
                      <div>Empower Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="Empower" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>Empower Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "runAgents" && (

                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">RunAgents</div>
                      <div>RunAgents Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="RunAgents" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>RunAgents Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>

                </div>
              )}
              {openSection === "manageAgents" && (

                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">ManageAgents</div>
                      <div>ManageAgents Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="ManageAgents" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>ManageAgents Info</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "success" && (

                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Success</div>
                      <div>Success Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="Success" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>Success Info</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "voyagerNext" && (

                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">VoyagerNext</div>
                      <div>VoyagerNext Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="VoyagerNext" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>VoyagerNext Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>

                </div>
              )}
              {openSection === "voyager" && (

                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Voyager</div>
                      <div>Voyager Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="Voyager" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>Voyager Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>

                </div>
              )}
              {openSection === "retail" && (

                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Retail</div>
                      <div>Retail Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="Retail" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>Retail Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>

                </div>
              )}
              {openSection === "lifeAI" && (

                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">LifeAI</div>
                      <div>LifeAI Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="LifeAI" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>LifeAI Info</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "travel" && (

                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Travel</div>
                      <div>Travel Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="Travel" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>Travel Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "demand" && (

                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Demand</div>
                      <div>Demand Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="Demand" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>Demand Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "eduA" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">EduA</div>
                      <div>eduA Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="EduA" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>EduA Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
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
                  className={`cursor-pointer ${openSection === "automotive" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("automotive")}
                >
                  Automotive
                </div>
                <div
                  className={`cursor-pointer  mt-5 ${openSection === "education" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("education")}
                >
                  Education
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "lifeSciences" ? "bg-blue-200" : ""}`}

                  onClick={() => handleSubMenuClick("lifeSciences")}
                >
                  Life Sciences
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "nonProfit" ? "bg-blue-200" : ""}`}

                  onClick={() => handleSubMenuClick("nonProfit")}
                >
                  Non Profit
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "retail" ? "bg-blue-200" : ""}`}

                  onClick={() => handleSubMenuClick("retail")}
                >
                  Retail
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "travelHospitality" ? "bg-blue-200" : ""}`}

                  onClick={() => handleSubMenuClick("travelHospitality")}
                >
                  Travel and Hospitality
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "finance" ? "bg-blue-200" : ""}`}

                  onClick={() => handleSubMenuClick("finance")}
                >
                  Finance
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "hiTech" ? "bg-white" : ""}`}

                  onClick={() => handleSubMenuClick("hiTech")}
                >
                  Hi-Tech
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "manufacturing" ? "bg-blue-200" : ""}`}

                  onClick={() => handleSubMenuClick("manufacturing")}
                >
                  Manufacturing
                </div>
              </div>
              {openSection === "automotive" && (
                <div className="col-span-8 flex space-x-5"  >
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold text-xl"> Automotive</div>
                      <div className="mt-3">Leverage the capabilities of the Bolt in-app design, specifically tailored for the automotive industry, and accelerate your growth today!</div>
                      <div>Accelerate to Growth today!</div>
                      <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                        <Link href='/'>Let's Begin</Link>
                      </button>
                    </div>


                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}

              {openSection === "education" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold"> Education</div>
                      <div>Education Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="Education" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <p>Education Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "lifeSciences" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold"> LifeSciences</div>
                      <div className="mt-3">Transform clinical trials and prior authorization with AI and data from enterprise soures</div>
                      <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                        <Link href='/'>Let's Begin</Link>
                      </button>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="Medical Devices" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        </div>
                        <div>
                          <MenuItem className="font-bold" label="Healthcare" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        </div>


                      </div>

                      <div className="mt-5">
                        <MenuItem className="font-bold" label="Pharma and Bio" link="/" onClick={handleLinkClick} onHover={() => { }} />

                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>

              )}
              {openSection === "nonProfit" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold"> Non Profit</div>
                      <div>Non Profit Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="MediAIna" link="/product/mediyina" onClick={handleLinkClick} onHover={() => { }} />
                          <p>MediAIna Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "retail" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold"> Retail</div>
                    </div>
                  </div>
                </div>
              )}
              {openSection === "travelHospitality" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold"> Travel and Hospitality</div>
                    </div>
                  </div>
                </div>
              )}
              {openSection === "finance" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold"> Finance</div>
                    </div>
                  </div>
                </div>
              )}
              {openSection === "hiTech" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold"> Hi-Tech</div>
                    </div>
                  </div>
                </div>
              )}
              {openSection === "manufacturing" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Manufacturing</div>
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
              <div className="col-span-3 bg-[#deebf8] p-3">
                <div
                  className={`cursor-pointer ${openSection === "leadership" ? "bg-blue-200 p-5" : ""}`}
                  onClick={() => handleSubMenuClick("leadership")}
                >
                  Leadership
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "cultureValues" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("cultureValues")}
                >
                  Culture and Values
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "partnership" ? "bg-blue-200" : ""}`}

                  onClick={() => handleSubMenuClick("partnership")}
                >
                  Partnership
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "sponsorships" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("sponsorships")}
                >
                  Sponsorships
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "corporateCitizenship" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("corporateCitizenship")}
                >
                  Corporate Citizenship
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "Newspressreleases" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("Newspressreleases")}
                >
                  News and press releases
                </div>

                <div
                  className={`cursor-pointer mt-5 ${openSection === "contactus" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("contactus")}
                >
                  Contact Us
                </div>

              </div>
              {openSection === "leadership" && (
                <div className="col-span-8 flex space-x-5"  >
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold"> Leadership</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="Leadership" link="/leadership" onClick={handleLinkClick} onHover={() => { }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}

              {openSection === "cultureValues" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Culture and Values</div>
                      <div>Culture and Values Info</div>
                    </div>
                    <div className="mt-5">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold pb-3" label="Culture and Values" link="/" onHover={() => { }} />
                          <p>Culture and Values Info</p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "partnership" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Partnership</div>
                      <div>Partnership Info</div>
                    </div>
                    <div className="mt-5">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold pb-3" label="Partnership" link="/" onHover={() => { }} />
                          <p>Partnership Info</p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "sponsorships" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Sponsorships</div>
                      <div>Sponsorships Info</div>
                    </div>
                    <div className="mt-5">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold pb-3" label="Sponsorships" link="/" onHover={() => { }} />
                          <p>Sponsorships Info</p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "corporateCitizenship" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Corporate Citizenship</div>
                      <div>Corporate Citizenship Info</div>
                    </div>
                    <div className="mt-5">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold pb-3" label="Corporate Citizenship" link="/" onHover={() => { }} />
                          <p>Corporate Citizenship Info</p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "Newspressreleases" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">News and Press releases</div>
                      <div>News and Press releases Info</div>
                    </div>
                    <div className="mt-5">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold pb-3" label="News and Press releases" link="/" onHover={() => { }} />
                          <p>News and Press releases Info</p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "contactus" && (

                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Contact us</div>
                      <div>Contact us Info</div>
                    </div>
                    <div className="mt-5">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold pb-3" label="Contact us" link="/contact-us" onHover={() => { }} />
                          <p>Contact us Info</p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeCard === 6 && (
          <div onMouseEnter={() => handleMouseEnterCard(6)} onMouseLeave={handleMouseLeaveCard} className="transition-all pb-20 duration-300 ease-in-out bg-white shadow-lg w-full h-auto left-0 z-20 border-t-2 absolute">
            <div className="grid grid-cols-12 gap-3 xl:pl-[280px] lg:pl-[7.25rem] md:pl-[100px] md:mt-10 xl:mt-10">
              <div className="col-span-3 bg-[#deebf8] p-3">
                <div
                  className={`cursor-pointer ${openSection === "blogs" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("blogs")}
                >
                  Blogs
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "webinars" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("webinars")}
                >
                  Webinars
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "caseStudies" ? "bg-blue-200" : ""}`}

                  onClick={() => handleSubMenuClick("caseStudies")}
                >
                  Case Studies
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "events" ? "bg-blue-200" : ""}`}
                  onClick={() => handleSubMenuClick("events")}
                >
                  Events
                </div>
              </div>
              {openSection === "blogs" && (
                <div className="col-span-8 flex space-x-5"  >
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Blogs</div>
                      <div>Blogs Info</div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold" label="Blogs" link="/blog" onClick={handleLinkClick} onHover={() => { }} />
                          <p>Blogs Info</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}

              {openSection === "webinars" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Webinars</div>
                      <div>Webinars Info</div>
                    </div>
                    <div className="mt-5">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold pb-3" label="Webinars" link="/webinar" onHover={() => { }} />
                          <p>Webinars Info</p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "caseStudies" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Case Studies</div>
                      <div>Case Studies Info</div>
                    </div>
                    <div className="mt-5">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold pb-3" label="Case Studies" link="/case-studies" onHover={() => { }} />
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
              {openSection === "events" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold">Events</div>
                      <div>Events Info</div>
                    </div>
                    <div className="mt-5">
                      <div className="flex justify-between">
                        <div>
                          <MenuItem className="font-bold pb-3" label="Events" link="/events" onHover={() => { }} />
                          <p>Events Info</p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Webinar Header"
                      className="w-full h-full"
                      width='0'
                      height='0'
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ///mobile menu */}
      <div>
        <div className="xl:hidden md:hidden flex justify-between items-center px-4">
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
          <button onClick={toggleMenu} className="p-4">
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
                <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                  <Link href='/'>Let's Begin</Link>
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