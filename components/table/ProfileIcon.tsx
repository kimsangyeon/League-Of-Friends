import Image from 'next/image';
import {PROFILE_BLUR_URL, PROFILE_ICON_URL} from '@consts/index';

interface ProfileProps {
  profileIconId: number;
}

const ProfileIcon = ({profileIconId}: ProfileProps) => (
  <div>
    <Image
      src={`${PROFILE_ICON_URL}/${profileIconId}.png`}
      alt="profile icon"
      width={46}
      height={46}
      blurDataURL={PROFILE_BLUR_URL}
      placeholder="blur"
    />
  </div>
);

export default ProfileIcon;
