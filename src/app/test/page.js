// pages/index.js
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>
          Healthcare CRM for Patient Management | Salesforce Health Cloud
        </title>
        <meta
          name="description"
          content="How Salesforce Health Cloud is revolutionizing the MedTech solutions industry"
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Healthcare CRM for
              <br />
              Patient Management
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              Salesforce Health Cloud enables health IT teams by facilitating
              data between healthcare providers and patients, improving both
              provider efficiency and patient accessibility. Drives single-view
              patient insights, and enables 1:1 patient journeys.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              How Salesforce Health Cloud is revolutionizing the MedTech
              solutions industry?
            </h2>
            <p className="text-sm text-gray-600 mb-8">
              Achieving goals using a simplified patient care solution
            </p>
          </div>
          <div className="hidden md:block">
            {/* Placeholder for right side hero image if needed */}
          </div>
        </div>

        {/* Features Section */}

        {/* Personalized Health Solutions Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Bracing Personalized Health Solutions
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            Explore how a 360-patient view helps you revolutionize client
            understanding and deliver the care they deserve
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-3">
                Member Benefit Simplified
              </h3>
              <p className="text-sm text-blue-800">
                Effective and intuitive steps to experience health insurance
                information exploration simplified from member enrollments to
                scheduling and more.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-3">
                Patient-first Approach
              </h3>
              <p className="text-sm text-blue-800">
                Less medical data, social demographics, drugs & medications
                details influencing patient experience and understanding for
                providers.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-3">
                Focus on Business-pivotal Ordeals
              </h3>
              <p className="text-sm text-blue-800">
                Like clinical interventions, telehealth links & feedback,
                prioritize relevant integrated tools, task 360 interventions via
                standard field pivots.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-3">
                Boost Sales Transparency
              </h3>
              <p className="text-sm text-blue-800">
                Clarified scope of sales effectiveness through organized
                patient-relevant data content with patients more effectively
                communicated personally.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-3">
                Community-centric Experience
              </h3>
              <p className="text-sm text-blue-800">
                Navigate portals, community guidelines, and engage patient
                conversations leveraging community health management (CHM)
                forums.
              </p>
            </div>
          </div>
        </div>

        {/* Healthcare Cloud-friendly Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/images/healthcare-professional.jpg"
              alt="Healthcare professional using Salesforce Health Cloud"
              width={500}
              height={350}
              className="rounded-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Healthcare made
              <br />
              cloud-friendly
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Uplifting tech and health discoveries are incredible but adopting
              the Health Cloud with Trailhead helps.
            </p>
            <ul className="space-y-2 list-disc pl-5 text-sm text-gray-700">
              <li>Dedicated Professional to meet compliance</li>
              <li>Trusted by businesses and industry partners</li>
              <li>The most comprehensive framework to manage healthcare</li>
              <li>Embracing and implementing features in real-time</li>
              <li>No need for extra software installations</li>
            </ul>
          </div>
        </div>

        {/* Efficiency Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Driving efficiency whilst lowering costs
          </h2>
          <p className="text-sm text-gray-600">
            By embedding Salesforce Health Cloud into your comprehensive
            healthcare solutions makes it happen: a 360-degree patient view
            simplifies patient accessibility, delivers integrated patient
            solutions, and streamlines operations.
          </p>
        </div>
      </main>

      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          <p>© 2025 Salesforce Health Cloud. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
