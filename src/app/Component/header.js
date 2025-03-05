"use client";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";


const MenuItem = ({ label, link, onHover, className, onClick }) => {
  return (
    <Link href={link}>
      <div onClick={onClick} onMouseEnter={onHover} className={`cursor-pointer  xl:pb-3 md:pb-3 xl:pt-0 hover:text-[#0092E1] ${className}`}>
        {label}
      </div>
    </Link>
  );
};


const Header = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSub, setExpandedSub] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleMenuClick = (menuIndex) => {
    setActiveMenu(menuIndex);
  };

  const toggleSubAccordion = (label) => {
    setExpandedSub(expandedSub === label ? null : label);
  };


  const handleCardHover = (cardNumber) => {
    setActiveCard(cardNumber);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    if (currentScrollY < lastScrollY) {
      setActiveCard(null);
    }
    setLastScrollY(currentScrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const menuItems = [
    {
      label: 'About Us',
      links: [
        { label: 'Leadership', href: '/leadership' },
        { label: 'Partners', href: '/partners' },
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
            { label: 'Health Cloud', href: '/partner-2' },
            { label: 'Agentforce', href: '/partner-2' },
            { label: 'Data Cloud', href: '/partner-2' },
            { label: 'Implementation', href: '/partner-2' },
            { label: 'Managed Services', href: '/partner-2' },
          ],
        },
        {
          label: 'SAP',
          subLinks: [
            { label: 'RISE with SAP', href: '/partner-2' },
            { label: 'GROW with SAP', href: '/partner-2' },
            { label: 'Successfactor', href: '/partner-2' },
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
        { label: 'Blog', href: '/leadership' },
        { label: 'Case Studies', href: '/partners' },
        { label: 'Webinar', href: '/partners' },
        { label: 'Events', href: '/partners' },
      ],
    },
  ];


  const Accordion = ({ label, links, expanded, onToggle, toggleSubAccordion, expandedSub }) => {
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
                            >
                              <h5 className="text-sm">{subLink.label}</h5>
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} className="text-[#505050] hover:text-[#05B1FD] cursor-pointer">
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

      <div className="hidden bg-white mt-auto mx-auto xl:gap-5  md:gap-2 pt-5  xl:pl-[260px] md:pl-[85px] top-0 z-50 items-center right-0 left-0 xl:grid lg:grid md:grid grid-cols-12">
        <div className="col-span-4">
          <Link href="/" passHref>
            <Image
              className="z-[999] cursor-pointer w-[200px] object-cover"
              alt="Company logo"
              width={0}
              height={0}
              sizes="100vw"
              src="/images/homepage/logo.png"
            />
          </Link>
        </div>


        <div className="col-span-8 flex gap-5">
          <MenuItem
            label="About Us"
            link="/"
            onHover={() => handleCardHover(1)}
            onClick={() => handleMenuClick(1)}
            className={`font-bold md:font-normal ${activeMenu === 1 ? 'text-blue-500' : ''}`}
          />
          <MenuItem
            label="Services"
            link="/services"
            onHover={() => handleCardHover(2)}
            onClick={() => handleMenuClick(2)}
            className={`font-bold md:font-normal ${activeMenu === 2 ? 'text-blue-500' : ''}`}
          />
          <MenuItem
            label="Industries"
            link="/"
            onHover={() => handleCardHover(3)}
            onClick={() => handleMenuClick(3)}
            className={`font-bold md:font-normal ${activeMenu === 3 ? 'text-blue-500' : ''}`}
          />
          <MenuItem
            label="Insights"
            link="/"
            onHover={() => handleCardHover(4)}
            onClick={() => handleMenuClick(4)}
            className={`font-bold md:font-normal ${activeMenu === 4 ? 'text-blue-500' : ''}`}
          />
          <MenuItem
            label="Contact Us"
            link="/contact-us"
            onHover={() => handleCardHover(5)}
            onClick={() => handleMenuClick(5)}
            className={`font-bold md:font-normal ${activeMenu === 5 ? 'text-blue-500' : ''}`}
          />
        </div>
      </div>

      {/* Cards for each menu item */}
      <div>
        {/* About Us Card */}
        {activeCard === 1 && !isScrolled && (
          <div className="transition-all duration-300 ease-in-out bg-white w-full h-auto pb-3 left-0 z-30 border-t-2">
            <div className="grid grid-cols-12 xl:pl-[280px]  gap-3 md:mt-10 xl:mt-10 md:pl-[100px]">
              <div className="col-span-4 border-r-2">
                <h3 className="md:text-sm xl:text-2xl">
                  We Help Those Who Build The Future To Make It Amazing.
                </h3>
                <h6 className="mt-3">More About Rialtes →</h6>
              </div>
              <div className="col-span-8">
                <MenuItem className='font-bold' label="Leadership" link="/leadership" onHover={() => { }} />
                <MenuItem className='font-bold' label="Partners" link="/partners" onHover={() => { }} />
              </div>
            </div>
          </div>
        )}

        {/* Services Card */}
        {activeCard === 2 && !isScrolled && (
          <div className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-auto  left-0 z-20 border-t-2">
            <div className="grid grid-cols-12 xl:pl-[280px] xl:w-full lg:pl-[7.25rem] md:gap-5  lg:gap-5 md:pl-[100px] md:pr-2 md:mt-10 xl:justify-between md:justify-center xl:mt-10">
              <div className="col-span-4 border-r-2">
                <h3 className="md:text-sm xl:text-2xl">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                </h3>
                <h6 className="mt-3">More About Realforce →</h6>
              </div>
              <div className="col-span-8">
                <div className="flex md:gap-2 lg:gap-16">
                  <div>
                    <MenuItem className='font-bold' label="Artificial Intelligence" link="/services/ai" onHover={() => { }} />
                    <MenuItem className='font-bold' label="Salesforce" link="/services/salesforce" onHover={() => { }} />
                    <MenuItem label="Digital Desk" link="/services/digital-desk" onHover={() => { }} />
                    <MenuItem label="Health Cloud" link="/services/health-cloud" onHover={() => { }} />
                    <MenuItem label="Agentforce" link="/services/agentforce" onHover={() => { }} />
                    <MenuItem label="Data Cloud" link="/services/data-cloud" onHover={() => { }} />
                    <MenuItem label="Implementation" link="/services/implementation" onHover={() => { }} />
                    <MenuItem label="Managed Services" link="/services/managed-services" onHover={() => { }} />
                  </div>
                  <div>
                    <MenuItem className='font-bold' label="SAP" link="/services/sap" onHover={() => { }} />
                    <MenuItem  label="RISE with SAP" link="/rise-with-sap" onHover={() => { }} />
                    <MenuItem label="GROW with SAP" link="/grow-with-sap" onHover={() => { }} />
                    <MenuItem label="Successfactor" link="/success-factors" onHover={() => { }} />
                    <MenuItem  label="Application Development" link="/services/implementation" onHover={() => { }} />
                    <MenuItem label="SAP ARIBA" link="/services/managed-services" onHover={() => { }} />
                    <MenuItem label="SAP BTP" link="/services/yardi" onHover={() => { }} />

                    <MenuItem className='font-bold' label="Yardi" link="/services/sap" onHover={() => { }} />
                    <MenuItem className='font-bold' label="Data Analytics" link="/services/sap" onHover={() => { }} />

                    <MenuItem label="Power BI" link="/services/data-analytics" onHover={() => { }} />
                    <MenuItem label="QLIK Sense" link="/services/cloud-migration" onHover={() => { }} />
                    <MenuItem label="ALTERYX" link="/services/testing" onHover={() => { }} />


                    <MenuItem className='font-bold' label="Cloud Migration" link="/services/sap" onHover={() => { }} />
                    <MenuItem className='font-bold' label="Quality Management (Testing)" link="/services/sap" onHover={() => { }} />
                    <MenuItem className='font-bold' label="Integration" link="/services/sap" onHover={() => { }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Industries Card */}
        {activeCard === 3 && !isScrolled && (
          <div className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-auto  left-0 z-20 border-t-2">
            <div className="grid grid-cols-12 xl:pl-[280px]  w-full lg:gap-5 xl:gap-[22px] md:gap-5  lg:pl-[7.25rem] md:pl-[100px] md:mt-10 xl:mt-10">
              <div className="col-span-4 border-r-2">
                <h3 className="md:text-sm xl:text-2xl">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                </h3>
                <h6 className="mt-3">More About Service →</h6>
              </div>
              <div className="col-span-8">
                <div>
                  <MenuItem className='font-bold' label="Healthcare" link="/services/ai" onHover={() => { }} />
                  <MenuItem className='font-bold' label="Real Estate" link="/services/salesforce" onHover={() => { }} />
                  <MenuItem className='font-bold' label="Manufacturing" link="/services/digital-desk" onHover={() => { }} />
                  <MenuItem className='font-bold' label="Finance" link="/services/health-cloud" onHover={() => { }} />
                  <MenuItem className='font-bold' label="Hi-Tech" link="/services/agentforce" onHover={() => { }} />
                  <MenuItem className='font-bold' label="Public Sector" link="/services/data-cloud" onHover={() => { }} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Insights Card */}
        {activeCard === 4 && !isScrolled && (
          <div className="transition-all duration-300 ease-in-out bg-white shadow-lg w-full h-[250px]  xl:top-[12%] md:top-[7%] left-0 z-20 border-t-2">
            <div className="grid grid-cols-12 gap-3 xl:pl-[280px] lg:pl-[7.25rem] md:pl-[100px] md:mt-10 xl:mt-10">
              <div className="col-span-4 border-r-2 h-auto">
                <h3 className="md:text-sm xl:text-2xl">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                </h3>
                <h6 className="mt-3">More About Industries →</h6>
              </div>
              <div className="col-span-4">
                <MenuItem className='font-bold' label="Blog" link="/blog" onHover={() => { }} />
                <MenuItem className='font-bold' label="Case Studies" link="/case-study" onHover={() => { }} />
                <MenuItem className='font-bold' label="Webinar" link="/industries/manufacturing" onHover={() => { }} />
                <MenuItem className='font-bold' label="Events" link="/industries/finance" onHover={() => { }} />
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
            href='/home'
            alt="Company Logo"
            lang="Company Logo2"
            height='150'
            width='100'
            src='/images/homepage/logo.png'
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
                  href='/home'
                  alt="Company Logo"
                  lang="Company Logo2"
                  height='150'
                  width='100'
                  src='/images/homepage/logo.png'
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
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>

  )
}
export default Header