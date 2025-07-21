"use client";
import Script from "next/script";
// pages/case-study-detail.js
import Seo from "../components/Seo";
export default function Page() {
      const schemaData = {
          "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy",
  "description": "This page explains Rialtes' policies on data privacy and user information protection."
      }
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Privacy Policy | Rialtes"
                description="Read Rialtes' Privacy Policy to understand how we collect, use, and protect your personal information while delivering exceptional IT consulting services."
                keywords="Contact, website, welcome"
                canonical={"https://www.rialtes.com/privacy-policy/"}
            />


            <Script
                id="schema-privacy"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section
                className="custom-container  "
            >

                <div className="py-10 xl:max-w-[1084px] xl:w-[1084px]">
                    <div className="">
                        <h1 className="text-[#0092E0] pb-4">Privacy Policy</h1>
                    </div>

                    <div className="">
                        <div className="">
                            <p className="text-black pb-4">Effective Date:  March 19, 2025.</p>
                            <p className="text-black pb-4">We value your privacy and are committed to protecting your data. This Privacy Notice explains how we collect, use, disclose, and protect your information when you visit our Website "<a href="https://rialtes.com/" className="text-[#0092E0]">https://www.rialtes.com/</a>".  It also describes your rights and choices regarding your personal information.</p>
                            <p className="text-black ">By accessing or using our Website, you acknowledge and agree to the practices described in this Privacy Policy. If you do not agree with our policies and practices, please discontinue using our Website.</p>
                            <div className="py-6"></div>

                            <h2 className=" text-[#0092E0] font-medium  xl:text-[30px] text-[20px] pb-4 ">Collection and Use of Personal Information</h2>
                            <p className="text-black ">We collect personal information when you submit queries on our Contact Us page/form or apply for jobs on our Careers page. When you visit our Website, we log browser-specific information like your IP address, browser type, access time, and the pages you view. Rialtes is not liable for unsolicited information you provide, and you consent to our use of your information according to our Privacy Policy. We may use your personal information to respond to requests, communicate with you, for permitted marketing, and to support our products or services.</p>

                              <div className="py-6"></div>
                            <h2 className=" text-[#0092E0] font-medium  xl:text-[30px] text-[20px] pb-4  ">Information We Collect</h2>
                            <p className="text-black pb-4">We collect information for legitimate business purposes, provide a smooth and customized experience, send requested information, and collaborate with you as a client.</p>
                        

                             <div className="pl-3">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 ">
                <p className="text-black pb-4"> <li><h4 className=" inline">Personal Information  </h4>:  When you voluntarily submit information via contact forms, webinar sign-ups, or career inquiries, we may collect your name, email address, phone number, job title, company details, and other identifying information. We may use information to improve our marketing, analyze website usage, enhance our content and services, and customize our website. We also engage outside service providers to assist with operations such as sending communications, analyzing data, processing payments, and providing customer service.</li></p>
                <p className="text-black pb-4 "><li><h4 className="inline">Non-Personal Information </h4>:  To enhance user experience and analyze trends, we may collect details such as IP address, browser type, device information, referring URLs, and pages visited. We use aggregate data to understand how visitors interact with our Website and to conduct internal research on user demographics and behavior. We may share this collective information with third parties.</li></p>
                   <p className="text-black "><li><h4 className="inline">Cookies </h4>:  We use cookies and other tracking technologies to gather information about your interaction with our Website, including browsing behavior and preferences. You can always choose whether to provide information on this Website through cookies.</li></p>
              </ul>
            </div>

                             <div className="py-6"></div>
                            <h2 className=" text-[#0092E0] font-medium  xl:text-[30px] text-[20px] pb-4  ">How We Use Your Information</h2>
                      
                            <div className="pl-3">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 ">
                <p className="text-black pb-4"> <li>Provide, operate, and enhance our Website and services.</li></p>
                <p className="text-black pb-4"> <li>Respond to your inquiries, requests, or customer service needs.</li></p>
                <p className="text-black pb-4"><li>Personalize your experience by tailoring content and services to your preferences.</li></p>
                <p className="text-black pb-4"> <li>Improve our Website’s functionality, usability, and security.</li></p>
                <p className="text-black pb-4"><li>Send newsletters, updates, and marketing communications (you can opt-out at any time).</li></p>
                <p className="text-black "><li>Fulfill legal and regulatory requirements and enforce our terms of use.</li></p>
              </ul>
            </div>
                             <div className="py-6"></div>

                            <h2 className=" text-[#0092E0] font-medium  xl:text-[30px] text-[20px] pb-4 ">How We Share Your Information</h2>
                            <p className="text-black pb-4">We respect your privacy and do not sell, trade, or rent your personal information. We will only disclose your information to the government or third parties if required by law. We cooperate with authorities to enforce laws regarding fraud, data privacy, and security. You authorize us to share your information if we believe it's necessary for investigations related to fraud or illegal activities associated with this website. However, we may share your data in specific scenarios:</p>
                            {/* <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 mt-3">
                                <li className="pb-4 text-black"><span className="font-bold">Service Providers :</span>We may share information with trusted third-party service providers who assist in website hosting, analytics, email communication, and other business operations.</li>
                                <li className="pb-4 text-black"><span className="font-bold">Legal and Compliance Requirements :</span>If required by law, court order, or to protect our legal rights, we may disclose personal information to authorities.</li>
                                <li className="pb-4 text-black"><span className="font-bold">Business Transfers:</span>In the event of a merger, acquisition, or sale of all or part of our company, your data may be transferred to the new entity.</li>

                            </ul> */}

                               <div className="pl-3">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 ">
                <p className="text-black pb-4"> <li><h4 className="inline">Service Providers </h4>: We may share information with trusted third-party service providers who assist in website hosting, analytics, email communication, and other business operations.</li></p>
                <p className="text-black pb-4 "><li><h4 className="inline">Legal and Compliance Requirements </h4>: If required by law, court order, or to protect our legal rights, we may disclose personal information to authorities.</li></p>
                      <p className="text-black  "><li><h4 className="inline">Business Transfers </h4>: In the event of a merger, acquisition, or sale of all or part of our company, your data may be transferred to the new entity.</li></p>
              </ul>
            </div>

                                 <div className="py-6"></div>
                            <h2 className=" text-[#0092E0] font-medium  xl:text-[30px] text-[20px] pb-4 ">Data Security</h2>
                            <p className="text-black">We takes appropriate technical and organizational measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect your information, no transmission method over the internet is 100% secure.  </p>
        <div className="py-6"></div>

                        
                            <h2 className=" text-[#0092E0] font-medium  xl:text-[30px] text-[20px] pb-4">Your Rights and Choices</h2>
                            <p className="text-black pb-4">Depending on your location, you may have rights regarding your personal information, including:</p>
                            {/* <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 mt-3">
                                <li className="pb-4 text-black">The right to access, correct, or delete your data.</li>
                                <li className="pb-4 text-black">The right to restrict or object to data processing.</li>
                                <li className="pb-4 text-black">The right to opt out of marketing communications.</li>
                                <li className="pb-4 text-black">The right to disable cookies via your browser settings.</li>
                            </ul> */}

                            <div className="pl-3">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 ">
                <p className="text-black pb-4"> <li>The right to access, correct, or delete your data.</li></p>
                <p className="text-black pb-4"> <li>The right to restrict or object to data processing.</li></p>
                <p className="text-black pb-4"><li>The right to opt out of marketing communications.</li></p>
                <p className="text-black "> <li>The right to disable cookies via your browser settings.</li></p>
               
              </ul>
            </div>

                            {/* <p>To exercise these rights, please contact us at (Email address). We will process your request per applicable laws.</p> */}
    <div className="py-6"></div>
                            <h2 className="text-[#0092E0] font-medium  xl:text-[30px] text-[20px] pb-4 ">Third-Party Links</h2>
                            <p className="text-black">Our Website may contain links to third-party websites or services that are not operated by us. We are not responsible for their privacy policies or practices. We encourage you to review their policies before providing any personal data.</p>
                               <div className="py-6"></div>

                            <h2 className=" text-[#0092E0] font-medium  xl:text-[30px] text-[20px] pb-4 ">Children’s Privacy</h2>
                            <p className="text-black">Our Website is intended for a general audience and is not directed at children under the age of 13. We do not knowingly collect personal data from children. If we become aware that we have inadvertently collected such information, we will take steps to delete it promptly.</p>

                             <div className="py-6"></div>
                            <h2 className=" text-[#0092E0] font-medium  xl:text-[30px] text-[20px] pb-4 ">California Residents</h2>
                            <p className="text-black pb-4">If you are a California resident, the California Consumer Privacy Act (CCPA) provides specific rights regarding your personal information. Businesses that collect personal data from California residents must inform you of their data practices and your rights.</p>
                            <p className="pb-4">Under the CCPA, you have the right to:</p>

                            {/* <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 mt-3">
                                <li className="pb-4 text-black">Request information about your personal information, including its categories, sources, business purpose, and disclosures to third parties.</li>
                                <li className="pb-4 text-black">Request deletion of your personal information, with certain exceptions.</li>
                                <li className="pb-4 text-black">Opt out of the sale of your personal information.</li>
                            </ul> */}
                            <div className="pl-3">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 ">
                <p className="text-black pb-4"> <li>Request information about your personal information, including its categories, sources, business purpose, and disclosures to third parties.</li></p>
                <p className="text-black pb-4"> <li>Request deletion of your personal information, with certain exceptions.</li></p>
                <p className="text-black pb-4"><li>Opt out of the sale of your personal information.</li></p>
             
              </ul>
            </div>

                            <p>You also have the right to be free from discrimination for exercising these rights. Verified California consumers can expect a response to requests within 45 days, with a possible extension of an additional 45 days, which will be communicated within the initial period.</p>

                              <div className="py-6"></div>
                            <h2 className=" text-[#0092E0] font-medium  xl:text-[30px] text-[20px] pb-4 ">EU Residents</h2>
                            <p className="pb-4 text-black">If you are a resident of the European Union, you may have specific rights regarding the collection, retention, use, and disclosure of your personal data depending on the circumstances under the General Data Protection Regulation (GDPR). We processes data based on contract, consent, legal obligations, or legitimate business interests.</p>
                            <p>Your rights include:</p>
                            <p className="mt-3"><h3 className="h3-bold inline">Access & Rectification </h3> – Request your data and correct inaccuracies.</p>
                            <p className="mt-3"><h3 className="h3-bold inline ">Objection & Restriction </h3> –  Object to processing or request limitations.</p>
                            <p className="mt-3"><h3 className="h3-bold inline">Erasure </h3> –  Request data deletion in certain cases.</p>
                            <p className="mt-3"><h3 className="h3-bold inline">Data Portability </h3> –  Receive your data in a structured format.</p>
                            <p className="mt-3"><h3 className="h3-bold inline ">Lodge a Complaint </h3> –  Contact a data protection authority if needed.</p>
                            <p className="mt-3">For details, visit the <a className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline" href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en">European Data Protection Board</a> .</p>

                                  <div className="py-6"></div>
                            <h2 className="text-[#0092E0] font-medium  xl:text-[30px] text-[20px] pb-4 ">Changes to This Privacy Policy</h2>
                            <p className="text-black">We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. Any updates will be posted on this page with the revised effective date. We encourage you to review this policy periodically.</p>

                             <div className="py-6"></div>
                            <h2 className=" text-[#0092E0] font-medium  xl:text-[30px] text-[20px] pb-4">Contact Us</h2>
                            <p className="text-black">Thank you for visiting our website. If you have any questions, concerns, or requests related to this Privacy Policy, please reach out through our <a className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline" href="https://rialtes.netlify.app/contact-us">contact form.</a> </p>

                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}