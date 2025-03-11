"use client";
// pages/blog-detail.js
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import BlogsCarousel from '../../components/latestBlogCarousel';

const blogs = [
  /*{
    id: 1,
    image: "/images/blog/blog-1.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "30 Sept 2024",
    url: 'how-salesforce-agentforce-actually-works',
    title: "How Salesforce Agentforce Actually Works",
    description: "Salesforce Agentforce, although a newer addition to the Salesforce ecosystem, is making rounds, particularly in organizations that deal with large teams of agents, such as sales agents, customer service representatives, and field service personnel.",
  },*/
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
  /*{
    id: 8,
    image: "/images/blog/blog-8.webp",
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

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>How Salesforce Agentforce Actually Works | Company Name</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/blog-1-banner.webp "
          alt="How Salesforce Agentforce Actually Works"
          fill
          style={{ objectFit: "cover", objectPosition: "70% 20%" }}
          priority
        />
      </section>

      <section
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >

        <div className="py-10 bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black items-center  max-w-4xl xl:w-4/2">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0]'>Salesforce Agentforce</span> <span className='text-[#ACACAC]'> | </span>30 Sept 2024
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="max-w-[40px]">
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=/how-salesforce-agentforce-actually-works&title=How Salesforce Agentforce Actually Works&summary=Summary%20of%20the%20blog&source=LinkedIn">
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
                  <div className="max-w-[40px]">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=/how-salesforce-agentforce-actually-works">
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
                  </div>
                  <div className="max-w-[40px]">
                    <a href="https://twitter.com/intent/tweet?url=/how-salesforce-agentforce-actually-works&text=How Salesforce Agentforce Actually Works">
                      <Image
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
          <div className="py-6"></div>
          <div className="container mx-auto">
            <h1 className="text-[#000000] font-semibold pb-6 max-w-4xl xl:w-4/2">How Salesforce Agentforce Actually Works</h1>
          </div>

          <div className="container mx-auto">
            <div className="max-w-4xl md:w-4/2">

              <p className="text-black pb-4">Salesforce Agentforce, although a newer addition to the Salesforce ecosystem, is making rounds, particularly in organizations that deal with large teams of agents, such as sales agents, customer service representatives, and field service personnel. The platform uses AI to automate tasks and help businesses improve their operations, customer experience, and productivity. Agentforce platform works by integrating AI agents with Salesforce’s CRM and other tools like Data Cloud to ensure data is actionable. </p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-4">Quick Introduction to Salesforce Agentforce</h3>

              <p className="text-black pb-4">Salesforce Agentforce is a platform designed to relieve agents’ workload by blending the capabilities of Salesforce with tools specifically tailored to the needs of on-the-field agents. With a suite of autonomous AI agents, it strives to automate complex tasks across sales, marketing, service, and more.</p>

              <p className="text-black pb-4">Safe to say Agentforce is not just another chatbot, Its AI agents work autonomously by analyzing data, making decisions, and conducting actions needing humans, delivering advanced business automation. Unlike traditional chatbots, Agentforce is intelligent and adaptive, capable of solving a wide range of customer issues. Just like Einstein GPT, Agentforce leverages Salesforce’s generative AI to automate tasks and deliver real-time insights, enabling agents to provide superior customer experiences.</p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-4">How Does AI Agent Fit Into it?</h3>

              <p className="text-black pb-4">AI agent in Agentforce is an intelligent system put in place to understand clients’ inquiries and respond to them accordingly. They are built on machine learning and natural language processing, capable of handling a wide range of manual tasks such as addressing customer queries, answering basic questions, and multi-tasking them. All of this makes AI agents capable of improving their performance by self-learning.</p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-4">Salesforce Agentforce: How It Works?</h3>

              <p className="text-black pb-4">Salesforce Agentforce helps businesses automate customer interactions, sales processes, and internal workflows. It integrates with Salesforce’s CRM and tools like Data Cloud to make all data actionable. Let’s see an instance of Agentforce in action by building an AI service agent to avert incoming support cases by answering a customer question “Where is my order? My email is <Link href="mailto:sales@rialtes.com" className="underline"> <span className="font-semibold">mrjohn@example.com</span></Link>”</p>

              <p className="text-black pb-4">Like any chatbot, the agent will answer the question immediately, but you can also expand your agent’s capabilities by enabling it to help with the appointment of installation of the product <span className="font-bold">by adding a new topic</span>. Topics are how you define the jobs your AI agents will and won’t do and it’s how you establish guardrails for your AI agents. But you can expand your agent guardrails by creating a new topic. This is very different from old-style chatbots, there are no dialog trees, just natural language descriptions that help the agent the task to execute.</p>

              <p className="text-black font-bold pb-4">Adding a new topic:</p>

              <p className="text-black pb-4">For <span className="font-bold">appointment management</span>, you can just type in the topic label, followed by a description that helps this AI agent understand when it should use this topic. After that a description of the scope of this job and necessary instructions for the agent to use while doing the task. These types of instructions usually involve lots of complicated if-then-else logic with other chatbots. But with Agentforce, writing natural language descriptions is enough for the agent to understand the task at hand.</p>

              <p className="text-black font-bold pb-4">Actions:</p>

              <p className="text-black pb-4">The next step is actions, which enable the agent to do these tasks. Actions can be based on flow, apex classes, or prompts. This is an example of the flow for retrieving available installation times.  </p>

              <p className="text-black pb-4">And this is another one with a bit more logic to book the installation appointment.</p>

              <p className="text-black pb-4">With these two flows created, you can now add them as actions to your AI agent. Here you go, your AI agent can schedule an installation appointment for the customer’s product.  Beyond topic classification, Agentforce uses the context of your customer’s entire conversation, to make a dynamic plan. This makes the AI agents much more flexible and capable of doing their assigned tasks.</p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-4">Use Cases for Agentforce</h3>

              <p className="text-black pb-4">The <span className="font-bold">use cases</span> for Agentforce are vast and can be tailored to specific fields:</p>

              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 pb-6">
                <li><span className="font-bold">Sales:</span> Automating lead qualification, booking appointments, and nurturing leads.</li>
                <li><span className="font-bold">Customer Service:</span> Managing tickets, resolving inquiries, and providing 24/7 support.</li>
                <li><span className="font-bold">Marketing:</span> Running automated campaigns that adapt based on performance metrics.</li>
                <li><span className="font-bold">Field Service Management:</span> Businesses that depend on field service agents such as technicians, delivery personnel, or home care providers.</li>
                <li><span className="font-bold">Insurance and Financial Services:</span> Insurance brokers, agents, and financial services consultants can utilize Agentforce to access crucial client data on the go.</li>
              </ul>



              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-4">Getting Started with Agentforce</h3>

              <p>If providing exceptional service and support to keep your customers satisfied is your priority, now is an excellent time to see what Agentforce can offer you. This tool will greatly benefit Salesforce customers by helping them understand and anticipate customer needs, enabling them to respond proactively. Salesforce was so driven to launch Agentforce during this year’s <Link className="text-[#006C1D] transition duration-300 ease-out hover:text-gray-400" href="https://www.salesforce.com/dreamforce/"><span className="font-bold">Dreamforce</span></Link>. Businesses can leverage Agentforce within the Salesforce platform by automating sales workflows, enhancing lead management, and optimizing customer interactions.  Rialtes specializes in <Link className="text-[#006C1D] transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/salesforce-consulting-services/?utm_source=internal-traffic&utm_medium=blog&utm_campaign=How-Agentforce-Works"><span className="font-bold">AI and analytics solutions in Salesforce</span></Link>, and we have assisted customers in achieving significant productivity gains by using AI-based tools to enhance their business processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
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
    </div>
  );
}