const setLoginUserDetails = (userDetails) => {
    localStorage.removeItem("userDetails");
    if(userDetails.userId !== null && 
        userDetails.businessName !== '' &&
        userDetails.userRoles !== null &&
        userDetails.email !== ''){
            localStorage.setItem('userDetails', JSON.stringify(userDetails));
        }
    return {};
}

export default setLoginUserDetails;