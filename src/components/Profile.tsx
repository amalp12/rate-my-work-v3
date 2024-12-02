import { AuthProps } from '@/types.d';
import { ProfileTabs } from './ProfileTabs'

const ProfileComplete = (props: AuthProps) => {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-100px)]">
            
        <ProfileTabs {...props}/>

        </div>
    )
};
export default ProfileComplete;
