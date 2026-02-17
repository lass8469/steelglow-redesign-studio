import { useState, useCallback } from "react";

/**
 * Hook to track field interaction (blur) and provide validation CSS classes.
 * Fields show green border when valid after being touched, red when invalid.
 */
export function useFieldValidation() {
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const onBlur = useCallback((field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }, []);

  const reset = useCallback(() => {
    setTouched({});
  }, []);

  /**
   * Returns validation class for an input field.
   * @param field - field name
   * @param isValid - whether the current value is valid
   */
  const cls = useCallback(
    (field: string, isValid: boolean) => {
      if (!touched[field]) return "";
      return isValid
        ? "border-green-500 focus-visible:ring-green-500/30"
        : "border-destructive focus-visible:ring-destructive/30";
    },
    [touched],
  );

  return { onBlur, cls, reset, touched };
}
