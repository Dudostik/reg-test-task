import { useState } from "react";
import { useForm } from "react-hook-form";
import type { RegistrationFormData } from "../../types";
import Modal from "../Modal/Modal";

const RegistrationForm = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    type: "success" as "success" | "error",
    message: "",
  });

  const selectedLectures = 3;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegistrationFormData>({
    mode: "onBlur",
  });

  const validatePhone = (value: string) => {
    const phoneRegex =
      /^\+?[78][-\s]?\(?[0-9]{3}\)?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}$/;
    return phoneRegex.test(value) || "Введите корректный номер телефона";
  };

  const onSubmit = async (data: RegistrationFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const hasError = Math.random() < 0.3;

    if (hasError) {
      setModal({
        isOpen: true,
        type: "error",
        message: "Произошла ошибка при отправке. Пожалуйста, попробуйте позже.",
      });
    } else {
      console.log("Отправляем данные:", data);
      setModal({
        isOpen: true,
        type: "success",
        message: "Вы успешно зарегистрированы на лекторий!",
      });
      reset();
    }
  };

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center p-4"
        style={{ background: "#131C2D" }}
      >
        <style>{`
          /* Планшет: от 768px до 1279px */
          @media (min-width: 768px) and (max-width: 1279px) {
            .form-main-container {
              width: 642px !important;
              min-height: 897px !important;
            }
            .form-grid {
              display: grid !important;
              grid-template-columns: 1fr 1fr !important;
              gap: 24px !important;
            }
            .form-full-width {
              grid-column: span 2 !important;
            }
          }
          
          /* Десктоп: от 1280px и выше - возвращаем исходные размеры */
          @media (min-width: 1280px) {
            .form-main-container {
              width: 360px !important;
              min-height: auto !important;
            }
            .form-grid {
              display: flex !important;
              flex-direction: column !important;
              gap: 24px !important;
            }
            .form-full-width {
              grid-column: auto !important;
            }
          }
        `}</style>

        <div
          className="form-main-container w-[360px] min-h-[963px] rounded-lg p-12 border border-[#75C9EA] shadow-lg"
          style={{ background: "#112340" }}
        >
          <div className="flex flex-col gap-12">
            <div className="form-grid flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-base text-white leading-6 h-6 font-montserrat">
                    ФИО *
                  </label>
                  <div className="rounded-lg p-2 h-9 bg-[#0C1B2A]">
                    <input
                      {...register("fullName", {
                        required: "Обязательное поле",
                      })}
                      placeholder="Иванов Иван Иванович"
                      className="w-full h-5 bg-transparent outline-none text-sm text-white leading-5 placeholder-[#545F6A] font-montserrat"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-base text-white leading-6 h-6 font-montserrat">
                    Телефон *
                  </label>
                  <div className="rounded-lg p-2 h-9 bg-[#0C1B2A]">
                    <input
                      {...register("phone", {
                        required: "Обязательное поле",
                        validate: validatePhone,
                      })}
                      placeholder="+7 (987) 654-32-10"
                      className="w-full h-5 bg-transparent outline-none text-sm text-white leading-5 placeholder-[#545F6A] font-montserrat"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-base text-white leading-6 h-6 font-montserrat">
                    Компания *
                  </label>
                  <div className="rounded-lg p-2 h-9 bg-[#0C1B2A]">
                    <input
                      {...register("company", {
                        required: "Обязательное поле",
                      })}
                      placeholder="Название компании"
                      className="w-full h-5 bg-transparent outline-none text-sm text-white leading-5 placeholder-[#545F6A] font-montserrat"
                    />
                  </div>
                  {errors.company && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-base text-white leading-6 h-6 font-montserrat">
                    Должность *
                  </label>
                  <div className="rounded-lg p-2 h-9 bg-[#0C1B2A]">
                    <input
                      {...register("position", {
                        required: "Обязательное поле",
                      })}
                      placeholder="Руководитель отдела..."
                      className="w-full h-5 bg-transparent outline-none text-sm text-white leading-5 placeholder-[#545F6A] font-montserrat"
                    />
                  </div>
                  {errors.position && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.position.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="form-full-width flex flex-col gap-2">
              <label className="text-base text-white leading-6 h-6 font-montserrat">
                Email *
              </label>
              <div className="rounded-lg p-2 h-9 bg-[#0C1B2A]">
                <input
                  type="email"
                  {...register("email", {
                    required: "Обязательное поле",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Введите корректный email",
                    },
                  })}
                  placeholder="example@company.ru"
                  className="w-full h-5 bg-transparent outline-none text-sm text-white leading-5 placeholder-[#545F6A] font-montserrat"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="form-full-width flex flex-col gap-2">
              <label className="text-base text-white leading-6 h-6 font-montserrat">
                Ваши вопросы к обсуждению
              </label>
              <div className="rounded-lg p-2 bg-[#0C1B2A]">
                <textarea
                  {...register("questions")}
                  placeholder="Какие темы вам особенно интересны?"
                  rows={4}
                  className="w-full bg-transparent outline-none text-sm text-white leading-5 placeholder-[#545F6A] font-montserrat resize-vertical"
                />
              </div>
            </div>

            <div className="text-center py-2">
              <p className="text-base text-white font-montserrat">
                Выбрано{" "}
                <span className="text-[#75C9EA] font-semibold">
                  {selectedLectures}
                </span>{" "}
                лекции
              </p>
            </div>

            <div className="form-full-width flex flex-col gap-2 items-center">
              <button
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="w-[264px] h-12 rounded-lg bg-[#122D52] border border-[#75C9EA]/30 text-white font-medium px-6 py-3 transition-all hover:-translate-y-px hover:shadow-lg disabled:opacity-50 font-montserrat"
              >
                {isSubmitting ? "Отправка..." : "Зарегистрироваться"}
              </button>

              <p className="w-[264px] text-center text-sm text-white/60 underline cursor-pointer hover:opacity-80 leading-5 font-montserrat">
                Нажимая кнопку, вы соглашаетесь с политикой обработки
                персональных данных.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        type={modal.type}
        message={modal.message}
      />
    </>
  );
};

export default RegistrationForm;
