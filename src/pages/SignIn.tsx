import { SignInCard } from "@/components/SignInCard"
import {AuthProps} from "@/types.d"

const SignPage = (props: AuthProps) =>{
    return (
    <div className="flex items-center justify-center h-screen">
        <SignInCard {...props} />
    </div>
    )
}

export default SignPage