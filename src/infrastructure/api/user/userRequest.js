import axios from 'axios';

const BASEURL = "http://trooxapi-001-site1.gtempurl.com";

export const createAdmin = async (userDetails) => {
    try{
        const res = await axios.post(
            `${BASEURL}/api/User/createadmin`, 
            userDetails,
            {},
            setConfig()
        );
        return res.data;
    }catch(err){
        return err.response.data;
    }
}

export const inviteEmployee = async (token, userDetails) => {
    try{
        const res = (await axios.post(`${BASEURL}/api/User/invite-employee/${token}`), 
        userDetails, {
            setConfig
        });
        return res.data;
    }catch(err){
        return err.response.data;
    }
}

export const createKyc = async (userDetails) => {
    try{
        const res = (await axios.post(`${BASEURL}/api/User/create-kyc`), 
        userDetails,
        setConfig());
        return res.data;
    }catch(err){
        return err.response.data;
    }
}

export const kycExist = async (userId) => {
    try{
        const res = (await axios.get(`${BASEURL}/api/User/kyc-exist`), userId);
        setConfig();
        return res.data;
    }catch(err){
        return err.response.data;
    }
}

const setConfig = () => {
    const authToken = JSON.parse(localStorage.getItem("userDetails"))?.authToken;
  
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
        "accept": "text/plain"
      },
    };
  
    return config;
  };


