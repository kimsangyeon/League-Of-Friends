import Image from 'next/image';
import styles from '@styles/common.module.css';
import { PROFILE_ICON_URL } from "@consts/index";

interface ProfileProps {
  profileIconId: number;
  name: string;
}

const ProfileIcon = ({profileIconId, name}: ProfileProps) => (
  <div className={styles.profileWrap}>
    <div className={styles.image}>
      <Image
        src={`${PROFILE_ICON_URL}/${profileIconId}.png`}
        alt="profile icon"
        width={46}
        height={46}
      />
    </div>
    {name}
  </div>
);

export default ProfileIcon;
