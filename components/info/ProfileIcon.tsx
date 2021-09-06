import Image from 'next/image';
import styles from '@styles/common.module.css';
import { PROFILE_ICON_URL } from "@consts/index";

interface ProfileProps {
  profileIconId: string;
}

const ProfileIcon = ({profileIconId}: ProfileProps) => (
  <div className={styles.image}>
    <Image
      src={`${PROFILE_ICON_URL}/${profileIconId}.png`}
      alt="profile icon"
      width={46}
      height={46}
    />
  </div>
);

export default ProfileIcon;
