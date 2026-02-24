import Image from "next/image";

// Reusable Learn More button
const LearnMoreButton = ({ className }) => (
  <div className={`absolute w-[162px] h-[62px] text-white ${className}`}>
    <div className="absolute inset-0 bg-[#073259]" />
    <strong className="absolute top-1/2 left-[24px] -translate-y-1/2 capitalize">
      Learn more
    </strong>
  </div>
);

// Navigation bar
const NavBar = () => (
  <nav className="absolute top-0 left-0 w-[1920px] h-[160px] bg-white text-[#505050]">
    <ul className="flex justify-center items-center h-full gap-10">
      {["About us", "Products", "Services", "Industries", "Insights", "Contact us"].map((item) => (
        <li key={item} className="capitalize font-bold">{item}</li>
      ))}
    </ul>
    <Image
      src="/Home-button.svg"
      alt="Home button"
      width={278}
      height={99}
      className="absolute left-[237px] top-1/2 -translate-y-1/2"
    />
  </nav>
);

// Hero section
const HeroSection = () => (
  <section className="absolute top-[160px] left-0 w-[1920px] h-[711px] bg-[url('/Group-1009@3x.png')] bg-cover bg-no-repeat">
    <h1 className="absolute top-[443px] left-[283px] text-6xl text-white w-[668px]">
      Salesforce Consulting Services
    </h1>
    <h2 className="absolute top-[1005px] left-[280px] text-6xl font-light w-[1105px]">
      Unlock AI, Data, and Enterprise-Scale Growth.
    </h2>
    <h2 className="absolute top-[1511px] left-[280px] text-6xl font-light w-[1105px]">
      Why Choose Rialtes
    </h2>
  </section>
);

// Generic service section
const ServiceSection = ({ title, description, className, textColor = "text-black" }) => (
  <section className={`absolute ${className}`}>
    <h2 className={`text-6xl font-light ${textColor}`}>{title}</h2>
    {description && <p className="mt-4 text-xl">{description}</p>}
  </section>
);

// Image block with improved alt
const ImageBlock = ({ src, alt, width, height, className }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={`absolute object-cover ${className}`}
    sizes="100vw"
  />
);

export default function SalesforceConsultingServices() {
  return (
    <div className="relative bg-white w-full h-[18979px] text-left text-xl text-black font-[Montserrat]">
      {/* Navigation */}
      <NavBar />

      {/* Hero */}
      <HeroSection />

      {/* Images */}
      <ImageBlock
        src="/AdobeStock-1030194100@2x.png"
        alt="Business professionals collaborating on Salesforce integration"
        width={807}
        height={669}
        className="top-[2230px] right-[143px]"
      />
      <ImageBlock
        src="/AdobeStock-524579937@2x.png"
        alt="Salesforce consulting visual"
        width={1360}
        height={480}
        className="top-[4080px] left-[280px]"
      />

      {/* Service sections */}
      <ServiceSection
        title="Agentforce Services"
        description="AI readiness assessments, conversational AI, Einstein GPT automations, and Agentforce enablement workshops."
        className="top-[4613px] left-[280px] w-[671px]"
        textColor="text-white"
      />
      <ServiceSection
        title="SalesforceAgent+"
        description="Pre-built AI agents for case routing, lead nurturing, and knowledge intelligence."
        className="top-[5338.5px] left-[280px] w-[671px]"
      />
      <ServiceSection
        title="AutoSense"
        description="Specialized consulting framework for automotive transformation with Salesforce Automotive Cloud and SAP integrations."
        className="top-[6335px] right-[-1px] w-[809px]"
      />
      <ServiceSection
        title="Advantage+"
        description="Helps B2B and B2C organizations unlock Salesforce Marketing Cloud with advisory, implementation, and optimization."
        className="top-[7315.5px] left-[280px] w-[465px]"
        textColor="text-white"
      />
      <ServiceSection
        title="LifeAI+"
        description="Comprehensive consulting framework for life sciences organizations, supporting innovation across drug development and patient engagement."
        className="top-[8252px] left-[1112px] w-[253px]"
      />
      <ServiceSection
        title="RialFinance+"
        description="Helps financial institutions modernize operations, enhance customer experience, and unlock data-driven decision making."
        className="top-[9252.5px] left-[280px] w-[533px]"
      />

      {/* Expertise & FAQs */}
      <ServiceSection
        title="Rialtes Salesforce Expertise"
        className="bottom-[3552px] left-[280px] w-[947px]"
      />
      <h3 className="absolute bottom-[2571.5px] left-[280px] text-3xl w-[947px]">
        Salesforce FAQs
      </h3>

      {/* Products */}
      <ServiceSection
        title="Salesforce Products"
        description="Flexible ways to scale Salesforce capability, transform fragmented data, and build connected ecosystems."
        className="top-[11422px] left-[280px] w-[671px]"
      />

      {/* Learn More buttons */}
      <LearnMoreButton className="bottom-[10847px] left-[280px]" />
      <LearnMoreButton className="bottom-[8954px] left-[280px]" />
      <LearnMoreButton className="bottom-[2770.5px] left-[1340px]" />
      <LearnMoreButton className="bottom-[6430.5px] left-[280px]" />
      <LearnMoreButton className="bottom-[5413.5px] left-[280px]" />
      <LearnMoreButton className="bottom-[4396.5px] left-[280px]" />
      <LearnMoreButton className="bottom-[6430.5px] left-[970px]" />
      <LearnMoreButton className="bottom-[5413.5px] left-[970px]" />
      <LearnMoreButton className="bottom-[4396.5px] left-[970px]" />
    </div>
  );
}
