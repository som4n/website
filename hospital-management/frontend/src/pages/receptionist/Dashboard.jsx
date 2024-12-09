import DashboardLayout from '../../layouts/DashboardLayout'
import { CalendarIcon, UserGroupIcon, PhoneIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Queue', href: '/receptionist', icon: UserGroupIcon },
  { name: 'Appointments', href: '/receptionist/appointments', icon: CalendarIcon },
  { name: 'Patient Registration', href: '/receptionist/register', icon: UserGroupIcon },
]

const ReceptionistDashboard = () => {
  return (
    <DashboardLayout navigation={navigation}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Reception Dashboard</h1>
        
        {/* Current Queue */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Current Queue</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
            {/* Add queue list here */}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <button className="bg-indigo-600 text-white p-4 rounded-lg">
            Register New Patient
          </button>
          <button className="bg-green-600 text-white p-4 rounded-lg">
            Schedule Appointment
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ReceptionistDashboard