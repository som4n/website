import { useState } from 'react'
import DashboardLayout from '../../layouts/DashboardLayout'
import { UserGroupIcon, ChartBarIcon, CalendarIcon } from '@heroicons/react/24/outline'
import { users, patients, appointments } from '../../data/mockData'

const navigation = [
  { name: 'Overview', href: '/admin', icon: ChartBarIcon },
  { name: 'Staff', href: '/admin/staff', icon: UserGroupIcon },
  { name: 'Appointments', href: '/admin/appointments', icon: CalendarIcon },
]

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <DashboardLayout navigation={navigation}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
        
        {/* Stats Overview */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StatsCard title="Total Staff" value={users.length} icon={UserGroupIcon} />
          <StatsCard title="Total Patients" value={patients.length} icon={UserGroupIcon} />
          <StatsCard title="Today's Appointments" value={appointments.length} icon={CalendarIcon} />
        </div>

        {/* Staff List */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Staff Members</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

const StatsCard = ({ title, value, icon: Icon }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Icon className="h-6 w-6 text-gray-400" />
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd className="text-lg font-medium text-gray-900">{value}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
)

export default AdminDashboard
