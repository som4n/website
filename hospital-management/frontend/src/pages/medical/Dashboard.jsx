import DashboardLayout from '../../layouts/DashboardLayout'
import { BeakerIcon, ClipboardIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Inventory', href: '/medical', icon: ArchiveBoxIcon },
  { name: 'Prescriptions', href: '/medical/prescriptions', icon: ClipboardIcon },
  { name: 'Lab Tests', href: '/medical/lab-tests', icon: BeakerIcon },
]

const MedicalDashboard = () => {
  return (
    <DashboardLayout navigation={navigation}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Medical Staff Dashboard</h1>
        
        {/* Inventory Status */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Low Stock Items</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
            {/* Add inventory list here */}
          </div>
        </div>

        {/* Pending Prescriptions */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Pending Prescriptions</h2>
          {/* Add prescription list here */}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default MedicalDashboard