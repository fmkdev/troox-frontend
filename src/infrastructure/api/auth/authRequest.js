import axios from "axios";

const BASEURL = "http://trooxapi-001-site1.gtempurl.com";

export const userLogin = async (userDetails) => {
    try{
        const res = (await axios.post(`${BASEURL}/api/Auth/UserLogin`, userDetails));
        res.data.data.token = res.headers.token;
        return res.data;
    }catch (err){
        return err.response.data;
    }
}

export const verifyUser = async (token) => {
    try{
        const res = (await axios.post(`${BASEURL}/api/Auth/verify-user/${token}`));
        res.data.data.token = res.headers.token;
        return res.data;
    }catch(err){
        return err.response.data;
    }
}