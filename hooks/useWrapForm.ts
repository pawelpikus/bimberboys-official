import { UseFormRegister, UseFormReturn } from "react-hook-form";
import { useCallback, useMemo } from "react";

const validateNotWhitespaceOnly = <T>(value: T): true | string =>
  typeof value === "string"
    ? value.trim().length > 0 || "To pole jest wymagane!"
    : true;

export const useWrapForm = <T>(
  formMethods: UseFormReturn<T>
): UseFormReturn<T> => {
  const { register } = formMethods;
  const wrappedRegister: UseFormRegister<T> = useCallback(
    (name, options) => {
      if (!options || !options.required) return register(name, options);
      const originalValidationRules =
        typeof options.validate === "function"
          ? { default: options.validate }
          : options.validate;

      const wrappedOptions = {
        ...options,
        validate: {
          ...originalValidationRules,
          whitespaces: validateNotWhitespaceOnly,
        },
      };
      return register(name, wrappedOptions);
    },
    [register]
  );

  const control = useMemo(
    () => ({
      ...formMethods.control,
      register: wrappedRegister,
    }),
    [formMethods.control, wrappedRegister]
  );

  return {
    ...formMethods,
    register: wrappedRegister,
    control,
  };
};
