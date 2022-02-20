import Image from 'next/image';
import {PROFILE_ICON_URL} from "@consts/index";

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
    />
  </div>
);

export default ProfileIcon;
