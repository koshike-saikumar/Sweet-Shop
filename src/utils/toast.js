import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css';

const toastConfig = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 60,
  progressClassName: 'Toastify__progress-bar',
  className: 'Toastify__toast',
  bodyClassName: 'Toastify__body',
  progressStyle: { background: 'rgba(255,255,255,0.3)' },
  theme: "colored",
};

export const showToast = (message, type = 'success') => {
  toast[type](message, toastConfig);
};

export const Toast = {
  success: (message) => showToast(message, 'success'),
  error: (message) => showToast(message, 'error'),
  warning: (message) => showToast(message, 'warning'),
  info: (message) => showToast(message, 'info'),
};