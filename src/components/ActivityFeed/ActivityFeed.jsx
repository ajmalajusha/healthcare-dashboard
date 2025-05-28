import styles from './ActivityFeed.module.css';

const ActivityFeed = ({ activityData }) => {
  const { totalAppointments, weeklyActivity } = activityData;
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  return (
    <div className={styles.activityContainer}>
      <div className={styles.header}>
        <h3 className={styles.title}>Activity</h3>
        <p className={styles.subtitle}>{totalAppointments} appointments on this week</p>
      </div>
      <div className={styles.chart}>
        {weeklyActivity.map((value, index) => (
          <div key={days[index]} className={styles.barGroup}>
            <div className={styles.barWrapper}>
              <div className={styles.bar} style={{ height: `${value}%` }}></div>
            </div>
            <span className={styles.dayLabel}>{days[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;