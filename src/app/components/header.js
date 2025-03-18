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
                  Process Automation
                </div>
              </div>

              {openSection === "dataAI" && (
                <div className="col-span-8 flex space-x-5"  >
                  <div>
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
                            <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="SAP ARIBA" link="/sap/sap-ariba" onHover={() => { }} onClick={handleLinkClick} />
                            <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Revenue Cloud" link="/salesforce-consulting/revenue-cloud" onClick={handleLinkClick} onHover={() => { }} />

                          </div>
                          <div>
                            <MenuItem className="font-bold pb-3 text-[#2f78c4]" label="Agentforce" link="/salesforce-consulting/agentforce" onClick={handleLinkClick} onHover={() => { }} />
                            <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="SAP Successfactors" link="/success-factors" onClick={handleLinkClick} onHover={() => { }} />
                            <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="Oracle EBS" link="/" onClick={handleLinkClick} onHover={() => { }} />
                            <MenuItem className="font-bold pb-3 text-[#2f78c4] mt-6" label="Kinaxis RapidResponse" link="/" onHover={() => { }} onClick={handleLinkClick} />

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
                  className={`cursor-pointer mt-5 ${openSection === "rialchat" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("rialchat")}
                >
                  RialChat
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "exelona" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("exelona")}
                >
                  Exelona
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "mediAIna" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}

                  onClick={() => handleSubMenuClick("mediAIna")}
                >
                  MediAIna
                </div>
              </div>
              {openSection === "rialchat" && (
                <div className="col-span-8 flex space-x-5"  >
                   <div>
                  <div className="border-b pb-5">
                    <div className="font-bold mt-5"></div>
                    <p className="mt-3"></p>
                    <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                      <Link href='/product/rialchat'>Let's Begin</Link>
                    </button>
                  </div>
                </div>

                </div>
              )}

              {openSection === "exelona" && (
                <div className="col-span-8 flex space-x-5">
                 <div>
                  <div className="border-b pb-5">
                    <div className="font-bold mt-5"></div>
                    <p className="mt-3"></p>
                    <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                      <Link href='/'>Let's Begin</Link>
                    </button>
                  </div>
                </div>
                </div>
              )}
              {openSection === "mediAIna" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                  <div className="border-b pb-5">
                    <div className="font-bold mt-5"></div>
                    <p className="mt-3"></p>
                    <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                      <Link href='/product/mediyina'>Let's Begin</Link>
                    </button>
                  </div>
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
                  className={`cursor-pointer mt-5 ${openSection === "businessTransform" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("businessTransform")}
                >
                  Business Transformation
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "applicationServices" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("applicationServices")}
                >
                  Application Services
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "lobServices" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("lobServices")}
                >
                  LOB Services
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "intelligentScm" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("intelligentScm")}
                >
                  Intelligent SCM
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "spentMangemnet" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("spentMangemnet")}
                >
                  Spent Management
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "hxmTransformation" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("hxmTransformation")}
                >
                  HXM Transformation
                </div>
              </div>
              {openSection === "businessTransform" && (
                <div className="col-span-8 flex space-x-5"  >
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5"></div>
                      <p className="mt-3"></p>
                    </div>
                    <div className="mt-10">
                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="VoyagerNext" link="/data-cloud" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Voyager+" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        </div>
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="For Grow with SAP" link="/grow-with-sap" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="for  Rise with SAP" link="/rise-with-sap" onClick={handleLinkClick} onHover={() => { }} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {openSection === "applicationServices" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5"></div>
                      <p className="mt-3"></p>
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
              )}
              {openSection === "lobServices" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5"></div>
                      <p className="mt-3"></p>
                    </div>
                    <div className="mt-10">
                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="RunRialFinance+" link="/data-cloud" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Advantage+" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="RialEstate+" link="/industry/real-estate" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="AutoSense" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Empower+" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Retail+" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="LifeAI+" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Travel+" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="EduA+" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        </div>
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="[ Financial ]" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="for marketing industry" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="for real estate industry" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="for automotive industry" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="for non profit industry" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="for Retail Industry" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="For life sciences industry" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="a TTH service" link="/" onClick={handleLinkClick} onHover={() => { }} />
                          <MenuItem className="font-bold text-[#2f78c4] mt-6" label="For Education Industry" link="/" onClick={handleLinkClick} onHover={() => { }} />

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              )}
              {openSection === "intelligentScm" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5"></div>
                      <p className="mt-3"></p>
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
              )}
              {openSection === "spentMangemnet" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5"></div>
                      <p className="mt-3"></p>
                    </div>
                    <div className="mt-10">
                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="SAPBuy+" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        </div>
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="for ARIBA Implementation" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {openSection === "hxmTransformation" && (
                <div className="col-span-8 flex space-x-5">
                  <div>
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5"></div>
                      <p className="mt-3"></p>
                    </div>
                    <div className="mt-10">
                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="Success+" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        </div>
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="for SuccessFactor Implementation" link="/" onClick={handleLinkClick} onHover={() => { }} />
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
                  className={`cursor-pointer mt-5 ${openSection === "automotive" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("automotive")}
                >
                  Automotive
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "education" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}
                  onClick={() => handleSubMenuClick("education")}
                >
                  Education
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "lifeSciences" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}

                  onClick={() => handleSubMenuClick("lifeSciences")}
                >
                  Life Sciences
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "nonProfit" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}

                  onClick={() => handleSubMenuClick("nonProfit")}
                >
                  Non Profit
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "retail" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}

                  onClick={() => handleSubMenuClick("retail")}
                >
                  Retail
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "travelHospitality" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}

                  onClick={() => handleSubMenuClick("travelHospitality")}
                >
                  Travel and Hospitality
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "finance" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}

                  onClick={() => handleSubMenuClick("finance")}
                >
                  Finance
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "hiTech" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}

                  onClick={() => handleSubMenuClick("hiTech")}
                >
                  Hi-Tech
                </div>
                <div
                  className={`cursor-pointer mt-5 ${openSection === "manufacturing" ? "bg-white pl-3 pt-5 pb-5 left-0 right-0" : "p-3"}`}

                  onClick={() => handleSubMenuClick("manufacturing")}
                >
                  Manufacturing
                </div>
              </div>
              {openSection === "automotive" && (
                <div className="col-span-8 flex space-x-5"  >
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5"> From the Factory Floor to the Driver's Seat — Smarter Automotive Solutions</div>
                      <div className="mt-3">Transforming production, sales, and service experiences through AI, IoT, and data-driven strategies</div>
                      <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                        <Link href='/'>Let's Begin</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {openSection === "education" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5"> Smarter Campuses. Engaged Students. Seamless Administration</div>
                      <p className="mt-3">Helping educational institutions innovate and thrive with integrated, intelligent technology solutions</p>
                      <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                        <Link href='/'>Let's Begin</Link>
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
                      <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                        <Link href='/'>Let's Begin</Link>
                      </button>
                    </div>
                    <div className="mt-10">
                      <div className="grid grid-cols-2 gap-32">
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="Medical Devices" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        </div>
                        <div>
                          <MenuItem className="font-bold text-[#2f78c4]" label="Healthcare" link="/healthcare" onClick={handleLinkClick} onHover={() => { }} />
                        </div>
                      </div>
                      <div className="mt-6">
                        <MenuItem className="font-bold text-[#2f78c4]" label="Pharma and Bio" link="/" onClick={handleLinkClick} onHover={() => { }} />
                      </div>
                    </div>
                  </div>
                </div>

              )}
              {openSection === "nonProfit" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5"> Accelerating Mission Impact — Enterprise Transformation for Non-Profits</div>
                      <p className="mt-3">Strategic consulting for global non-profits to drive donor engagement, operational agility,and community outcomes with confidence</p>
                      <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                        <Link href='/'>Let's Begin</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {openSection === "retail" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5"> Elevate Retail — Engage Customers, Optimize Operations, Drive Growth</div>
                      <p className="mt-3">End-to-end consulting solutions to help retail enterprises thrive in a digital, customer-firstworld</p>
                      <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                        <Link href='/'>Let's Begin</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {openSection === "travelHospitality" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">From Check-In to Check-Out — Reinventing Hospitality with Innovation</div>
                      <p className="mt-3">Helping leading hospitality brands deliver seamless, connected, and memorable guest experiences at every touch point</p>
                      <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                        <Link href='/'>Let's Begin</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {openSection === "finance" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5"> Powering Finance — From Risk to Revenue with Intelligent Solutions</div>
                      <p className="mt-3">Enabling large banks and financial firms to optimize risk, unlock new revenue streams, andmeet evolving regulatory demands with AI and automation</p>
                      <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                        <Link href='/'>Let's Begin</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {openSection === "hiTech" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">Semiconductor Industry 4.0 — Powering Next-Gen Chips with Next-Gen Solutions</div>
                      <p className="mt-3">Reimagining semiconductor operations with intelligent automation, data-driven insights,and global supply chain resilience for large enterprises</p>
                      <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                        <Link href='/industry/hi-tech'>Let's Begin</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {openSection === "manufacturing" && (
                <div className="col-span-8 flex space-x-5">
                  <div className="flex-1">
                    <div className="border-b pb-5">
                      <div className="font-bold mt-5">Manufacturing</div>
                      <p className="mt-3">Making Manufacturing Smarter — AI, Automation, and Actionable Insights</p>
                      <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                        <Link href='/industry/manufacturing'>Let's Begin</Link>
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
              <div className="col-span-3 bg-[#deebf8] p-3">
              </div>
              <div className="col-span-8 flex space-x-5"  >
                <div>
                  <div className="border-b pb-5">
                    <div className="font-bold mt-5"></div>
                    <p className="mt-3"></p>
                    <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                      <Link href='/about-us'>Let's Begin</Link>
                    </button>
                  </div>
                  <div className="mt-10">
                    <div className="grid grid-cols-2 gap-32">
                      <div>
                        <MenuItem className="font-bold text-[#2f78c4]" label="Leadership" link="/leadership" onClick={handleLinkClick} onHover={() => { }} />
                        <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Culture and Values" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Partnership" link="/partners" onClick={handleLinkClick} onHover={() => { }} />
                        <MenuItem className="font-bold text-[#2f78c4] mt-6" label=" Contact Us" link="/contact-us" onClick={handleLinkClick} onHover={() => { }} />
                      </div>
                      <div>
                        <MenuItem className="font-bold text-[#2f78c4]" label="Sponsorships" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        <MenuItem className="font-bold text-[#2f78c4] mt-6" label=" Corporate Citizenship" link="/" onClick={handleLinkClick} onHover={() => { }} />
                        <MenuItem className="font-bold text-[#2f78c4] mt-6" label="News and press releases" link="/" onClick={handleLinkClick} onHover={() => { }} />
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
              <div className="col-span-3 bg-[#deebf8] p-3">
               
              </div>
             
                <div className="col-span-8 flex space-x-5"  >
                <div>
                  <div className="border-b pb-5">
                    <div className="font-bold mt-5"></div>
                    <p className="mt-3"></p>
                    <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-6 transition duration-300 order-4 mt-4">
                      <Link href='/'>Let's Begin</Link>
                    </button>
                  </div>
                  <div className="mt-10">
                    <div className="grid grid-cols-2 gap-32">
                      <div>
                        <MenuItem className="font-bold text-[#2f78c4]" label="Blogs" link="/blog" onClick={handleLinkClick} onHover={() => { }} />
                        <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Webinars" link="/webinar" onClick={handleLinkClick} onHover={() => { }} />
                      </div>
                      <div>
                        <MenuItem className="font-bold text-[#2f78c4]" label="Case Studies" link="/case-study" onClick={handleLinkClick} onHover={() => { }} />
                        <MenuItem className="font-bold text-[#2f78c4] mt-6" label="Events" link="/events" onClick={handleLinkClick} onHover={() => { }} />
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