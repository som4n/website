import { useState } from 'react'
import DashboardLayout from '../../layouts/DashboardLayout'
import { UserGroupIcon, CalendarIcon, ClipboardIcon } from '@heroicons/react/24/outline'
import { patients, appointments } from '../../data/mockData'

const navigation = [
  { name: 'Appointments', href: '/doctor', icon: CalendarIcon },
  { name: 'Patients', href: '/doctor/patients', icon: UserGroupIcon },
  { name: 'Prescriptions', href: '/doctor/prescriptions', icon: ClipboardIcon },
]

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState('appointments')

  return (
    <DashboardLayout navigation={navigation}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Doctor Dashboard</h1>
        
        {/* Stats Overview */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StatsCard title="Total Patients" value={patients.length} icon={UserGroupIcon} />
          <StatsCard title="Today's Appointments" value={appointments.length} icon={CalendarIcon} />
          <StatsCard title="Pending Reports" value="5" icon={ClipboardIcon} />
        </div>

        {/* Appointments List */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Today's Appointments</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {appointment.patientName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {appointment.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${appointment.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                          appointment.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-blue-100 text-blue-800'}`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        Start Consultation
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Patients */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Recent Patients</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Age
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {patient.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {patient.age}
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

export default DoctorDashboard