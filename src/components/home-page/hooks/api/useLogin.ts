import { useMutation } from "@hooks/index";
import { PATH_URL } from "@services/api"

export function useLogin() {
    return useMutation<{ email: string; password: string }, { token: string }>(
      PATH_URL.LOGIN,
      "POST",
        {
          toastSuccess: "Login success",
          toastError: "Login failed",
          revalidateKeys: [PATH_URL.GET_USER], // 登录后刷新 user 状态
        onSuccess: (data) => {
          localStorage.setItem("token", data.token);
        }
      },
      
    );
  }