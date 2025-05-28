import {
    LayoutDashboard,
    History,
    CalendarDays,
    Users,
    BarChart3,
 
    MessageSquare,
   Phone
} from 'lucide-react';

export const sidebarLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'history', label: 'History', icon: History },
    { id: 'calendar', label: 'Calendar', icon: CalendarDays },
    { id: 'appointments', label: 'Appointments', icon: Users }, // Using Users as a placeholder
    { id: 'statistics', label: 'Statistics', icon: BarChart3 },
   
    { id: 'chat', label: 'Chat', icon: MessageSquare },
    { id: 'support', label: 'Support', icon: Phone },
    
];