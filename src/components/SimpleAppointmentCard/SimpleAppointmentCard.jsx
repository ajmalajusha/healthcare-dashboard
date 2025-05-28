import styles from './SimpleAppointmentCard.module.css';
import { Heart } from 'lucide-react'; // Default/Placeholder icon

const SimpleAppointmentCard = ({ title, time, IconComponent, bgColor }) => {
  const ActualIcon = IconComponent || Heart; // Use provided icon or default

  // Determine icon color based on background lightness (simple heuristic)
  // For more accuracy, a color contrast library would be better.
  const isLightBg = (color) => {
    if (!color) return true;
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155; // Threshold for "light"
  };

  const iconColor = isLightBg(bgColor) ? '#555' : '#FFF'; // Dark icon on light bg, light on dark
  const textColor = isLightBg(bgColor) ? 'var(--text-primary)' : '#FFF';
  const timeColor = isLightBg(bgColor) ? 'var(--text-secondary)' : 'rgba(255,255,255,0.8)';


  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <div className={styles.iconWrapper} >
        <ActualIcon size={20} style={{ color: iconColor }} />
      </div>
      <div className={styles.details}>
        <p className={styles.title} style={{ color: textColor }}>{title}</p>
        <p className={styles.time} style={{ color: timeColor }}>{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;