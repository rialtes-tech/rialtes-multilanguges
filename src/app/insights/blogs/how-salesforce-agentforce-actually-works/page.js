"use client";
import Image from "next/image";
import Link from 'next/link';
import FilteredBlogCarousel from '@/app/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/how-salesforce-agentforce-actually-works/"
  },
  "headline": "How Salesforce Agentforce Actually Works",
  "description": "Explore how Salesforce Agentforce automates customer engagement using AI agents, enhancing decision-making and operational efficiency.",
  "image": "https://www.rialtes.com/images/blog/how-agentforce-works-blog-banner.webp",
  "author": {
    "@type": "Organization",
    "name": "Rialtes",
    "url": "https://www.rialtes.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  },
  "datePublished": "2024-09-30",
  "articleSection": "Salesforce",
  "url": "https://www.rialtes.com/insights/blogs/how-salesforce-agentforce-actually-works/"
}

export default function Page() {
  const currUrl = useUrl()
  const fullUrl = "https://www.rialtes.com/insights/blogs/how-salesforce-agentforce-actually-works";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="How Does Salesforce Agentforce Work? | Rialtes"
        description="Discover how Salesforce Agentforce works to enhance customer engagement and streamline operations. Contact Rialtes today to embark on your AI journey!"
        canonical="https://www.rialtes.com/insights/blogs/how-salesforce-agentforce-actually-works/"
      />

      <Script
        id="schema-how-salesforce"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/how-agentforce-works-blog-banner.webp "
          alt="How Salesforce Agentforce Actually Works"
          fill
          style={{ objectFit: "cover", objectPosition: "70% 20%" }}
          priority
        />
      </section>

      <section
        className="custom-container">
        <div className="py-10 bg-white">
          <div className="container pl-0 mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black items-center  xl:max-w-[1084px] xl:w-[1084px]">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0]'>Salesforce Agentforce</span> <span className='text-[#ACACAC]'> | </span>30 Sept 2024
              </div>
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
          <div className="py-6"></div>
          <div className="container pl-0 mx-auto">
            <h1 className="text-[#000000] font-semibold pb-6  xl:w-[584px] 4xl:w-[1084px] leading-tight text-[26px] xl:text-[40px] 4xl:text-[60px]">How Salesforce Agentforce Actually Works</h1>
          </div>

          <div className="container pl-0 mx-auto">
            <div className="max-[1084px] xl:w-[1084px]">

              <p className="text-black pb-4">Salesforce Agentforce, although a newer addition to the Salesforce ecosystem, is making rounds, particularly in organizations that deal with large teams of agents, such as sales agents, customer service representatives, and field service personnel. The platform uses AI to automate tasks and help businesses improve their operations, customer experience, and productivity. Agentforce platform works by integrating AI agents with Salesforce’s CRM and other tools like Data Cloud to ensure data is actionable. </p>

              <div className="py-2"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-2">Quick Introduction to Salesforce Agentforce</h2>

              <p className="text-black pb-4">Salesforce Agentforce is a platform designed to relieve agents’ workload by blending the capabilities of Salesforce with tools specifically tailored to the needs of on-the-field agents. With a suite of autonomous AI agents, it strives to automate complex tasks across sales, marketing, service, and more.</p>

              <p className="text-black pb-4">Safe to say Agentforce is not just another chatbot, Its AI agents work autonomously by analyzing data, making decisions, and conducting actions needing humans, delivering advanced business automation. Unlike traditional chatbots, Agentforce is intelligent and adaptive, capable of solving a wide range of customer issues. Just like Einstein GPT, Agentforce leverages Salesforce’s generative AI to automate tasks and deliver real-time insights, enabling agents to provide superior customer experiences.</p>

              <div className="py-2"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-2">How Does AI Agent Fit Into it?</h2>

              <p className="text-black pb-4">AI agent in Agentforce is an intelligent system put in place to understand clients’ inquiries and respond to them accordingly. They are built on machine learning and natural language processing, capable of handling a wide range of manual tasks such as addressing customer queries, answering basic questions, and multi-tasking them. All of this makes AI agents capable of improving their performance by self-learning.</p>

              <div className="py-2"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-2">Salesforce Agentforce: How It Works?</h2>

              <p className="text-black pb-4">Salesforce Agentforce helps businesses automate customer interactions, sales processes, and internal workflows. It integrates with Salesforce’s CRM and tools like Data Cloud to make all data actionable. Let’s see an instance of Agentforce in action by building an AI service agent to avert incoming support cases by answering a customer question “Where is my order? My email is <Link href="mailto:sales@rialtes.com" className="underline"> <span >mrjohn@example.com</span></Link>”</p>

              <p className="text-black pb-4">Like any chatbot, the agent will answer the question immediately, but you can also expand your agent’s capabilities by enabling it to help with the appointment of installation of the product by adding a new topic. Topics are how you define the jobs your AI agents will and won’t do and it’s how you establish guardrails for your AI agents. But you can expand your agent guardrails by creating a new topic. This is very different from old-style chatbots, there are no dialog trees, just natural language descriptions that help the agent the task to execute.</p>

              <p className="text-black font-bold pb-4">Adding a new topic:</p>

              <p className="text-black pb-4">For appointment management, you can just type in the topic label, followed by a description that helps this AI agent understand when it should use this topic. After that a description of the scope of this job and necessary instructions for the agent to use while doing the task. These types of instructions usually involve lots of complicated if-then-else logic with other chatbots. But with Agentforce, writing natural language descriptions is enough for the agent to understand the task at hand.</p>

              <p className="text-black font-bold pb-4">Actions:</p>

              <p className="text-black pb-4">The next step is actions, which enable the agent to do these tasks. Actions can be based on flow, apex classes, or prompts. This is an example of the flow for retrieving available installation times.  </p>

              <p className="text-black pb-4">And this is another one with a bit more logic to book the installation appointment.</p>

              <p className="text-black pb-4">With these two flows created, you can now add them as actions to your AI agent. Here you go, your AI agent can schedule an installation appointment for the customer’s product.  Beyond topic classification, Agentforce uses the context of your customer’s entire conversation, to make a dynamic plan. This makes the AI agents much more flexible and capable of doing their assigned tasks.</p>

              <div className="py-2"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-2">Use Cases for Agentforce</h2>

              <p className="text-black pb-4">The use cases for Agentforce are vast and can be tailored to specific fields:</p>


              <ul className="list-disc text-black  marker:text-[#0092E0] pl-4 xl:text-[20px] text-[16px] font-medium mt-3">
                <li className="pb-2"><h3 className="font-bold inline xl:text-[20px] text-[16px]">Sales</h3>: Automating lead qualification, booking appointments, and nurturing leads.</li>
                <li className="pb-2"><h3 className="font-bold inline xl:text-[20px] text-[16px]">Customer Service</h3>: Managing tickets, resolving inquiries, and providing 24/7 support.</li>
                <li className="pb-2"><h3 className="font-bold inline xl:text-[20px] text-[16px]">Marketing</h3>: Running automated campaigns that adapt based on performance metrics.</li>
                <li className="pb-2"><h3 className="font-bold inline xl:text-[20px] text-[16px]">Field Service Management</h3>: Businesses that depend on field service agents such as technicians, delivery personnel, or home care providers.</li>
                <li className=""><h3 className="font-bold inline xl:text-[20px] text-[16px]">Insurance and Financial Services</h3>: Insurance brokers, agents, and financial services consultants can utilize Agentforce to access crucial client data on the go.</li>
              </ul>
              <div className="py-2"></div>
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-2">Getting Started with Agentforce</h2>
              <p>If providing exceptional service and support to keep your customers satisfied is your priority, now is an excellent
                time to see what Agentforce can offer you. This tool will greatly benefit Salesforce customers by helping them understand and anticipate customer needs, enabling them to respond proactively. Salesforce was so driven to launch Agentforce during this year’s <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.salesforce.com/dreamforce/">Dreamforce</Link>. Businesses can leverage Agentforce within the Salesforce platform by automating sales workflows, enhancing lead management, and optimizing customer interactions.  Rialtes specializes in <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/">AI and analytics solutions in Salesforce</Link>, and we have assisted customers in achieving significant productivity gains by using AI-based tools to enhance their business processes.</p>
            </div>
          </div>
        </div>
      </section>


      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </div>
  );
}