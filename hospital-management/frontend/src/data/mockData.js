export const users = [
  { id: 1, email: 'admin@hospital.com', password: 'admin123', role: 'admin', name: 'Admin User' },
  { id: 2, email: 'doctor@hospital.com', password: 'doctor123', role: 'doctor', name: 'Dr. Smith' },
  { id: 3, email: 'receptionist@hospital.com', password: 'reception123', role: 'receptionist', name: 'Jane Doe' },
  { id: 4, email: 'medical@hospital.com', password: 'medical123', role: 'medical', name: 'John Medical' },
]

export const patients = [
  { id: 1, name: 'Alice Johnson', age: 35, status: 'Waiting', doctor: 'Dr. Smith' },
  { id: 2, name: 'Bob Wilson', age: 45, status: 'In Treatment', doctor: 'Dr. Smith' },
  { id: 3, name: 'Carol Brown', age: 28, status: 'Completed', doctor: 'Dr. Smith' },
]

export const appointments = [
  { id: 1, patientName: 'Alice Johnson', date: '2024-03-25', time: '09:00', status: 'Scheduled' },
  { id: 2, patientName: 'Bob Wilson', date: '2024-03-25', time: '10:00', status: 'In Progress' },
  { id: 3, patientName: 'Carol Brown', date: '2024-03-25', time: '11:00', status: 'Completed' },
]

export const medicines = [
  { id: 1, name: 'Paracetamol', stock: 500, unit: 'tablets' },
  { id: 2, name: 'Amoxicillin', stock: 200, unit: 'capsules' },
  { id: 3, name: 'Ibuprofen', stock: 300, unit: 'tablets' },
] 