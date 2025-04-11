import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/SARETO_DENTAL_LOGO.webp";
import { SubmitHandler, useForm } from "react-hook-form";
import { TLoginReq, TUser } from "../../types/authTypes";
import FormErrorsComponent from "../../components/FormErrorsComponent";
import { useMutation } from "@tanstack/react-query";
import LoadingComponent from "../../components/LoadingComponent";
import axios from "axios";
import { BASE_API } from "../../utils/Constants";
import { CustomAxiosError } from "../../types/commonTypes";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateAccessToken } from "../../state/auth/authSlice";
const Login = () => {
  const tokenDispatcher = useDispatch();
  const [isPasswordVisible, setPasswordVisiblity] = useState<boolean>(false);

  const handlePasswordVisiblity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPasswordVisiblity(() => !isPasswordVisible);
  };

  const onSubmit: SubmitHandler<TLoginReq> = async (loginReq) => {
    await loginMutation(loginReq);
  };
  const handleLogin = async (loginReq: TLoginReq): Promise<TUser> => {
    return axios
      .post(`${BASE_API}/auth/login`, {
        username: loginReq.username,
        password: loginReq.password,
      })
      .then((res) => {
        reset();
        return res.data;
      })
      .catch((e: CustomAxiosError) => {
        if (e.response)
          toast.error(e.response?.data.message, { removeDelay: 300 });
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<TLoginReq>();
  const { mutateAsync: loginMutation, isPending } = useMutation({
    mutationFn: handleLogin,
    onSuccess: (data) => {
      console.log(data);
      tokenDispatcher(updateAccessToken(data.accessToken));
    },
  });
  useEffect(() => {
    async () => {
      await trigger();
    };
  }, [trigger]);
  return (
    <>
      <div className="bg-blue-200 min-h-screen flex justify-center items-center relative">
        {isPending ? (
          <div className="absolute top-0 bottom-0 w-full flex  justify-center items-center bg-blue-200 z-10">
            <LoadingComponent />
          </div>
        ) : (
          ""
        )}
        <div className="bg-gray-50 rounded-md shadow shadow-gray-700 px-4  py-10  w-[280px] grid gap-4 md:w-[400px]">
          <section>
            <figure className=" w-full">
              <img
                src={logo}
                alt="sareto dental clinic logo"
                className="w-24 mx-auto"
              />
            </figure>
            <h3 className="font-bold text-blue-500 text-lg  text-center">
              Sareto Dental Portal
            </h3>
          </section>
          <section>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
              <div>
                <label htmlFor="username" className="text-gray-500">
                  Username
                </label>

                <input
                  type="text"
                  id="username"
                  className={`outline-none rounded border-2 ${
                    errors && errors.username
                      ? "border-red-500"
                      : " border-gray-300 focus:border-blue-500"
                  } w-full px-1`}
                  {...register("username", {
                    required: "Username field cannot be left empty",
                  })}
                  aria-invalid={errors.username ? "true" : "false"}
                />
                {errors && errors.username ? (
                  <small className="text-red-500">
                    {errors.username.message}
                  </small>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label htmlFor="password" className="text-gray-500">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    className={`outline-none rounded border-2 ${
                      errors && errors.password
                        ? "border-red-500"
                        : " border-gray-300 focus:border-blue-500"
                    } w-full px-1`}
                    {...register("password", {
                      required: "Password field cannot be left emtpy",
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                  />

                  <button
                    className="absolute translate-y-[25%] right-2 text-gray-500 text-lg"
                    onClick={(e) => handlePasswordVisiblity(e)}
                  >
                    {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
                <div>
                  {errors && errors.password ? (
                    <FormErrorsComponent message={errors.password.message} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div>
                <input
                  type="submit"
                  className="bg-blue-500 text-gray-50 w-full rounded py-1"
                  value={"Login"}
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
