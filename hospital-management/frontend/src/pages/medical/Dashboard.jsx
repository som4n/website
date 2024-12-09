import { useState } from 'react'
import DashboardLayout from '../../layouts/DashboardLayout'
import { BeakerIcon, ClipboardIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline'
import { medicines } from '../../data/mockData'

const navigation = [
  { name: 'Inventory', href: '/medical', icon: ArchiveBoxIcon },
  { name: 'Prescriptions', href: '/medical/prescriptions', icon: ClipboardIcon },
  { name: 'Lab Tests', href: '/medical/lab-tests', icon: BeakerIcon },
]

const MedicalDashboard = () => {
  const [activeTab, setActiveTab] = useState('inventory')

  return (
    <DashboardLayout navigation={navigation}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Medical Staff Dashboard</h1>
        
        {/* Stats Overview */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StatsCard title="Total Medicines" value={medicines.length} icon={ArchiveBoxIcon} />
          <StatsCard title="Low Stock Items" value="3" icon={BeakerIcon} />
          <StatsCard title="Pending Orders" value="2" icon={ClipboardIcon} />
        </div>

        {/* Inventory Status */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Inventory Status</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medicine Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Unit
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {medicines.map((medicine) => (
                  <tr key={medicine.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {medicine.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {medicine.stock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {medicine.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${medicine.stock > 100 ? 'bg-green-100 text-green-800' : 
                          medicine.stock > 50 ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {medicine.stock > 100 ? 'In Stock' : medicine.stock > 50 ? 'Low Stock' : 'Critical'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <PlusIcon className="h-5 w-5 mr-2" />
            Add New Medicine
          </button>
          <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
            <ClipboardIcon className="h-5 w-5 mr-2" />
            Create Purchase Order
          </button>
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

export default MedicalDashboard