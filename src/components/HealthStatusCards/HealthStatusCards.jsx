import styles from './HealthStatusCards.module.css';
import { TrendingUp, ChevronRight } from 'lucide-react'; // Example icon
import lungs from "../../../public/Lungs.png"

const HealthStatusCards = ({ cards }) => {
  return (
    <div className={styles.cardsContainer}>
      {cards.map(card => (
        <div key={card.id} className={styles.statusCard}>
          <div className={styles.cardHeader}>
          <img src={card.icon} alt=""  style={{height:'30px',marginRight:'5%'}}/>
            <h4 className={styles.cardTitle}>{card.title}</h4>
        
          </div>
          <p className={styles.cardDate}>{card.date}</p>
          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBar}
              style={{ width: `${card.statusValue}%`, backgroundColor: card.statusColor }}
            ></div>
          </div>
        </div>
      ))}
      <a href="#" className={styles.detailsLink}>
        Details <ChevronRight size={16} />
      </a>
    </div>
  );
};

export default HealthStatusCards;