export interface AuthProps {
    authToken: string;
    setAuthToken: (token: string) => void;
    handleLogout: () => void;
    isRecruiter: boolean;
    setIsRecruiter: (isRecruiter: boolean) => void;
    isProfileComplete: boolean;
    setIsProfileComplete: (isProfileComplete: boolean) => void;
}

// create an interface ProjecDetals with project name, description, user, senders Addess all strings
export interface ProjectDetails {
    projectName: string;
    description: string;
    user: string;
    sendersAddress: string;
    isVerified: boolean;
}
