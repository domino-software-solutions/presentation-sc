import Image from 'next/image';

export default function AgentPresentation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Title Slide */}
      <section className="min-h-screen flex flex-col items-center justify-center p-4 xs:p-6 sm:p-8 mb-4 sm:mb-8 md:mb-12 -mt-16 xs:mt-0 pt-2 xs:pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-blue-600 p-2 sm:p-3">
          Agent Portal
        </h1>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 md:mb-8 max-w-3xl text-center leading-relaxed px-4">
          Streamline your seminar management with powerful tools designed for financial advisors
        </p>
        <Image 
          src="/agent/agent1.png"
          alt="Agent Dashboard Overview"
          width={1200}
          height={675}
          className="rounded-lg shadow-xl w-[95%] max-w-[1200px]"
        />
      </section>

      {/* Attendee Management */}
      <section className="min-h-screen flex items-center justify-center p-4 xs:p-6 sm:p-8 mb-4 sm:mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-[1400px]">
          <div className="flex flex-col justify-center md:w-1/3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Attendee Management Tools</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Our comprehensive platform provides you with:
            </p>
            <div className="mt-4 space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Manage your seminars with our intuitive scheduling and organization tools
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Track attendance and check-ins with real-time updates and reporting
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Convert prospects into leads with our automated drip campaign system (Coming Soon)
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Access toll-free numbers for seamless communication with attendees
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Send and manage messages to keep in touch with your seminar participants (Coming Soon)
              </p>
            </div>
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
      <section className="min-h-screen flex items-center justify-center p-4 xs:p-6 sm:p-8 mb-4 sm:mb-8 md:mb-12 bg-white">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 max-w-[1400px]">
          <Image 
            src="/agent/agent3.png"
            alt="Event Settings Dashboard"
            width={900}
            height={600}
            className="rounded-lg shadow-xl md:w-2/3"
          />
          <div className="flex flex-col justify-center md:w-1/3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Real-Time Attendance Insights</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Track real-time check-ins, monitor attendance metrics, and access participant 
              profiles from a centralized dashboard. This focused view gives you complete 
              visibility into your seminar attendance and performance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
