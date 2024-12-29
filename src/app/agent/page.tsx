import Image from 'next/image';

export default function AgentPresentation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Title Slide */}
      <section className="min-h-screen flex flex-col items-center p-8 pt-14">
        <h1 className="text-7xl font-bold mb-8 text-blue-600 p-4">
          Agent Portal
        </h1>
        <p className="text-2xl text-gray-700 mb-16 max-w-3xl text-center leading-relaxed">
          Streamline your seminar management with powerful tools designed for financial advisors
        </p>
        <Image 
          src="/agent/agent1.png"
          alt="Agent Dashboard Overview"
          width={1200}
          height={675}
          className="rounded-lg shadow-xl mb-24"
        />
      </section>

      {/* Attendee Management */}
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="flex flex-col md:flex-row gap-12 max-w-[1400px]">
          <div className="flex flex-col justify-center md:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Attendee Management Tools</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Efficiently manage your seminar attendees with our comprehensive dashboard. 
              Track confirmations, view attendee details, and manage guest statuses all in one place. 
              Perfect for financial advisors organizing educational seminars.
            </p>
          </div>
          <Image 
            src="/agent/agent2.png"
            alt="Attendee Management Interface"
            width={900}
            height={600}
            className="rounded-lg shadow-xl md:w-2/3"
          />
        </div>
      </section>

      {/* Event Settings */}
      <section className="min-h-screen flex items-center justify-center p-8 bg-white">
        <div className="flex flex-col-reverse md:flex-row gap-12 max-w-[1400px]">
          <Image 
            src="/agent/agent3.png"
            alt="Event Settings Dashboard"
            width={900}
            height={600}
            className="rounded-lg shadow-xl md:w-2/3"
          />
          <div className="flex flex-col justify-center md:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Custom Branding & Event Settings</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Personalize your seminars with custom branding and detailed event settings. 
              Set up event dates, manage venue information, and maintain your professional 
              identity across all attendee touchpoints.
            </p>
          </div>
        </div>
      </section>

      {/* Communication Center */}
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="flex flex-col md:flex-row gap-12 max-w-[1400px]">
          <div className="flex flex-col justify-center md:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Communication Center</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Keep your attendees informed and engaged with integrated communication tools. 
              Send confirmations, manage RSVPs, and handle all attendee correspondence 
              through a centralized messaging system.
            </p>
          </div>
          <Image 
            src="/agent/agent1.png"
            alt="Communication Center Interface"
            width={900}
            height={600}
            className="rounded-lg shadow-xl md:w-2/3"
          />
        </div>
      </section>

      {/* Analytics */}
      <section className="min-h-screen flex items-center justify-center p-8 bg-white">
        <div className="flex flex-col-reverse md:flex-row gap-12 max-w-[1400px]">
          <Image 
            src="/agent/agent2.png"
            alt="Performance Analytics Dashboard"
            width={900}
            height={600}
            className="rounded-lg shadow-xl md:w-2/3"
          />
          <div className="flex flex-col justify-center md:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Performance Analytics</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Track your seminar success with detailed analytics. Monitor attendance rates, 
              measure engagement metrics, and gain valuable insights to optimize your future 
              financial education events.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
