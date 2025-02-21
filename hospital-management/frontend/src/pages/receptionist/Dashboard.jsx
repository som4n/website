import { useState } from 'react'
import DashboardLayout from '../../layouts/DashboardLayout'
import { UserGroupIcon, CalendarIcon, PlusIcon } from '@heroicons/react/24/outline'
import { patients, appointments } from '../../data/mockData'

const navigation = [
  { name: 'Queue', href: '/receptionist', icon: UserGroupIcon },
  { name: 'Appointments', href: '/receptionist/appointments', icon: CalendarIcon },
  { name: 'Register Patient', href: '/receptionist/register', icon: PlusIcon },
]

const ReceptionistDashboard = () => {
  const [activeTab, setActiveTab] = useState('queue')

  return (
    <DashboardLayout navigation={navigation}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Reception Dashboard</h1>
        
        {/* Stats Overview */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StatsCard title="Waiting Patients" value="3" icon={UserGroupIcon} />
          <StatsCard title="Today's Appointments" value={appointments.length} icon={CalendarIcon} />
          <StatsCard title="Total Patients" value={patients.length} icon={UserGroupIcon} />
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <PlusIcon className="h-5 w-5 mr-2" />
            Register New Patient
          </button>
          <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
            <CalendarIcon className="h-5 w-5 mr-2" />
            Schedule Appointment
          </button>
        </div>

        {/* Current Queue */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Current Queue</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Token No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Doctor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {patients.map((patient, index) => (
                  <tr key={patient.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {`A${index + 1}`}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {patient.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {patient.doctor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${patient.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                          patient.status === 'In Treatment' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-blue-100 text-blue-800'}`}>
                        {patient.status}
                      </span>
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

export default ReceptionistDashboard