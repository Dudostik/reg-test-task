import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error";
  message: string;
}

const Modal = ({ isOpen, onClose, type, message }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-all"
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-md rounded-lg border border-[#75C9EA] shadow-2xl animate-in fade-in zoom-in duration-300"
        style={{ background: "#112340" }}
      >
        <div className="p-8 flex flex-col items-center gap-6">
          <div className="flex justify-center">
            {type === "success" ? (
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-[#75C9EA]"
                style={{ background: "#0C1B2A" }}
              >
                <svg
                  className="w-10 h-10"
                  style={{ color: "#75C9EA" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            ) : (
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-red-400"
                style={{ background: "#0C1B2A" }}
              >
                <svg
                  className="w-10 h-10 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
          </div>

          <h2
            className="text-2xl font-bold text-center font-montserrat"
            style={{ color: "#FFFFFF" }}
          >
            {type === "success" ? "Успешно!" : "Ошибка"}
          </h2>

          <p
            className="text-center text-base leading-6 font-montserrat"
            style={{ color: "#FFFFFF", opacity: 0.8 }}
          >
            {message}
          </p>

          <button
            onClick={onClose}
            className="w-full max-w-[200px] py-3 px-6 rounded-lg transition-all duration-200 hover:-translate-y-px hover:shadow-lg font-montserrat font-medium"
            style={{
              background: "#122D52",
              border: "1px solid rgba(117, 201, 234, 0.3)",
              color: "#FFFFFF",
            }}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
