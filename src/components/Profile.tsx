import { AuthProps } from '@/types.d';
import { ProfileTabs } from './ProfileTabs'

const ProfileComplete = ({authToken, setAuthToken, handleLogout}: AuthProps) => {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-100px)]">
            
        <ProfileTabs authToken={authToken} handleLogout={handleLogout} setAuthToken={setAuthToken} />

        </div>
    )
};
export default ProfileComplete;
