import { UseFormRegister, UseFormReturn } from "react-hook-form";
import { useCallback, useMemo } from "react";

const validateNotWhitespaceOnly = <T>(value: T): true | string =>
  typeof value === "string"
    ? value.trim().length > 0 || "To pole jest wymagane!"
    : true;

/* this hook wraps the return value of react-hook-form's useForm to
consider inputs that only contain whitespaces as empty, in the case where
the input validation is set to "required".
 */
export const useWrapFormToConsiderWhitespacesAsEmpty = <T>(
  formMethods: UseFormReturn<T>
): UseFormReturn<T> => {
  const { register } = formMethods;
  const wrappedRegister: UseFormRegister<T> = useCallback(
    (name, options) => {
      // we only need to inject the whitespace validation if options.required = true
      if (!options || !options.required) return register(name, options);

      // inject whitespace validation into the rules
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

  // register is inside control too, we need to add our wrapped version there in
  // order to make sure Controller and useController work correctly. Avoid to create
  // a new object every time by using useMemo
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
