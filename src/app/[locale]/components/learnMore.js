import Link from "next/link";

export default function LearnMore({ btnName, bgcolor, bordercolor, href, arialabel }) {
  const t = useTranslations('common')

  return (
    <Link
      href={href ? href : "/contact-us"}
      aria-label={arialabel ? arialabel : "Learn more about Salesforce implementation services"}
      className={`inline-block 4xl:text-[20px] text-[16px] xl:text-[16px] border border-solid font-semibold text-white py-3 px-8 transition duration-300 mt-6
      bg-[${bgcolor ? bgcolor : "#134874"}] border-[${bordercolor ? bordercolor : "#134874"}] hover:bg-white hover:text-[${bgcolor ? bgcolor : "#134874"}]`}>
      {btnName ? btnName : t('innovatingData')}
    </Link>

  );
}
