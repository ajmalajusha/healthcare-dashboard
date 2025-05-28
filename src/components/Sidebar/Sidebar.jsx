import styles from './Sidebar.module.css';
import { Settings} from 'lucide-react';

const Sidebar = ({ links }) => {
  return (
    <div className={styles.sidebar}>
    <aside className={styles.aside}>
      <div className={styles.generalSection}>
       <h1 className={styles.logo}><span style={{color:"#05dbf0"}}>Health</span>care.</h1>
      </div>
      <nav className={styles.nav}>
        <span className='ms-4 ' style={{color:"var(--text-secondary)"}}>General</span>
        <ul className='ms-5'>
          {links.map((link) => {
            const IconComponent = link.icon;
            return (
              <>
             
              <li key={link.id} className={styles.navItem}>
                {link.id=="chat" ? <br />:''}
                {link.id=="chat" ? <span className='ms-4 ' style={{color:"var(--text-secondary)"}}>Tools</span>:''}
                {link.id=="chat" ? <br />:''}
                
                <a href="#" className={`${styles.navLink} ${link.id === 'dashboard' ? styles.active : ''} `}> {/*${link.id === 'dashboard' ? styles.active : ''} */}
                  <IconComponent size={20} className={styles.navIcon} />
                  <span className={styles.navLabel}>{link.label}</span>
                </a>
              </li>

               </>
            );
          })}
               <li className={styles.settings}>
              
                
                <a href="#" className={`${styles.navLink}  `}> 
                  <Settings  size={20} className={styles.navIcon} />
                  <span className={styles.navLabel}>Setting</span>
                </a>
              </li>
        </ul>
      </nav>
      {/* Could add a footer for version or other info if needed */}
    </aside>
    </div>
  );
};

export default Sidebar;