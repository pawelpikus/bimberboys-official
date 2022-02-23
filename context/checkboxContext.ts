import { createContext } from "react";
import { CheckboxState } from "../types/props";
export const checkboxContext = createContext<CheckboxState>({
  checked: {
    subscribe: false,
    contactForm: false,
  },
  setChecked: (checked: {}) => {},
});
