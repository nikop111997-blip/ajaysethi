import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  const lastUpdated = "May 2026"; // Update as needed

  return (
    <section className="w-full dark:bg-white py-20 md:py-32 px-6 md:px-12 font-sans overflow-hidden">
      
      {/* PURE CSS SERVER-SIDE ANIMATIONS */}
      <style suppressHydrationWarning>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-terms {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0; 
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* =========================================
            HEADER SECTION
            ========================================= */}
        <div className="text-center mb-12 animate-terms" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] tracking-tight mb-6">
            Terms of <span className="text-[#ff6a3d]">Service</span>
          </h1>
          <p className="text-gray-800 text-lg">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* =========================================
            DOCUMENT CONTENT CARD
            ========================================= */}
        <div 
          className="w-full bg-white border border-gray-100 rounded-[1rem] p-8 md:p-12 lg:p-16 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.05)] animate-terms"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="prose prose-lg max-w-none text-gray-800">
            
            <p className="lead text-[#1a1a1a] font-medium text-lg mb-8">
              Welcome to Kayapalat Wellness and Ajay Sethi Coaching. By accessing our website, purchasing our products, or enrolling in our coaching programs, you agree to comply with and be bound by the following Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 border-b border-gray-100 pb-2">
              1. Nature of Services (Disclaimer)
            </h2>
            <p className="mb-4">
              <strong>Not Medical Advice:</strong> Ajay Sethi and the coaches at Kayapalat are fitness, wellness, and business transformation specialists, not licensed medical doctors. Our coaching, nutritional guidance, and workout systems are designed for educational and informational purposes only.
            </p>
            <p className="mb-6">
              You should always consult with a qualified healthcare professional before beginning any new diet, exercise, or lifestyle program, especially if you have pre-existing medical conditions. You engage in our programs at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 border-b border-gray-100 pb-2">
              2. Program Enrollment & Expectations
            </h2>
            <p className="mb-4">
              By enrolling in any of our personal wellness, corporate wellness, or business mentorship programs, you understand that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-[#ff6a3d]">
              <li><strong>Results Vary:</strong> Testimonials and success stories represent exceptional results. Your individual success depends on your dedication, consistency, baseline health, and adherence to the systems provided. We do not guarantee specific weight loss or financial results.</li>
              <li><strong>Commitment:</strong> Our programs require active participation. Lack of engagement or failure to follow the agreed-upon protocols will hinder your progress.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 border-b border-gray-100 pb-2">
              3. Payments, Refunds, and Cancellations
            </h2>
            <p className="mb-4">
              <strong>Billing:</strong> All payments for coaching, memberships, or digital products are due upfront or according to the agreed-upon payment plan schedule.
            </p>
            <p className="mb-6">
              <strong>Refund Policy:</strong> Due to the digital nature of our educational materials and the immediate allocation of coaching time, <strong>all sales are final.</strong> We do not offer refunds for digital products, completed coaching sessions, or partial months of the KP PRO membership. If you wish to cancel an ongoing subscription, you must notify us at least 7 days before your next billing cycle.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 border-b border-gray-100 pb-2">
              4. Intellectual Property
            </h2>
            <p className="mb-6">
              All content provided on this website, within our private communities, and during coaching sessions—including text, videos, PDFs, methodologies (such as the Kayapalat Method), and logos—is the exclusive intellectual property of Ajay Sethi and Kayapalat Wellness. You may not copy, reproduce, distribute, or create derivative works from this material without express written consent.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 border-b border-gray-100 pb-2">
              5. Community Guidelines
            </h2>
            <p className="mb-6">
              If you participate in our group coaching programs or private online communities, you agree to maintain a respectful, supportive environment. Harassment, hate speech, spamming, or unauthorized solicitation of other members will result in immediate termination of your access without a refund.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 border-b border-gray-100 pb-2">
              6. Limitation of Liability
            </h2>
            <p className="mb-6">
              To the maximum extent permitted by law, Ajay Sethi, Kayapalat Wellness, and its employees shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of our website, participation in our programs, or reliance on any information provided.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 border-b border-gray-100 pb-2">
              7. Contact Information
            </h2>
            <p className="mb-6">
              If you have any questions or require clarification regarding these terms, please contact us prior to purchasing any services:
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
        <div className="mt-12 animate-terms" style={{ animationDelay: "0.3s" }}>
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