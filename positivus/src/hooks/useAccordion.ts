import { useCallback, useState } from "react";

/**
 * Single-open accordion: one panel id is open at a time.
 */
export function useAccordion<T extends string = string>(initialOpen: T) {
  const [openId, setOpenId] = useState<T>(initialOpen);

  const select = useCallback((id: T) => {
    setOpenId(id);
  }, []);

  const toggle = useCallback((id: T) => {
    setOpenId((current) => (current === id ? current : id));
  }, []);

  const isOpen = useCallback((id: T) => openId === id, [openId]);

  return { openId, select, toggle, isOpen };
}
