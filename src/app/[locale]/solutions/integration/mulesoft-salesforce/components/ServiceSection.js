import React from "react";
import ServiceCard from "./ServiceCard";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../../messages/en/solutions.json";
import esContent from "../../../../../../../messages/es/solutions.json";
import frContent from "../../../../../../../messages/fr/solutions.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";

const ServiceSection = () => {
  const t = useTranslations("mulesoft");
  const locale = useLocale();
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { cardData } = content.mulesoft;
  return (
    <div className="custom-container ">
      <div className="lg:mb-[67px] mb-6 md:max-w-[80%] 2xl:w-[74%] 4xl:w-[80%] max-w-full">
        <h2 className=" mb-2 xl:mb-10 leading-tight pb-6 4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] xl:w-[80%] 4xl:w-[100%]">
          {t("integrationTitle")}
        </h2>
        <p className="w-full text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] leading-tight">
          {t("integrationDesc")}
        </p>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 pr-0">
        {cardData.map(({ _id, tittle, descrip }) => (
          <ServiceCard key={_id} tittle={tittle} descrip={descrip} />
        ))}
      </div>
    </div>
  );
};
export default ServiceSection;
