/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/how-salesforce-agentforce-actually-works",
        destination: "/insights/blogs/how-salesforce-agentforce-actually-works",
        permanent: true,
      },
      {
        source: "/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce",
        destination: "/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce",
        permanent: true,
      },
      {
        source: "/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters",
        destination: "/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters",
        permanent: true,
      },
      {
        source: "/agentforce-testing-center-redefining-ai-testing-with-synthetic-data",
        destination: "/insights/blogs/agentforce-testing-center-redefining-ai-testing-with-synthetic-data",
        permanent: true,
      },
      {
        source: "/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration",
        destination: "/insights/blogs/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration",
        permanent: true,
      },
      {
        source: "/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow",
        destination: "/insights/blogs/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow",
        permanent: true,
      },
      {
        source: "/sap-successfactors-performance-and-goal-management",
        destination: "/insights/blogs/sap-successfactors-performance-and-goal-management",
        permanent: true,
      },
      {
        source: "/automate-crucial-parts-of-your-healthcare-organization-with-athenahealth-and-salesforce-integration",
        destination: "/insights/blogs/automate-crucial-parts-of-your-healthcare-organization-with-athenahealth-and-salesforce-integration",
        permanent: true,
      },
      {
        source: "/how-sap-successfactors-supports-diversity-equity-and-inclusion-initiatives",
        destination: "/insights/blogs/how-sap-successfactors-supports-diversity-equity-and-inclusion-initiatives",
        permanent: true,
      },
      {
        source: "/enhancing-compliance-the-importance-of-sanctioned-party-list-screening-in-sap-gts-for-third-party-transactions",
        destination: "/insights/blogs/enhancing-compliance-the-importance-of-sanctioned-party-list-screening-in-sap-gts-for-third-party-transactions",
        permanent: true,
      },
      {
        source: "/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce",
        destination: "/insights/blogs/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce",
        permanent: true,
      },
      {
        source: "/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai",
        destination: "/insights/blogs/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai",
        permanent: true,
      },
      {
        source: "/how-sap-successfactors-enhances-remote-work-management",
        destination: "/insights/blogs/how-sap-successfactors-enhances-remote-work-management",
        permanent: true,
      },
      {
        source: "/salesforce-agentforce-top-features-youre-probably-not-using-but-should",
        destination: "/insights/blogs/salesforce-agentforce-top-features-youre-probably-not-using-but-should",
        permanent: true,
      },
      {
        source: "/our-partners",
        destination: "/about-us/global-alliences",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/rise-with-sap-partners",
        destination: "/services/business-transformation/rise-with-sap-services",
        permanent: true,
      },
      {
        source: "/salesforce-data-cloud-consulting-services",
        destination: "/solutions/data-ai/salesforce-data-cloud-consulting",
        permanent: true,
      },
      {
        source: "/sap-consulting-services",
        destination: "/solutions/enterprise-platforms/sap-consulting",
        permanent: true,
      },
      {
        source: "/salesforce-consulting-services",
        destination: "/solutions/enterprise-platforms/salesforce-consulting",
        permanent: true,
      },
      {
        source: "/real-estate-industry-2",
        destination: "/industry/real-estate-property-management",
        permanent: true,
      },
      {
        source: "/industry/healthcare",
        destination: "/industry/life-sciences/healthcare-medtech-patient-care",
        permanent: true,
      },
      {
        source: "/manufacturing",
        destination: "/industry/manufacturing-cloud-erp",
        permanent: true,
      },
      {
        source: "/hi-tech",
        destination: "/industry/hitech-semiconductor",
        permanent: true,
      },
      {
        source: "/blogs/:path*",
        destination: "/insights/blogs/:path*",
        permanent: true,
      },

    ]
  }

};

export default nextConfig;
