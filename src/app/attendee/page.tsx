import Image from 'next/image';

export default function AttendeePresentation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Title Slide */}
      <section className="min-h-screen flex flex-col items-center justify-center p-4 xs:p-6 sm:p-8 mb-4 sm:mb-8 md:mb-12 -mt-16 xs:mt-0 pt-2 xs:pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-blue-600 p-2 sm:p-3">
          Attendee Portal
        </h1>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 md:mb-8 max-w-3xl text-center leading-relaxed px-4">
          A modern, intuitive portal where attendees can discover and manage their upcoming seminars. They can find and register for events that interest them in just a few clicks.
        </p>
        <Image 
          src="/attendee/att1.png"
          alt="Attendee Dashboard Overview"
          width={1200}
          height={675}
          className="rounded-lg shadow-xl w-[95%] max-w-[1200px]"
        />
      </section>

      {/* Seminar Discovery */}
      <section className="min-h-screen flex items-center justify-center p-4 xs:p-6 sm:p-8 mb-4 sm:mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-[1400px]">
          <div className="flex flex-col justify-center md:w-1/3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Easy Seminar Discovery</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Our intuitive interface provides:
            </p>
            <div className="mt-4 space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Clean, modern seminar listings for easy browsing
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Smart filtering by location and date to find relevant events
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Clear presentation of event details and important information
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Frictionless registration flow for quick sign-ups
              </p>
            </div>
          </div>
          <Image 
            src="/attendee/att1.png"
            alt="Seminar Browse Interface"
            width={900}
            height={600}
            className="rounded-lg shadow-xl md:w-2/3"
          />
        </div>
      </section>

      {/* My Seminars */}
      <section className="min-h-screen flex items-center justify-center p-4 xs:p-6 sm:p-8 mb-4 sm:mb-8 md:mb-12 bg-white">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 max-w-[1400px]">
          <Image 
            src="/attendee/att3.png"
            alt="My Seminars Dashboard"
            width={900}
            height={600}
            className="rounded-lg shadow-xl md:w-2/3"
          />
          <div className="flex flex-col justify-center md:w-1/3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Attendee Dashboard</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Each attendee gets access to:
            </p>
            <div className="mt-4 space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Comprehensive overview of their registered events and history
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Live status tracking of registration confirmations and changes
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Detailed event information including venue locations and schedules
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Built-in reservation management capabilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Process */}
      <section className="min-h-screen flex items-center justify-center p-4 xs:p-6 sm:p-8 mb-4 sm:mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-[1400px]">
          <div className="flex flex-col justify-center md:w-1/3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Streamlined Registration</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Attendees benefit from our efficient RSVP system featuring:
            </p>
            <div className="mt-4 space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                One-click registration process for instant attendee sign-ups
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Automated confirmation emails/texts sent to each attendee(coming soon)
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Smart reminder system keeping attendees informed(coming soon)
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Flexible options for attendees to modify their reservations
              </p>
            </div>
          </div>
          <Image 
            src="/attendee/att1.png"
            alt="RSVP Interface"
            width={900}
            height={600}
            className="rounded-lg shadow-xl md:w-2/3"
          />
        </div>
      </section>
    </div>
  );
}
