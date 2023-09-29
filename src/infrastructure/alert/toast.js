import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export const success = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

}

export const error = (message) => {

    return toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export const promise = (message) => {
    return toast.promise(message, {
        pending: "pending",
        success: "success",
        error: "rejected"
    });
}

