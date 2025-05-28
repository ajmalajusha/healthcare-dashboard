import styles from './DashboardOverview.module.css';
import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';

const DashboardOverview = ({ anatomyIndicators, healthStatusCardsData }) => {
  return (
    <div className={styles.overviewContainer}>
      <AnatomySection indicators={anatomyIndicators} />
      <HealthStatusCards cards={healthStatusCardsData} />
    </div>
  );
};

export default DashboardOverview;