import styles from './AnatomySection.module.css';
import anotomy from "../../../public/anatomy.png"
import knee from "../../../public/knee.png"
import { ZoomIn} from 'lucide-react';

const AnatomySection = ({ indicators }) => {
  return (
    <div className={styles.anatomySection}>
      <img src={anotomy} alt="Anatomical illustration" className={styles.anatomyImage} /> <ZoomIn size={20} style={{position:"absolute",left:280,bottom:290,color:"#2e3192"}}/>
      <span className='' style={{position:"absolute",left:240,bottom:220,padding:"5px",background:"#2e3192",color:"#fff",borderRadius:'10px'}}> ❤️Healthy Heart  &nbsp;</span>
      <span className='flex ' style={{position:"absolute",left:49,bottom:80,padding:"5px",background:"#05dbf0",color:"#2e3192",borderRadius:'10px'}}><img src={knee} alt=""  style={{height:"15px",marginTop:'2px'}}/> Healthy Leg </span>
    </div>
  );
};

export default AnatomySection;