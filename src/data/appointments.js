import { CheckCircle, Eye, HeartPulse, Brain } from 'lucide-react';

export const upcomingScheduleData = {
    thursday: [
        { id: 1, title: 'Health checkup complete', time: '11:00 AM', icon: CheckCircle, color: '#D3E8FF' },
        { id: 2, title: 'Ophthalmologist', time: '14:00 PM', icon: Eye, color: '#D3E8FF' },
    ],
    saturday: [
        { id: 3, title: 'Cardiologist', time: '12:00 AM', icon: HeartPulse, color: '#FEE5E5' },
        { id: 4, title: 'Neurologist', time: '16:00 PM', icon: Brain, color: '#FEE5E5' },
    ],
};

export const activityData = {
    totalAppointments: 3,
    // For static bar chart: [Mon, Tue, Wed, Thu, Fri, Sat, Sun] heights (e.g., percentage)
    weeklyActivity: [30, 50, 20, 70, 40, 60, 25],
};