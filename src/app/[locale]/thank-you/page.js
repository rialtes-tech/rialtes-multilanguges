"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ThankYou() {
  const t = useTranslations('thankYou')
  return (
    <div className="custom-container h-full relative thank-you-bg bg-right-bottom bg-cover py-20">
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
      <h2 className="text-[#134874] xl:font-bold xl:mt-32 mt-2 4xl:text-[60px] 2xl:text-[56px] xl:text-[45px] lg:text-[40px] md:text-[30px] text-[26px]"><span className="xl:border-b-[3px] border-gray-500 inline pb-5">{t('thankYouTitle')}</span> {t('thankYouTitleOne')}</h2>
      <h3 className="xl:font-bold xl:mt-20 4xl:text-[30px] 2xl:text-[28px] xl:text-[24px] md:text-[24px] text-[20px] xl:w-[55%] w-full mt-2">{t('thankYouSubtitle')}</h3>
      <h3 className="xl:font-bold text-[#134874] 4xl:text-[30px] 2xl:text-[28px] xl:text-[24px] md:text-[24px] text-[20px] xl:mt-20 mt-5"> {t('thankYouSubtitleOne')}</h3>

      <div className="flex flex-col xl:flex-row  xl:mt-10 xl:gap-32">
        <div className="flex">
          <div className="mt-3">
            <Link href="https://www.linkedin.com/company/rialtes-technologies-llc/" title="Visit our LinkedIn">
              <Image className="h-20 w-20" alt="linkedin" src="/images/homepage/Asset5.svg" height={100} width={100} />
            </Link>
          </div>
          <div className="mt-4">
            <Link href="https://www.youtube.com/@rialtes" title="Follow us on YouTube">
              <Image className="h-20 w-20" alt="youtube" src="/images/homepage/Asset4.svg" height={100} width={100} />
            </Link>
          </div>
        </div>
        <div>
          <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-8">
            <Link href='/'> {t('close')}</Link>
          </button>
        </div>

      </div>
    </div>
  );
}
