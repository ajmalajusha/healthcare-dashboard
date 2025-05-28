import styles from './App.module.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';

// Mock data imports
import { sidebarLinks } from './data/navigation';
import { anatomyIndicators, healthStatusCardsData } from './data/healthData';
import { calendarDays, appointmentsOnCalendar, detailedAppointments } from './data/calendarData';
import {  activityData } from './data/appointments';

function App() {
  return (
    <div className={styles.appLayout}>
      {/* <Header user={{ name: 'User Name', avatarUrl: '/user-avatar.png' }} /> */}
      <Sidebar links={sidebarLinks} />
      <main className={styles.mainContentContainer}>
        <DashboardMainContent
          anatomyIndicators={anatomyIndicators}
          healthStatusCardsData={healthStatusCardsData}
          calendarDays={calendarDays}
          appointmentsOnCalendar={appointmentsOnCalendar}
          detailedAppointments={detailedAppointments}
          // upcomingScheduleData={upcomingScheduleData}
          activityData={activityData}
        />
      </main>
    </div>
  );
}

export default App;