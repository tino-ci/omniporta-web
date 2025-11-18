// hooks/useUser.ts
import { PATH_URL } from "@services/api"
import { useFetch } from "@hooks/index"

interface User {
  id: string;
  name: string;
  email: string;
}

export function useGetUserApi() {
    return useFetch<User>(PATH_URL.GET_USER)
}
