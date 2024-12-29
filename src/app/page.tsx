export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <header className="text-center max-w-4xl mx-auto pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          CrowdConnectRSVP
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Enterprise-Grade Event Management Platform connecting administrators, agents, and attendees in a seamless ecosystem. Our solution replaces legacy systems with a modern, unified platform.
        </p>
      </header>

      {/* Core User Roles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Three-Tiered Platform Architecture</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <RoleCard
            title="Administrative Portal"
            icon="👨‍💼"
            description="Complete platform oversight with global dashboard, agent management, and system-wide analytics. Includes comprehensive configuration tools and reporting capabilities."
          />
          <RoleCard
            title="Agent Portal"
            icon="👥"
            description="Powerful tools for managing seminars, tracking attendance, and monitoring performance metrics. Features automated communication tools and real-time attendee insights."
          />
          <RoleCard
            title="Attendee Portal"
            icon="🎯"
            description="User-friendly interface with intuitive seminar browsing, simple registration flow, and event management. Includes detailed venue information and ability to modify reservations."
          />
        </div>
      </section>

      {/* Technical Innovations */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Platform Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="space-y-3 sm:space-y-4">
            <FeatureItem icon="📊" text="Comprehensive reporting across all events and agents" />
            <FeatureItem icon="👥" text="Simplified agent onboarding and management" />
          </div>
          <div className="space-y-3 sm:space-y-4">
            <FeatureItem icon="🔔" text="Instant updates on event changes and registrations" />
            <FeatureItem icon="📈" text="Track performance metrics and attendance trends" />
          </div>
          <div className="space-y-3 sm:space-y-4">
            <FeatureItem icon="🤝" text="Seamless communication between all user levels" />
            <FeatureItem icon="⚙️" text="Customizable platform settings and branding" />
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      
    </div>
  );
}

const RoleCard = ({ title, icon, description }: { title: string, icon: string, description: string }) => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{icon}</div>
    <h3 className="text-xl sm:text-2xl font-bold mb-3">{title}</h3>
    <ul className="text-sm sm:text-base text-gray-600 space-y-2">
      {description.split('. ').map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="mr-2 text-blue-500">•</span>
          <span>{item.trim()}</span>
        </li>
      ))}
    </ul>
  </div>
);

const FeatureItem = ({ icon, text }: { icon: string, text: string }) => (
  <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow h-[80px] sm:h-[90px]">
    <span className="text-xl sm:text-2xl flex-shrink-0">{icon}</span>
    <span className="text-sm sm:text-base text-gray-700 font-medium">{text}</span>
  </div>
);
