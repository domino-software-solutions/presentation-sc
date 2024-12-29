import Image from 'next/image';

export default function AdminPresentation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Title Slide */}
      <section className="min-h-screen flex flex-col items-center justify-center p-4 xs:p-6 sm:p-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24 pt-32 sm:pt-40 md:pt-48 lg:pt-64">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 text-blue-600 p-2 sm:p-3 md:p-4">
          Admin Dashboard
        </h1>
        <p className="text-lg xs:text-xl sm:text-2xl text-gray-700 mb-6 sm:mb-8 md:mb-10 max-w-3xl text-center leading-relaxed px-4">
          Streamlined Seminar Management Platform for Enterprise-Grade Event Administration
        </p>
        <Image 
          src="/admin/admin1.png"
          alt="Agent Management Dashboard"
          width={1200}
          height={675}
          className="rounded-lg shadow-xl w-[90%] max-w-[1200px]"
        />
      </section>

      {/* Agent Creation */}
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="flex flex-col md:flex-row gap-12 max-w-[1400px]">
          <div className="flex flex-col justify-center md:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Agent Onboarding</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our comprehensive agent management system provides:
            </p>
            <div className="mt-4 space-y-4">
              <p className="text-xl text-gray-700">
                Complete profile management with comprehensive contact information
              </p>
              <p className="text-xl text-gray-700">
                Detailed company information and business credentials
              </p>
              <p className="text-xl text-gray-700">
                Multi-location address management for nationwide operations
              </p>
              <p className="text-xl text-gray-700">
                Secure authentication and role-based access control
              </p>
            </div>
          </div>
          <Image 
            src="/admin/admin2.png"
            alt="Agent Creation Form"
            width={900}
            height={600}
            className="rounded-lg shadow-xl md:w-2/3"
          />
        </div>
      </section>

      {/* Seminar Dashboard */}
      <section className="min-h-screen flex items-center justify-center p-8 bg-white">
        <div className="flex flex-col-reverse md:flex-row gap-12 max-w-[1400px]">
          <Image 
            src="/admin/admin3.png"
            alt="Seminar Dashboard"
            width={900}
            height={600}
            className="rounded-lg shadow-xl md:w-2/3"
          />
          <div className="flex flex-col justify-center md:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Seminar Management</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Monitor and manage all seminars through our centralized dashboard. Get complete 
              visibility into event operations, track performance metrics, and streamline 
              communication across your entire organization.
            </p>
          </div>
        </div>
      </section>

      {/* Attendance Tracking */}
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="flex flex-col md:flex-row gap-12 max-w-[1400px]">
          <div className="flex flex-col justify-center md:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Attendance Management</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our enterprise attendance system offers:
            </p>
            <div className="mt-4 space-y-4">
              <p className="text-xl text-gray-700">
                Real-time attendance tracking across multiple agents
              </p>
              <p className="text-xl text-gray-700">
                Comprehensive registration status monitoring
              </p>
              <p className="text-xl text-gray-700">
                Detailed attendee profiles and contact management
              </p>
              <p className="text-xl text-gray-700">
                Advanced reporting and analytics capabilities
              </p>
            </div>
          </div>
          <Image 
            src="/admin/admin5.png"
            alt="Attendance Management"
            width={900}
            height={600}
            className="rounded-lg shadow-xl md:w-2/3"
          />
        </div>
      </section>

      {/* Call to Action */}
     
    </div>
  );
}
