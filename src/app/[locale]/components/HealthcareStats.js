import { useTranslations } from "next-intl";

export default function HealthcareStats() {
   const t = useTranslations("agentForce");
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-0  items-start">
        <StatBox percentage="27%" description={t('greaterPatientAdherence')} />
        <StatBox percentage="91%" description={t('archivePostionROI')} />
        <StatBox percentage="29%" description={t('faterCaseResolution')} />
         <p className="4xl:text-[20px] xl:text-[18px] md:text-[18px] text-[16px] text-gray-500">
        *Source: Salesforce
      </p>
      </div>
     
    </section>
  );
}

function StatBox({ percentage, description }) {
  return (
    <div className="flex flex-col items-start text-left">
      <span className="text-[#006FBE] 4xl:text-[60px] xl:text-[40px] md:text-[30px] leading-tight  text-[48px] font-bold">
        {percentage}
      </span>
      <span className="4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px] xl:w-[60%] w-[55%] mt-2 font-semibold  leading-tight">
        {description}
      </span>
    </div>
  );
}
