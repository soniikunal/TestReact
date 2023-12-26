import { toast } from "react-toastify";

export function toastSuccess(message) {
    toast.success(message, {
        
      });
}

export function toastError(message) {
    toast.error(message, {
        
      });
}

export function toastWarn(message) {
    toast.warn(message, {
        
      });
}

export function toastInfo(message) {
    toast.info(message, {
        
      });
}
