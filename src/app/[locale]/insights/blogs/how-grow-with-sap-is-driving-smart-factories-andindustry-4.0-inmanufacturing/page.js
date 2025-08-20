"use client";
import Image from "next/image";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    image: "/images/blog/blog-1.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "30 Sept 2024",
    url: 'how-salesforce-agentforce-actually-works',
    title: "How Salesforce Agentforce Actually Works",
    description: "Salesforce Agentforce, although a newer addition to the Salesforce ecosystem, is making rounds, particularly in organizations that deal with large teams of agents, such as sales agents, customer service representatives, and field service personnel.",
  },
  {
    id: 2,
    image: "/images/blog/blog-2.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "21 Oct 2024",
    title: "The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce",
    description: "As businesses scale, the complexity of managing customer interactions multiplies, driving the need for more intelligent and streamlined support systems.  Salesforce Agentforce provides a robust platform for customer service automation, now enhanced by the groundbreaking Atlas Reasoning Engine.",
  },
  {
    id: 3,
    image: "/images/blog/blog-3.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "28 Oct 2024",
    title: "Agents vs. Copilots vs. Bots: What’s the Difference and Why It Matters",
    description: "Tools like Agentforce are redefining how we view digital assistants, bringing distinctions between Agents, Copilots, and Bots to the forefront. The terms are frequently used within artificial intelligence-driven automation and conversational interfaces, each serving a distinct purpose.",
  },
  {
    id: 4,
    image: "/images/blog/blog-4.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "25 Nov 2024",
    title: "Agentforce Testing Center: Redefining AI Testing with Synthetic Data",
    description: "Salesforce has introduced a new feature called Testing Center within its agentic AI platform, Agentforce. This addition allows enterprise users to test and monitor AI agents before deploying them in production.",
  },
  {
    id: 5,
    image: "/images/blog/blog-5.webp",
    category: "SAP SuccessFactors",
    industry: "Human Resources",
    date: "24 Dec 2024",
    title: "How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration",
    description: "Seamless integration between enterprise applications offers improved collaboration, efficiency, and productivity. Integrating SAP SuccessFactors with Microsoft Office 365 combines the strengths of a leading human experience management (HXM) solution and a robust suite of productivity tools.",
  },
  {
    id: 6,
    image: "/images/blog/blog-6.webp",
    category: "Cloud Green Technology",
    industry: "Agriculture",
    date: "17 Sept 2024",
    title: "Agriculture 4.0. How Do Digital Technologies Transform Farming for a Better Tomorrow?",
    description: "Agriculture plays a significant role in India’s growing economy and its future cannot be accomplished without digital tools and technological innovation.",
  },
  {
    id: 7,
    image: "/images/blog/blog-7.webp",
    category: "SAP SuccessFactors",
    industry: "Human Resources",
    date: "29 Oct 2024",
    title: "SAP SuccessFactors Performance and Goal Management",
    description: "Achieving your organization’s goals is a key responsibility your entire team shares. When your team’s strategy aligns with its goals and the broader organizational objectives, doing the right thing becomes instinctive.",
  },
  /* {
    id: 8,
    image: "/images/blog/blog-88.webp",
    category: "Integration",
    industry: "Healthcare",
    date: "11 Nov 2024",
    title: "Automate Crucial Parts of your Healthcare Organization with athenahealth and Salesforce Integration",
    description: "Historical evidence strongly indicates that a healthcare industry fragmented by disparate systems results in operational inefficiencies, duplicative work, patient safety issues, and rising costs to manage an increasingly complex healthcare market.",
  },
  {
    id: 9,
    image: "/images/blog/blog-9.webp",
    category: "Diversity & Inclusion",
    industry: "Human Resources",
    date: "12 Nov 2024",
    title: "How SAP SuccessFactors Supports Diversity, Equity, and Inclusion Initiatives",
    description: "Diversity, Equity, and Inclusion (DEI) are no longer optional components of a modern workplace; they are foundational pillars for innovation, employee engagement, and long-term organizational success.",
  },
  {
    id: 10,
    image: "/images/blog/blog-10.webp",
    category: "SAP GTS",
    industry: "Generic",
    date: "19 Dec 2024",
    title: "Enhancing Compliance: The Importance of Sanctioned Party List Screening in SAP GTS for Third-Party Transactions",
    description: "Maintaining compliance with international trade regulations is a must. Companies engaged in cross-border trade must ensure that their transactions comply with government-imposed sanctions and export control laws.",
  },
  {
    id: 11,
    image: "/images/blog/blog-11.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "30 Dec 2024",
    title: "Agents as Teammates: Revolutionizing Slack Collaboration with Agentforce",
    description: "Agentforce agents do more than just gather data and insights—they provide fully customizable and independent AI functionalities that can link to any enterprise data and act on your behalf.",
  },
  {
    id: 12,
    image: "/images/blog/blog-12.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "13 Jan 2025",
    title: "Agentforce Agents Scales Enterprise Resource Planning Systems with AI",
    description: "Enterprise Resource Planning (ERP) systems are the backbone of many organizations, managing critical functions like finance, procurement, manufacturing, and supply chain operations. However, these systems often operate in silos, limiting their potential to provide real-time insights and seamless collaboration across departments.",
  },
  {
    id: 13,
    image: "/images/blog/blog-13.webp",
    category: "SAP SuccessFactors",
    industry: "Human Resources",
    date: "21 Jan 2025",
    title: "How SAP SuccessFactors Enhances Remote Work Management",
    description: "Remote work has rapidly transformed from a temporary solution to a need for many businesses worldwide. With businesses shifting towards remote work, operating a remote workforce can be challenging, particularly considering local dynamics and regulatory requirements.",
  },
  {
    id: 14,
    image: "/images/blog/blog-14.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "03 Feb 2025",
    title: "Salesforce Agentforce: Top Features You’re Probably Not Using (But should!)",
    description: "Agentforce was one of Salesforce’s major announcements last year. It introduced “AI agents,” marking a significant shift in its AI strategy. It embodies Salesforce’s vision for the Third Wave of AI by moving beyond the early, more assistive AI models to a generation of intelligent agents that are more accurate, reliable, and actively engaged in driving customer outcomes",
  }, */
  // Add more blog objects as needed
];

export default function Home() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/how-grow-with-sap-is-driving-smart-factories-andindustry-4.0-inmanufacturing";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 py-8  relative">
        {/* Meta Information */}
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="flex items-center text-blue-500 mb-4 md:mb-0">
            <span className="mr-2">SAP</span>
            <span className="text-gray-400">| January 31, 2025</span>
          </div>
          <div className="flex items-center gap-4">
          <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="max-w-[40px]">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/case-studies/linkedin.svg"
                        alt="LinkedIn"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        priority
                      />
                    </a>
                  </div>
                  {/* <div className="max-w-[40px]">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/case-studies/facebook.svg"
                        alt="Facebook"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        priority
                      />
                    </a>
                  </div> */}
                  <div className="max-w-[40px]">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >                      <Image
                        src="/images/case-studies/twitter.svg"
                        alt="Twitter"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        priority
                      />
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          How GROW with SAP is Driving Smart Factories and Industry 4.0 in Manufacturing
        </h1>
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
            alt="Digital Technology Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
        </div>

        {/* Main Content */}
        <article className="bg-white rounded-lg  p-6 md:p-10">


          <p className="text-gray-700 mb-8 leading-relaxed">
            We are in the 4.0 era of the industrial revolution, where being smart isn’t enough—it’s about outsmarting the competition. Machine automation, augmented reality, and AI have moved beyond buzzwords to become crucial elements of modern manufacturing. The future of production focuses on smart factory applications and transforming the industry 4.0 ERP process with SAP for manufacturers. The manufacturing industry is transforming with Industry 4.0, integrating automation, AI, IoT, and real-time data analytics to enhance efficiency and innovation. However, small and midsize manufacturers often struggle to adopt these advanced technologies due to high costs, complex implementations, and a lack of skilled IT resources.

            GROW with SAP becomes a game-changer here. Designed specifically for SMBs, it provides a cloud-based ERP solution with pre-configured best practices, AI-powered automation, and seamless IoT integration to help manufacturers modernize their operations without the usual complexity. Utilizing SAP’s S/4HANA Cloud Public Edition allows small and midsize companies to scale efficiently, offering standardized business processes to optimize operations. Continuous innovation and scalability ensure that companies can stay competitive as they grow.
          </p>

          {/* <div className="mb-8">
            <p className="text-green-500 italic ">
              Microsoft is trying to reverse its lifetime carbon emissions, the total amount of greenhouse gas
              it's responsible for sending into the atmosphere since its founding in 1975.
            </p>
          </div> */}

          {/* <h2 className="h-2-bold text-[#0092E0] pb-4">
            The Global Workforce Management Challenge
          </h2> */}

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            GROW with SAP for Manufacturing
          </h3>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Industry 4.0 builds on the 3rd Industrial Revolution’s advancements in technology, computers, and the Internet. It extends beyond these tools to apply transformative technologies across the entire value chain. However, technology is just part of the equation; success in the Fourth Industrial Revolution also requires rethinking manufacturing, improvement, and distribution processes, which is where Industry 4.0 ERP comes into play.

            GROW with SAP is a cloud-first ERP solution built to help SMBs streamline operations, reduce costs, and scale efficiently. Unlike traditional ERP systems that require heavy IT infrastructure and long deployment cycles, GROW with SAP offers a fast, scalable, and AI-driven approach to manufacturing management. It provides a suite of pre-configured solutions, including SAP S/4HANA Public Cloud, best-practice support, adoption acceleration services, and access to a collaborative community with continuous learning opportunities. Designed for rapid deployment and cost efficiency, these solutions empower businesses to scale seamlessly and drive long-term growth.

          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Benefits of GROW with SAP for SMB Manufacturers
          </h3>

          <p className="text-gray-700 mb-6">  Rapid implementation with pre-configured best practices for manufacturing.</p>

          <p className="text-gray-700 mb-6"> Cloud-based deployment, reducing IT infrastructure costs.</p>

          <p className="text-gray-700 mb-6"> Scalable model that grows with the business.</p>

          <p className="text-gray-700 mb-6">  AI-powered automation for predictive maintenance, demand forecasting, and production planning.</p>

          <p className="text-gray-700 mb-6">  Seamless integration with IoT devices, robotics, and smart sensors for real-time factory monitoring.</p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            With these capabilities, SMB manufacturers can transition to smart factories without major IT investments.

          </p>



          {/* text-[#0092E0]  */}

          <h2 className="text-lg font-semibold text-[#0092E0]  mb-4">
            Features of GROW Empowering Smart Factories
          </h2>


          <h3 className="text-lg font-semibold text-gray-800  mb-4">
            Intelligent Automation & IoT Integration
          </h3>


          <p className="text-gray-700 mb-6">  Rapid implementation with pre-configured best practices for manufacturing.</p>

          <p className="text-gray-700 mb-6"> Modern manufacturing demands real-time monitoring and automated decision-making. GROW with SAP enables manufacturers to:</p>

          <p className="text-gray-700 mb-6">Connect IoT devices to monitor machine performance, detect issues, and schedule predictive maintenance.</p>

          <p className="text-gray-700 mb-6"> Use AI-driven automation for production planning, reducing downtime, and optimizing resource allocation.</p>

          <p className="text-gray-700 mb-6"> Gain real-time shop floor visibility with connected sensors and automated workflows.</p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            By leveraging IoT integration, manufacturers can prevent costly breakdowns and ensure smooth production cycles.

          </p>

          <h3 className="text-lg font-semibold text-gray-800  mb-4">
            AI-Driven Supply Chain Optimization
          </h3>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Supply chain disruptions are a major challenge in manufacturing. GROW with SAP’s AI-driven analytics helps:

          </p>

          <p className="text-gray-700 mb-6">Optimize inventory levels through real-time stock monitoring.</p>

          <p className="text-gray-700 mb-6">Automate supplier collaboration for just-in-time (JIT) manufacturing.</p>

          <p className="text-gray-700 mb-6">Improve demand forecasting, reducing overstocking and stockouts.</p>


          <p className="text-gray-700 mb-8 leading-relaxed">
            With these capabilities, manufacturers can streamline procurement, reduce waste, and improve production efficiency.

          </p>


          <h3 className="text-lg font-semibold text-gray-800  mb-4">
            Cloud-Based Flexibility and Scalability
          </h3>

          <p className="text-gray-700 mb-8 leading-relaxed">
            This scalability and remote accessibility are critical for manufacturers looking to expand and future-proof their operations. GROW with SAP’s cloud-first approach gives manufacturers the flexibility to:

          </p>

          <p className="text-gray-700 mb-6">Access real-time production and financial data from anywhere.</p>

          <p className="text-gray-700 mb-6">Scale operations without investing in expensive on-premises infrastructure.</p>

          <p className="text-gray-700 mb-6">Leverage SAP’s continuous updates and security features for long-term growth.</p>



          <h2 className="text-lg font-semibold text-gray-800  mb-4">
            GROW with SAP vs. Traditional ERP in Manufacturing
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed">
            In the manufacturing sector, choosing between GROW with SAP and traditional ERP systems can greatly affect efficiency, scalability, and costs. Unlike traditional ERP systems that require long deployment times and high upfront costs, GROW with SAP is quick to implement, cost-effective, and built for modern, AI-driven manufacturing.

            This solution includes continuous AI-driven updates and built-in integration within SAP’s ecosystem, enabling real-time insights, automation, and advanced analytics. In contrast, traditional ERPs often rely on third-party integrations and extensive customizations, leading to higher costs and slower adaptability. For manufacturers looking to modernize and scale effectively, GROW with SAP provides a future-ready alternative.

          </p>

          <h2 className="text-lg font-semibold text-gray-800  mb-4">
            Future-Proofing Manufacturing with SAP
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed">
            SAP continues to invest in next-gen manufacturing solutions, ensuring SMBs stay ahead in an ever-evolving industry. The future of manufacturing is AI-driven, data-centric, and highly automated. With GROW with SAP, SMB manufacturers can Leverage AI and machine learning for continuous process optimization. Adopt sustainable manufacturing practices, reducing waste and improving energy efficiency.

            As manufacturers transition to GROW with SAP, automating integration and processes with a modern cloud ERP is essential. Rialtes is a certified SAP partner that enables <Link href={"https://www.rialtes.com/the-future-of-manufacturing-how-to-confidently-move-to-sap-s-4hana-cloud-erp/"}><span className="font-bold text-green-500">seamless integration with SAP S/4HANA Cloud </span></Link> and other systems while ensuring a clean core, scalability, and guaranteed uptime. Our SAP experts will assess, architect, implement, and support the right solution tailored to your business, whether you’re new to SAP or upgrading.

          </p>

          {/* end */}


        </article>


      </div>

      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]
        pb-10"
      >
        <BlogsCarousel slides={blogs} />

      </div>
    </main>
  );
}