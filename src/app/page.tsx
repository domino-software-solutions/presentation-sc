export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <header className="text-center max-w-4xl mx-auto pt-24 px-8">
        <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          CrowdConnectRSVP
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Enterprise-Grade Event Management Platform connecting administrators, agents, and attendees in a seamless ecosystem. Our solution replaces legacy systems with a modern, unified platform.
        </p>
      </header>

      {/* Core User Roles */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Three-Tiered Platform Architecture</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <RoleCard
            title="Administrative Portal"
            icon="👨‍💼"
            description="Complete platform oversight with global dashboard, agent management, and system-wide analytics. Includes comprehensive configuration tools and reporting capabilities."
          />
          <RoleCard
            title="Agent Portal"
            icon="👥"
            description="Specialized tools for attendee management, custom branding, event settings, and performance analytics. Features communication center for attendee engagement."
          />
          <RoleCard
            title="Attendee Portal"
            icon="🎯"
            description="User-friendly interface with personalized dashboards, easy seminar discovery, and registration. Includes automated email and text notifications."
          />
        </div>
      </section>

      {/* Technical Innovations */}
      <section className="max-w-6xl mx-auto px-8 pb-24">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Innovations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <FeatureItem icon="👑" text="Three-tiered access control system" />
            <FeatureItem icon="🔔" text="Real-time cross-platform notifications" />
          </div>
          <div className="space-y-4">
            <FeatureItem icon="🔄" text="Intelligent data segregation" />
            <FeatureItem icon="📊" text="Custom analytics engine" />
          </div>
          <div className="space-y-4">
            <FeatureItem icon="⚡" text="Automated workflow management" />
            <FeatureItem icon="🌐" text="Multi-tenant architecture" />
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="max-w-6xl mx-auto px-8 pb-24">
        <h2 className="text-3xl font-bold text-center mb-8">Future Enhancements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg shadow">
            <span className="text-2xl">📱</span>
            <p className="mt-2">Mobile Applications</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <span className="text-2xl">🤖</span>
            <p className="mt-2">Predictive Analytics</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <span className="text-2xl">🤝</span>
            <p className="mt-2">Enhanced Social Features</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <span className="text-2xl">📢</span>
            <p className="mt-2">Automated Marketing Tools</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <span className="text-2xl">🔌</span>
            <p className="mt-2">Extended API Ecosystem</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <span className="text-2xl">🎥</span>
            <p className="mt-2">Virtual Event Integration</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const RoleCard = ({ title, icon, description }: { title: string, icon: string, description: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="text-5xl mb-6">{icon}</div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const FeatureItem = ({ icon, text }: { icon: string, text: string }) => (
  <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <span className="text-2xl">{icon}</span>
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);
