export default function AgentPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-8">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Agent Portal
        </h1>
        <p className="text-xl text-gray-700">
          Your complete toolkit for event management and attendee engagement
        </p>
      </header>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <DashboardCard 
            title="Attendee Management" 
            metric="Centralized" 
            subtitle="Guest Control"
            icon="👥"
            description="Comprehensive suite of tools for managing guest lists, tracking RSVPs, and monitoring attendance across all your events. Includes automated follow-ups and engagement tracking."
          />
          <DashboardCard 
            title="Event Customization" 
            metric="Branded" 
            subtitle="Event Settings"
            icon="🎨"
            description="Full control over event branding, scheduling, and venue settings. Create distinctive experiences with custom themes, materials, and registration flows."
          />
          <DashboardCard 
            title="Communication Center" 
            metric="Integrated" 
            subtitle="Engagement Hub"
            icon="💬"
            description="Unified communication platform for attendee interactions. Send announcements, manage responses, and coordinate follow-ups through multiple channels."
          />
          <DashboardCard 
            title="Performance Analytics" 
            metric="Real-time" 
            subtitle="Event Metrics"
            icon="📊"
            description="Track and analyze event performance with detailed metrics on attendance, engagement, and outcomes. Generate insights to optimize future events."
          />
        </div>
      </div>
    </div>
  );
}

const DashboardCard = ({ 
  title, 
  metric, 
  subtitle, 
  icon, 
  description 
}: { 
  title: string, 
  metric: string, 
  subtitle: string,
  icon: string,
  description: string 
}) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-3xl font-bold text-blue-600 mb-1">{metric}</p>
    <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);
