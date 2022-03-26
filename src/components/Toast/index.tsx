import { MdCheckCircle } from "react-icons/md";
import { MdError } from "react-icons/md";
import { CgClose } from "react-icons/cg";

interface ToastProps {
  type: "success" | "error",
  message: string,
  close: any,
};

const Toast = ({ type, message, close }: ToastProps) => (
  <div className={`w-80 absolute top-10 right-10 p-1 flex items-center justify-between shadow-lg rounded-lg ${type === "success" ? "bg-green-500" : "bg-red-500"}`}>
    <div className="flex-1 flex items-center">
      {type === "success" && <MdCheckCircle color="white" fontSize={24} className="m-3" />}
      {type === "error" && <MdError color="white" fontSize={24} className="m-3" />}
      <p className="flex-1 text-white text-sm py-4 ">{message}</p>
    </div>
    <button
      type="button"
      className={`self-start m-1 p-1 rounded-full transition ${type === "success" ? "hover:bg-green-400" : "hover:bg-red-400"}`}
      onClick={() => close(false)}
    >
      <CgClose color="white" fontSize={20} />
    </button>
  </div>
);

export default Toast;
