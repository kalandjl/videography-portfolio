"use client";

import { useEffect, useState } from "react";

export function useCachedData<T>(
  key: string,
  fetcher: () => Promise<T>
): { data: T | null; loading: boolean } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem(key);
    if (cached) {
      setData(JSON.parse(cached));
      setLoading(false);
    }

    fetcher().then((res) => {
      setData(res);
      localStorage.setItem(key, JSON.stringify(res));
      setLoading(false);
    });
  }, [key, fetcher]);

  return { data, loading };
}
