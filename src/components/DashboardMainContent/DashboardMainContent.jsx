import styles from './DashboardMainContent.module.css';
import DashboardOverview from '../DashboardOverview/DashboardOverview';
import CalendarView from '../CalendarView/CalendarView';
// import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import { Search, Bell, Plus } from 'lucide-react';
const DashboardMainContent = ({
  anatomyIndicators,
  healthStatusCardsData,
  calendarDays,
  appointmentsOnCalendar,
  detailedAppointments,
//   upcomingScheduleData,
  activityData
}) => {
  return (
    <div className={styles.dashboardGrid}>
      <div className={styles.mainColumn}>
         <div className={styles.logoSearch} style={{marginTop:"0px"}}>
        
        <div className={styles.searchBar}>
          <Search size={20} className={styles.searchIcon} />
          <input type="text" placeholder="Search" className={styles.searchInput} />
          <Bell className={styles.iconButton} size={26} />
        </div>
      </div>
        <div className='' style={{display:"flex",justifyContent:"space-between"}}> 

        <h2 className={styles.dashboardTitle}>Dashboard</h2> <span>This Week <i className="fa fa-angle-down"></i></span>
        </div>
        <DashboardOverview
          anatomyIndicators={anatomyIndicators}
          healthStatusCardsData={healthStatusCardsData}
        />
        <ActivityFeed activityData={activityData} />
      </div>
      <div className={styles.sidebarColumn}>
        <CalendarView
          calendarDays={calendarDays}
          appointmentsOnCalendar={appointmentsOnCalendar}
          detailedAppointments={detailedAppointments}
        />
        {/* <UpcomingSchedule upcomingScheduleData={upcomingScheduleData} /> */}
      </div>
    </div>
  );
};

export default DashboardMainContent;