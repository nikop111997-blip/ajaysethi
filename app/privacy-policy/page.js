import { ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default async function Page() {
    const lastUpdated = "May 2026"
    return (
    <section className="w-full py-20 md:py-32 px-6 md:px-12 font-sans overflow-hidden dark:bg-white">
      
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-policy {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* =========================================
            HEADER SECTION
            ========================================= */}
        <div className="text-center mb-12 animate-policy" style={{ animationDelay: "0.1s" }}>
       
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] tracking-tight mb-6">
            Privacy <span className="text-[#ff6a3d]">Policy</span>
          </h1>
          <p className="text-gray-800 text-lg">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* =========================================
            DOCUMENT CONTENT CARD
            ========================================= */}
        <div 
          className="w-full bg-white border border-gray-100 rounded-[1rem] p-8 md:p-12 lg:p-16 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.05)] animate-policy"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="prose prose-lg max-w-none text-gray-800">
            
            <p className="lead text-[#1a1a1a] font-medium text-lg mb-8">
              At Kayapalat Wellness and Ajay Sethi Coaching, we are committed to protecting your privacy and ensuring that your personal and health information is handled securely and responsibly.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 border-b border-gray-100 pb-2">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              To provide you with personalized wellness coaching, business mentorship, and corporate training, we may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-[#ff6a3d]">
              <li><strong>Personal Identification:</strong> Name, email address, phone number, and location.</li>
              <li><strong>Health & Lifestyle Data:</strong> Information you voluntarily share during consultations or via forms regarding your fitness goals, dietary habits, stress levels, and general well-being.</li>
              <li><strong>Business Data:</strong> For business coaching clients, we may collect information regarding your business metrics, revenue goals, and operational systems.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP addresses, browser types, and pages visited.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 border-b border-gray-100 pb-2">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect strictly to deliver and improve our services. Specifically, we use your data to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-[#ff6a3d]">
              <li>Design customized personal wellness, nutrition, or business coaching plans.</li>
              <li>Communicate with you regarding appointments, program updates, and resources.</li>
              <li>Process payments and manage billing for memberships and consultations.</li>
              <li>Improve our website, services, and overall client experience.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 border-b border-gray-100 pb-2">
              3. Data Sharing and Disclosure
            </h2>
            <p className="mb-4">
              <strong>We do not sell, rent, or trade your personal information to third parties.</strong> We may share your data only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-[#ff6a3d]">
              <li><strong>Service Providers:</strong> Trusted third-party platforms that assist us in operating our business (e.g., payment processors, email communication tools, scheduling software). These providers are legally obligated to keep your data secure.</li>
              <li><strong>Legal Compliance:</strong> If required by law, subpoena, or other legal processes, we may disclose your information to comply with legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 border-b border-gray-100 pb-2">
              4. Data Security
            </h2>
            <p className="mb-6">
              We implement industry-standard security measures to protect your personal and sensitive information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 border-b border-gray-100 pb-2">
              5. Your Rights & Choices
            </h2>
            <p className="mb-4">
              You have the right to access, update, or delete your personal information at any time. If you wish to opt-out of marketing communications, you can use the "unsubscribe" link provided in our emails or contact us directly.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 border-b border-gray-100 pb-2">
              6. Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please reach out to us at:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <p className="font-bold text-[#1a1a1a] mb-1">Kayapalat Wellness</p>
              <p className="text-gray-600">Email: <a href="mailto:support@kayapalat.in" className="text-[#ff6a3d] hover:underline font-medium">support@kayapalat.in</a></p>
            </div>

          </div>
        </div>

        {/* =========================================
            BOTTOM ACTION
            ========================================= */}
        <div className="mt-12 animate-policy" style={{ animationDelay: "0.3s" }}>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-[#1a1a1a] font-bold hover:text-[#ff6a3d] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
}