/**
 * @description 通用get请求hook
 * 
 */
"use client";

import useSWR, { SWRConfiguration, mutate as globalMutate } from "swr";
import toast from "react-hot-toast";
import { fetcherGet } from "@/utils/fetcher";

export function useFetch<T = any>(
  key: string,
  config: SWRConfiguration = {}
) {
  const { data, error, isLoading, mutate } = useSWR<T>(
    key,
    async (url, body = {}) => {
      try {
        return await fetcherGet<T>(url, "GET", body);
      } catch (err: any) {
        toast.error(err.message || "request error");
        throw err;
      }
    },
    {
      revalidateOnFocus: false,
      ...config,
    }
  );

  return {
    data,
    error,
    isLoading,
    mutate,
    refresh: () => mutate(), // 手动刷新
    globalMutate: () => globalMutate(key), // 跨组件刷新
  };
}
