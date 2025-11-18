/**
 * @description 通用post请求hook
 * 
 */
import { useState } from "react";
import { mutate } from "swr";
import toast from "react-hot-toast";
import { fetcherGet } from "@utils/index";

type Options = {
  toastSuccess?: string;
  toastError?: string;
  onSuccess?: (data: any) => void;
  onError?: (err: Error) => void;
  revalidateKeys?: string[]; // 哪些 key 要手动触发 SWR 刷新
};

export function useMutation<B = any, R = any>(
  url: string,
  method: "POST" | "PUT" | "DELETE" = "POST",
  options: Options = {}
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const trigger = async (body: B): Promise<R | undefined> => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetcherGet<R>(url, method, body);
      if (options.toastSuccess) toast.success(options.toastSuccess);
      options.onSuccess?.(data);
      options.revalidateKeys?.forEach((key) => mutate(key));
      return data;
    } catch (err: any) {
      setError(err);
      if (options.toastError) toast.error(options.toastError);
      options.onError?.(err);
    } finally {
      setLoading(false);
    }
  };

  return { trigger, loading, error };
}
