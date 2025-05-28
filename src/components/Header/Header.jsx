import styles from './Header.module.css';
import { Search, Bell, Plus } from 'lucide-react';

const Header = ({ user }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoSearch}>
        
        <div className={styles.searchBar}>
          <Search size={20} className={styles.searchIcon} />
          <input type="text" placeholder="Search" className={styles.searchInput} />
          <Bell className={styles.iconButton} size={22} />
        </div>
      </div>
      <div className={styles.headerControls}>
        <button className={styles.iconButton} aria-label="Notifications">
          <Bell size={22} />
        </button>
        <div className={styles.userProfile}>
          <img src={user.avatarUrl} alt={user.name} className={styles.userAvatar} />
          {/* <span className={styles.userName}>{user.name}</span> Display name if design requires */}
        </div>
        <button className={`${styles.iconButton} ${styles.addButton}`} aria-label="Add">
          <Plus size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;