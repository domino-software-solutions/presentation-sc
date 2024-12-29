import Image from 'next/image';

export default function AttendeePresentation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Title Slide */}
      <section className="h-screen flex flex-col items-center justify-center p-8 mb-24 pt-64">
        <h1 className="text-7xl font-bold mb-8 text-blue-600 p-4">
          Attendee Portal
        </h1>
        <p className="text-2xl text-gray-700 mb-10 max-w-3xl text-center leading-relaxed">
          Your personal hub for discovering and managing financial education seminars
        </p>
        <Image 
          src="/attendee/att1.png"
          alt="Attendee Dashboard Overview"
          width={1200}
          height={675}
          className="rounded-lg shadow-xl"
        />
      </section>

      {/* Seminar Discovery */}
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="flex flex-col md:flex-row gap-12 max-w-[1400px]">
          <div className="flex flex-col justify-center md:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Easy Seminar Discovery</h2>
            <p className="text-xl text-gray-700 mb-4">
              We&apos;ve designed an intuitive interface that makes finding the right financial seminar effortless for your attendees.
            </p>
            <ul className="text-lg text-gray-600 space-y-3">
              <li>• Clean, modern seminar listings</li>
              <li>• Smart filtering by location and date</li>
              <li>• Clear presentation of event details</li>
              <li>• Frictionless registration flow</li>
            </ul>
          </div>
          <Image 
            src="/attendee/att2.png"
            alt="Seminar Browse Interface"
            width={900}
            height={600}
            className="rounded-lg shadow-xl md:w-2/3"
          />
        </div>
      </section>

      {/* My Seminars */}
      <section className="min-h-screen flex items-center justify-center p-8 bg-white">
        <div className="flex flex-col-reverse md:flex-row gap-12 max-w-[1400px]">
          <Image 
            src="/attendee/att3.png"
            alt="My Seminars Dashboard"
            width={900}
            height={600}
            className="rounded-lg shadow-xl md:w-2/3"
          />
          <div className="flex flex-col justify-center md:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Personalized Dashboard</h2>
            <p className="text-xl text-gray-700 mb-4">
              We&apos;ve created a centralized hub where your attendees can easily manage all their seminar registrations.
            </p>
            <ul className="text-lg text-gray-600 space-y-3">
              <li>• At-a-glance event overview</li>
              <li>• Real-time registration status</li>
              <li>• Instant access to event details</li>
              <li>• Self-service reservation management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RSVP Process */}
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="flex flex-col md:flex-row gap-12 max-w-[1400px]">
          <div className="flex flex-col justify-center md:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Streamlined Registration</h2>
            <p className="text-xl text-gray-700 mb-4">
              Our RSVP system is built for maximum efficiency, ensuring a smooth experience for your attendees.
            </p>
            <ul className="text-lg text-gray-600 space-y-3">
              <li>• One-click registration process</li>
              <li>• Automated confirmation emails</li>
              <li>• Smart reminder system</li>
              <li>• Flexible reservation management</li>
            </ul>
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
