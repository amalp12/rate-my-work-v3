export interface AuthProps {
    authToken: string;
    setAuthToken: (token: string) => void;
    handleLogout: () => void;
    isRecruiter: boolean;
    setIsRecruiter: (isRecruiter: boolean) => void;
    isProfileComplete: boolean;
    setIsProfileComplete: (isProfileComplete: boolean) => void;
}
