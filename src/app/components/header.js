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





  const menuItems = [
    {
      label: 'About Us',
      links: [
        { label: 'Leadership', href: '/leadership' },
        { label: 'Partners', href: '/partners' },
      ],
    },
    {
      label: 'Products',
      links: [
        { label: 'RialChat', href: '/' },
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
        { label: 'Artificial Intelligence', href: '/partners' },
        {
          label: 'Salesforce',
          subLinks: [
            { label: 'Digital Desk', href: '/partner-1' },
            { label: 'Health Cloud', href: '/salesforce-consulting/health-cloud' },
            { label: 'Agentforce', href: '/salesforce-consulting/agentforce' },
            { label: 'Data Cloud', href: '/data-cloud' },
            { label: 'Implementation', href: '/partner-2' },
            { label: 'Managed Services', href: '/services/managed-services' },
          ],
        },
        {
          label: 'SAP',
          subLinks: [
            { label: 'RISE with SAP', href: '/rise-with-sap' },
            { label: 'GROW with SAP', href: '/grow-with-sap' },
            { label: 'Successfactor', href: '/success-factors' },
            { label: 'Application Development', href: '/partner-2' },
            { label: 'SAP Integration', href: '/partner-2' },
            { label: 'SAP ARIBA', href: '/partner-2' },
            { label: 'SAP BTP', href: '/partner-2' },
          ],
        },
        { label: 'Yardi', href: '/partners' },
        {
          label: 'Data Analytics',
          subLinks: [
            { label: 'Power BI', href: '/partner-2' },
            { label: 'QLIK Sense', href: '/partner-2' },
            { label: 'ALTERYX', href: '/partner-2' },
          ],
        },
        { label: 'Cloud Migration', href: '/partners' },
        { label: 'Quality Management (Testing)', href: '/partners' },
        { label: 'Integration', href: '/partners' },
      ],
    },
    {
      label: 'Industry',
      links: [
        { label: 'Healthcare', href: '/leadership' },
        { label: 'Real Estate', href: '/partners' },
        { label: 'Manufacturing', href: '/partners' },
        { label: 'Finance', href: '/partners' },
        { label: 'Hi-Tech', href: '/partners' },
        { label: 'Public Sector', href: '/partners' },
      ],
    },
    {
      label: 'Contact Us',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Webinar', href: '/webinar' },
        { label: 'Events', href: '/partners' },
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
            label="About Us"
            link="/about-us"
            onHover={() => handleMouseEnterCard(1)}
            onClick={() => handleMenuClick(1)}
            className={`xl:font-bold font-normal  ${activeMenu === 1 ? 'text-[#0092E0]' : ''}`}
          />
          <MenuItem
            label="Products"
            link="/"
            onHover={() => handleMouseEnterCard(6)}
            onClick={() => handleMenuClick(6)}
            className={`xl:font-bold font-normal  ${activeMenu === 6 ? 'text-[#0092E0]' : '6'}`}
          />
          <MenuItem
            label="Services"
            link="/services"
            onHover={() => handleMouseEnterCard(2)}
            onClick={() => handleMenuClick(2)}
            className={`xl:font-bold font-normal ${activeMenu === 2 ? 'text-[#0092E0]' : ''}`}
          />
          <MenuItem
            label="Industries"
            link="/industry"
            onHover={() => handleMouseEnterCard(3)}
            onClick={() => handleMenuClick(3)}
            className={`xl:font-bold font-normal  ${activeMenu === 3 ? 'text-[#0092E0]' : ''}`}
          />
          <MenuItem
            label="Insights"
            link="/insights"
            onHover={() => handleMouseEnterCard(4)}
            onClick={() => handleMenuClick(4)}
            className={`xl:font-bold font-normal ${activeMenu === 4 ? 'text-[#0092E0]' : ''}`}
          />
          <MenuItem
            label="Contact Us"
            link="/contact-us"
            className={`xl:font-bold font-normal ${activeMenu === 5 ? 'text-[#0092E0]' : ''}`}
          />
          <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white lg:py-3 py-2 lg:px-8 px-4 transition duration-300 order-4">
            <Link href=''>Let's Begin</Link>
          </button>
        </div>
      </div>

      {/* Cards for each menu item */}
      <div className="relative" ref={cardRef}>
        {/* About Us Card */}
        {activeCard === 1 && (
          <div onClick={() => setActiveCard(null)} onMouseEnter={() => handleMouseEnterCard(1)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white w-full h-auto pb-8 left-0 z-30 border-t-2 absolute">
            <div className="grid grid-cols-12 xl:pl-[280px]  gap-3 md:mt-10 xl:mt-10 md:pl-[100px]">
              <div className="col-span-4 border-r-2">
                <h3 className="md:text-sm xl:text-2xl xl:w-[70%]">
                  Your Trusted Partner for Innovation and Digital Transformation
                </h3>
                <Link href='/about-us'>
                  <h6 className="mt-3">More About Rialtes →</h6>
                </Link>
              </div>
              <div className="col-span-8">
                <MenuItem className='font-bold pb-3' label="Leadership" link="/leadership" onHover={() => { }} />
                <MenuItem className='font-bold' label="Partners" link="/partners" onHover={() => { }} />
              </div>
            </div>
          </div>
        )}

        {/* Products Card */}
        {activeCard === 6 && (
          <div onClick={() => setActiveCard(null)} onMouseEnter={() => handleMouseEnterCard(6)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-auto pb-8  left-0 z-20 border-t-2 absolute">
            <div className="grid grid-cols-12 xl:pl-[280px] gap-5 xl:w-full lg:pl-[7.25rem] md:gap-5  lg:gap-5 md:pl-[100px] md:pr-2 md:mt-10 xl:justify-between md:justify-center xl:mt-10">
              <div className="col-span-4 border-r-2">
                <h3 className="md:text-sm xl:text-2xl xl:w-[70%]">
                  Comprehensive Solutions to Transform Experiences and Shape your Digital Future

                </h3>
                <Link href='/services'>
                  <h6 className="mt-3">More About Products →</h6>
                </Link>
              </div>
              <div className="col-span-8  grid grid-cols-3">
                <div>
                  <div>
                  <MenuItem
                      className="font-bold cursor-pointer pb-3"
                      label="RialChat"
                      link="/"
                    />
                    <MenuItem
                      className="font-bold cursor-pointer"
                      label="Exelona"
                      link="/"
                    />
                    <div className="mt-2">
                      <MenuItem label="Experience Cloud" className='pb-3' link="/" onHover={() => { }} />
                      <MenuItem label="Property Cloud" className='pb-3' link="/" onHover={() => { }} />
                    </div>
                  </div>

                  <MenuItem label="MediAina" className='font-bold pb-3' link="/" onHover={() => { }} />

                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Card */}
        {activeCard === 2 && (
          <div onClick={() => setActiveCard(null)} onMouseEnter={() => handleMouseEnterCard(2)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-auto pb-8  left-0 z-20 border-t-2 absolute">
            <div className="grid grid-cols-12 xl:pl-[280px] gap-5 xl:w-full lg:pl-[7.25rem] md:gap-5  lg:gap-5 md:pl-[100px] md:pr-2 md:mt-10 xl:justify-between md:justify-center xl:mt-10">
              <div className="col-span-4 border-r-2">
                <h3 className="md:text-sm xl:text-2xl xl:w-[70%]">
                  Comprehensive Solutions to Transform Experiences and Shape your Digital Future

                </h3>
                <Link href='/services'>
                  <h6 className="mt-3">More About Services →</h6>
                </Link>
              </div>
              <div className="col-span-8  grid grid-cols-3">
                <div>
                  <div>
                    <MenuItem
                      className="font-bold cursor-pointer"
                      label="Salesforce"
                      link="/"
                    />
                    <div className="mt-2">
                      <MenuItem label="Agentforce" className='pb-3' link="/salesforce-consulting/agentforce" onHover={() => { }} />
                      <MenuItem label="Data Cloud" className='pb-3' link="/data-cloud" onHover={() => { }} />
                      <MenuItem label="Health Cloud" className='pb-3' link="/salesforce-consulting/health-cloud" onHover={() => { }} />
                      <MenuItem label="Implementation" className='pb-3' link="/services/implementation" onHover={() => { }} />
                      <MenuItem label="Managed Services" className='pb-3' link="/services/managed-services" onHover={() => { }} />
                      <MenuItem label="MuleSoft" className='pb-3' link="/services/managed-services" onHover={() => { }} />
                      <MenuItem label="Revenue Cloud" className='pb-3' link="/services/managed-services" onHover={() => { }} />
                    </div>
                  </div>

                  <MenuItem label="Yardi" className='font-bold pb-3' link="/services/data-analytics" onHover={() => { }} />
                  <MenuItem label="Cloud Migration" className='font-bold pb-3' link="/services/data-analytics" onHover={() => { }} />
                  <MenuItem label="Integration" className='font-bold pb-3' link="/services/data-analytics" onHover={() => { }} />

                </div>
                <div>
                  <div>
                    <MenuItem
                      className="font-bold cursor-pointer"
                      label="SAP"
                      link="/"
                    />
                    <div className="mt-2">
                      <MenuItem label="Application Development" className='pb-3' link="/services/implementation" onHover={() => { }} />
                      <MenuItem label="GROW with SAP" className='pb-3' link="/grow-with-sap" onHover={() => { }} />
                      <MenuItem label="RISE with SAP" className='pb-3' link="/rise-with-sap" onHover={() => { }} />
                      <MenuItem label="SAP ARIBA" className='pb-3' link="/services/managed-services" onHover={() => { }} />
                      <MenuItem label="SAP BTP" className='pb-3' link="/services/yardi" onHover={() => { }} />
                      <MenuItem label="SAP GTS" className='pb-3' link="/services/yardi" onHover={() => { }} />
                      <MenuItem label="SAP Integration" className='pb-3' link="/services/yardi" onHover={() => { }} />
                      <MenuItem label="Successfactor" className='pb-3' link="/success-factors" onHover={() => { }} />
                    </div>


                  </div>


                  <div>
                    <MenuItem
                      className="font-bold cursor-pointer pb-3"
                      label="Testing"
                      link="/"
                    />
                    <MenuItem label="Tosca" className='pb-3' link="/" onHover={() => { }} />
                  </div>
                </div>
                <div>



                  <div>
                    <MenuItem
                      className="font-bold cursor-pointer pb-3"
                      label="Data Analytics"
                      link="/"
                    />
                    <MenuItem label="Alterys" className='pb-3' link="/" onHover={() => { }} />
                    <MenuItem label="Power BI" className='pb-3' link="/data-cloud" onHover={() => { }} />
                    <MenuItem label="Quik Sense" className='pb-3' link="/salesforce-consulting/health-cloud" onHover={() => { }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Industries Card */}
        {activeCard === 3 && (
          <div onClick={() => setActiveCard(null)} onMouseEnter={() => handleMouseEnterCard(3)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-auto  pb-8 left-0 z-20 border-t-2 absolute">
            <div className="grid grid-cols-12 xl:pl-[280px]  w-full lg:gap-5 xl:gap-[22px] md:gap-5  lg:pl-[7.25rem] md:pl-[100px] md:mt-10 xl:mt-10">
              <div className="col-span-4 border-r-2">
                <h3 className="md:text-sm xl:text-2xl xl:w-[70%]">
                  Precision solutions, custom-crafted for Across Diverse Sectors
                </h3>
                <Link href='/industry'>
                  <h6 className="mt-3">More About Industry →</h6>
                </Link>
              </div>
              <div className="col-span-8">
                <div>
                  <MenuItem className='font-bold pb-3' label="Healthcare" link="/services/ai" onHover={() => { }} />
                  <MenuItem className='font-bold pb-3' label="Real Estate" link="/services/salesforce" onHover={() => { }} />
                  <MenuItem className='font-bold pb-3' label="Manufacturing" link="/services/digital-desk" onHover={() => { }} />
                  <MenuItem className='font-bold pb-3' label="Finance" link="/services/health-cloud" onHover={() => { }} />
                  <MenuItem className='font-bold pb-3' label="Hi-Tech" link="/services/agentforce" onHover={() => { }} />
                  <MenuItem className='font-bold pb-3' label="Public Sector" link="/services/data-cloud" onHover={() => { }} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Insights Card */}
        {activeCard === 4 && (
          <div onClick={() => setActiveCard(null)} onMouseEnter={() => handleMouseEnterCard(4)} onMouseLeave={handleMouseLeaveCard} className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-[230px] left-0 z-20 border-t-2 absolute">
            <div className="grid grid-cols-12 gap-3 xl:pl-[280px] lg:pl-[7.25rem] md:pl-[100px] md:mt-10 xl:mt-10">
              <div className="col-span-4 border-r-2 h-auto">
                <h3 className="md:text-sm xl:text-2xl xl:w-[70%]">
                  Unlocking Knowledge to Drive Smarter Decisions
                </h3>
                <Link href='/insights'>
                  <h6 className="mt-3">More About Insights →</h6>

                </Link>
              </div>
              <div className="col-span-4">
                <MenuItem className='font-bold pb-3' label="Blog" link="/blog" onHover={() => { }} />
                <MenuItem className='font-bold pb-3' label="Case Studies" link="/case-study" onHover={() => { }} />
                <MenuItem className='font-bold pb-3' label="Webinar" link="webinar" onHover={() => { }} />
                <MenuItem className='font-bold pb-3' label="Events" link="/industries/finance" onHover={() => { }} />
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
            {/* Hamburger Icon or Close Icon */}
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
                  <Link href=''>Let's Begin</Link>
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