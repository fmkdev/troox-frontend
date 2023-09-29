import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../store/slice/user";

const useAuthentication = () => {

    const navigate = useNavigate();

    const userId = useSelector(state=> state.user.userId);

    useEffect(() => {
        if (userId == null) {
             navigate("/login");
             return;
        }
    }, [])

    return null;
};

export default useAuthentication;