import Image from 'next/image';

export default function AdminPresentation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Title Slide */}
      <section className="h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-2xl text-gray-700 mb-10 max-w-3xl text-center leading-relaxed">
          Comprehensive Administrative Control Panel for Platform-Wide Management and Oversight
        </p>
        <Image 
          src="/admin/admin1.png"
          alt="Agent Management Dashboard"
          width={800}
          height={450}
          className="rounded-lg shadow-xl"
        />
      </section>

      {/* Agent Creation */}
      <section className="h-screen flex flex-col items-center justify-center p-8">
        <div className="grid grid-cols-2 gap-12 max-w-7xl">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">Agent Onboarding</h2>
            <p className="text-xl text-gray-700 mb-4">
              Complete agent profile management system
            </p>
            <ul className="text-lg text-gray-600 space-y-3">
              <li>• Comprehensive contact information</li>
              <li>• Company details</li>
              <li>• Address management</li>
              <li>• Secure login credentials</li>
            </ul>
          </div>
          <Image 
            src="/admin/admin2.png"
            alt="Agent Creation Form"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Seminar Dashboard */}
      <section className="h-screen flex flex-col items-center justify-center p-8 bg-white">
        <div className="grid grid-cols-2 gap-12 max-w-7xl">
          <Image 
            src="/admin/admin3.png"
            alt="Seminar Dashboard"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">Seminar Management</h2>
            <p className="text-xl text-gray-700 mb-4">
              Comprehensive seminar tracking and management
            </p>
            <ul className="text-lg text-gray-600 space-y-3">
              <li>• Active seminar overview</li>
              <li>• Toll-free number management</li>
              <li>• Messaging center</li>
              <li>• Quick seminar creation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Attendance Tracking */}
      <section className="h-screen flex flex-col items-center justify-center p-8">
        <div className="grid grid-cols-2 gap-12 max-w-7xl">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">Attendance Management</h2>
            <p className="text-xl text-gray-700 mb-4">
              Real-time attendance tracking and reporting
            </p>
            <ul className="text-lg text-gray-600 space-y-3">
              <li>• Multi-agent support</li>
              <li>• Registration status tracking</li>
              <li>• Attendee information</li>
              <li>• Date-based organization</li>
            </ul>
          </div>
          <Image 
            src="/admin/admin5.png"
            alt="Attendance Management"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Call to Action */}
     
    </div>
  );
}
