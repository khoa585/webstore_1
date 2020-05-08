import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({
    autoClose: 8000,
    draggable: false,
  });
export const toastSuccess = (message) => {
    if (message) {
        toast.success(message);
    }
};
export const toastError = (error) =>{
    if(error){
        toast.error(error);
    }
};


