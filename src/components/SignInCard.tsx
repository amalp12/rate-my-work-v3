import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { Button } from "./ui/button"
import { FaGoogle } from 'react-icons/fa'
import { Separator } from "./ui/separator"
import { AuthProps } from "@/types.d"
import { useNavigate } from "react-router-dom"
import { useOkto } from "okto-sdk-react";
import { GoogleLogin } from "@react-oauth/google";


export const SignInCard = (props: AuthProps) => {

    const {authToken, setAuthToken, handleLogout} = props;
    const navigate = useNavigate();
    const oktoContext = useOkto();
    if (!oktoContext) {
        throw new Error("Okto context is null");
    }
    const { authenticate } = oktoContext;

    const handleGoogleLogin = async (credentialResponse: any) => {
        console.log("Google login response:", credentialResponse);
        const idToken = credentialResponse.credential;
        console.log("google idtoken: ", idToken);
        authenticate(idToken, async (authResponse, error) => {
          if (authResponse) {
            console.log("Authentication check: ", authResponse);
            setAuthToken(authResponse.auth_token);
            console.log("auth token received", authToken);
            navigate("/profile-complete");
          }
          if (error) {
            console.error("Authentication error:", error);
          }
        });
      };
    
      const onLogoutClick = () => {
        handleLogout(); // Clear the authToken
        navigate('/'); // Navigate back to the login page
      };
    
    return (
        <Card
        className="w-[400px]"
        
        >
            <CardHeader
            className="space-y-1.5 text-center"
            >
                <CardTitle
                className="text-2xl font-bold"
                >Continue to RateMyWork</CardTitle>
                <CardDescription
                className="text-base text-muted-foreground text-center"
                >Sign in to your account</CardDescription>
               
                </CardHeader>
                <Separator />
                <CardContent>
                <Button
                size={'lg'}
            
                className="w-full"
                >
                    <FaGoogle className="mr-2" /> Continue with Google
                </Button>
                {!authToken ? (
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
          promptMomentNotification={(notification) =>
            console.log("Prompt moment notification:", notification)
          }
        />
      ) : (
        <button onClick={onLogoutClick}>Authenticated, Logout</button>
      )}
                </CardContent>
                <CardFooter>
                </CardFooter>

        </Card>
    )
}