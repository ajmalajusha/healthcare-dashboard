export const calendarDays = [
    // October 2021
    // Week 1
    null, null, null, null, null, 25, 26,
    27, 28, 29, 30, 31, 1, 2, // Dates from prev/next month can be styled differently
    // Week 2
    3, 4, 5, 6, 7, 8, 9,
    // ... and so on for a full month view or the snippet shown
];

// Simplified for the example view
export const appointmentsOnCalendar = {
    '26': [{ time: '10:00', type: 'appointment' }],
    '27': [{ time: '09:00', type: 'appointment' }, { time: '11:00', type: 'details' }],
    '28': [{ time: '10:00', type: 'appointment' }],
    '29': [{ time: '12:00', type: 'appointment' }, { time: '14:00', type: 'appointment' }],
    '30': [{ time: '10:00', type: 'appointment' }],
    '31': [{ time: '09:00', type: 'appointment' }, { time: '11:00', type: 'appointment' }],
};

export const detailedAppointments = [
    {
        type: 'Dentist',
        time: '09:00-11:00',
        doctor: 'Dr. Cameron Williamson',
        icon: 'Tooth', // You can map this to a Lucide icon
        bgColor: '#4A90E2', // Example color
    },
    {
        type: 'Physiotherapy Appointment',
        time: '11:00-12:00',
        doctor: 'Dr. Kevin Djones',
        icon: 'UserCheck', // Example icon
        bgColor: '#7E8CE0', // Example color
    },
];