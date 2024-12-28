export default function AttendeeDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-8">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Attendee Dashboard
        </h1>
        <p className="text-xl text-gray-700">
          Your attendees&apos; central hub for seminar management
        </p>
      </header>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <DashboardCard 
            title="Enrolled Seminars" 
            metric="View" 
            subtitle="Active Registrations"
            icon="📅"
            description="Attendees can easily track their registered seminars, access event materials, and view their personalized schedule."
          />
          <DashboardCard 
            title="Seminar Catalog" 
            metric="Explore" 
            subtitle="Available Events"
            icon="🔍"
            description="Showcase your upcoming seminars with detailed information, allowing attendees to discover and register for new events."
          />
          <DashboardCard 
            title="Advanced Search" 
            metric="Filter" 
            subtitle="Smart Discovery"
            icon="🎯"
            description="Empower attendees to find relevant seminars using powerful filters for dates, topics, locations, and presenters."
          />
          <DashboardCard 
            title="Notification Center" 
            metric="Track" 
            subtitle="Real-time Updates"
            icon="🔔"
            description="Keep attendees informed with automated reminders, schedule changes, and important announcements about their events."
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
