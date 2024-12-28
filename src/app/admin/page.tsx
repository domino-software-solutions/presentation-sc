export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-8">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Admin Portal
        </h1>
        <p className="text-xl text-gray-700">
          Global dashboard for comprehensive platform oversight and management
        </p>
      </header>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DashboardCard 
            title="Global Dashboard" 
            metric="Real-time" 
            subtitle="Platform Overview"
            icon="🌐"
            description="Centralized view of all platform activities, including active seminars, user engagement metrics, and system health monitoring."
          />
          <DashboardCard 
            title="Seminar Management" 
            metric="Unlimited" 
            subtitle="Seminar Creation"
            icon="📚"
            description="Comprehensive tools for creating, scheduling, and managing seminars. Includes attendance tracking and resource allocation."
          />
          <DashboardCard 
            title="Agent Management" 
            metric="Complete" 
            subtitle="Agent Tools"
            icon="👥"
            description="Streamlined agent onboarding, performance tracking, and territory management capabilities."
          />
          <DashboardCard 
            title="Analytics Center" 
            metric="Advanced" 
            subtitle="Reporting Tools"
            icon="📊"
            description="System-wide analytics with customizable reports, performance metrics, and trend analysis capabilities."
          />
          <DashboardCard 
            title="Platform Settings" 
            metric="Full" 
            subtitle="System Control"
            icon="⚙️"
            description="Comprehensive platform configuration options, including user permissions, notification settings, and system parameters."
          />
          <DashboardCard 
            title="Resource Center" 
            metric="Centralized" 
            subtitle="Documentation"
            icon="📖"
            description="Access to administrative guides, platform documentation, and training materials for system management."
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
