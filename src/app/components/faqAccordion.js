"use client";
import { useState } from "react";

export default function FAQAccordion({ faqData = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto mt-5">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between py-4 text-left bg-gray-100">
            <h3 className="font-medium 4xl:text-[20px] xl:text-[18px] text-[18px] text-gray-800 pl-10">
              {item.question}
            </h3>
            <span className="text-black xl:pr-20 pr-10">
              {openIndex === index ? (
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 14l5-5 5 5z" />
                </svg>
              ) : (
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              )}
            </span>
          </button>

          {openIndex === index && (
            <div className="pb-4 text-black transition-all 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] space-y-4 px-10 p-4">
              {Array.isArray(item.answer)
                ? item.answer.map((block, i) =>
                  Array.isArray(block) ? (
                    <ul key={i} className="list-disc ml-6 space-y-1">
                      {block.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{block}</p>
                  )
                )
                : item.answer.split("\n\n").map((para, i) => <p key={i} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: para }} />)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
