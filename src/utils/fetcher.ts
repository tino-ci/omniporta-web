// utils/fetcher.ts
/**
 * @description 通用get or post
 * 
 */
export async function fetcherGet<T>(url: string, method: "GET" | "POST" | "PUT" | "DELETE" = "GET", body?: any): Promise<T> {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
    credentials: "include",
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  if (!res.ok) {
    const errMsg = await res.text();
    throw new Error(errMsg || `${method} ${url} failed`)
  };
  return res.json();
}

export async function fetchPost<T, B = any>(url: string, body: B): Promise<T> {
  const data = await fetcherGet<T>(url, "POST", body);
  return data;
}
