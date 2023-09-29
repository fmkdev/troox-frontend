import { useQuery, useMutation } from "react-query";
import services from '../../infrastructure/api/index';


const login = (userDetails) =>{
    return services.authRequest.userLogin(userDetails);
}

export const useLogin = () => {
    return useMutation(login);
}

const kycExist = (userId) => {
    return services.userRequests.kycExist(userId);
}

export const useVerifyKyc = () => {
    return useMutation(kycExist);
}