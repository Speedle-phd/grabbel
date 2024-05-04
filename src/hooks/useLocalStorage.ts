import { useState } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
   // Zustand für den Wert im LocalStorage
   const [storedValue, setStoredValue] = useState<T>(() => {
      // Versuche, den Wert aus dem LocalStorage abzurufen
      const item = window.localStorage.getItem(key);
      console.log(item)
      // Wenn kein Wert im LocalStorage vorhanden ist, gib das Initialwert zurück
      return item ? JSON.parse(item!) : initialValue;
   });

   // Funktion zum Aktualisieren des Werts im LocalStorage und im Zustand
   const setValue = (value: T): void => {
      // Speichere den Wert im LocalStorage
      window.localStorage.setItem(key, JSON.stringify(value));
      // Aktualisiere den Wert im Zustand
      setStoredValue(value);
   };

   return [storedValue, setValue];
};

export default useLocalStorage;