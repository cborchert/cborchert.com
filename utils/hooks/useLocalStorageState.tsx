import { useEffect, useState } from "react";

export function getParsedLocalValue(key: string) {
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const savedValue = window.localStorage.getItem(key);
      if (savedValue) {
        return JSON.parse(savedValue);
      }
    } catch (e) {}
  }
}
export function useLocalStorageState<T>(
  defaultValue: T,
  localStorageKey: string
): [T, (arg0: T) => void] {
  const [value, setValue] = useState<T>(defaultValue);

  const setValueAndUpdateLocalStorage = (newValue: T) => {
    if (typeof window !== "undefined" && window.localStorage) {
      let stringifiedValue: any = newValue;
      try {
        stringifiedValue = JSON.stringify(newValue);
        window.localStorage.setItem(localStorageKey, stringifiedValue);
      } catch (e) {
        // well aint that just a hoot ?
      }
      setValue(newValue);
    }
  };

  // on mount, retrieve the value from local storage
  useEffect(() => {
    const parsedValue = getParsedLocalValue(localStorageKey);
    if (parsedValue !== null && typeof parsedValue !== "undefined") {
      setValue(parsedValue);
    }
  }, [defaultValue]);

  return [value, setValueAndUpdateLocalStorage];
}
