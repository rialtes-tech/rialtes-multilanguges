// app/insights/case-studies/[slug]/page.tsx

import { getCaseStudyData } from '../../../lib/data'; // Assume you have this function

export async function generateMetadata({ params }) {
  const { slug } = params;

  // Fetch your case study data based on the slug
  const caseStudy = await getCaseStudyData(slug);

  // Fallback if data not found
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.summary,
      images: [`https://www.rialtes.com${caseStudy.imageUrl}`], // ✅ dynamic image
      url: `https://www.rialtes.com/insights/case-studies/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: caseStudy.title,
      description: caseStudy.summary,
      images: [`https://www.rialtes.com${caseStudy.imageUrl}`],
    },
  };
}
