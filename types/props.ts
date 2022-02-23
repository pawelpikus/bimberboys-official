import React from "react";
import { UseFormRegister } from "react-hook-form";

export interface Props {
  children?: React.ReactNode;
}

export interface CTAProps extends CheckboxState {
  status: "error" | "success" | "sending" | null;
  message: string | Error | null;
  onValidated: (formData: any) => void;
}

export interface YoutubeProps {
  embedId: string;
}

export interface AudioPlayerProps {
  src: string;
  trackId: number;
}

export interface PlaylistProps {
  playlist: {
    id: number;
    title: string;
    source: string;
    duration: string;
  }[];
  onChangeTrack: (id: number) => void;
}

export interface PlaylistContext {
  handleNextTrack: () => void;
  handlePrevTrack: () => void;
}

export interface IFormInputs {
  name: "register" | "name" | "email" | "acceptTerms" | "message";
  email: string;
  message: string;
  acceptTerms: boolean;
  register: UseFormRegister<ICheckboxInputs & IFormInputs>;
}

export interface ICheckboxInputs {
  acceptTerms: boolean;
}

export interface CheckboxProps extends CheckboxState {
  name: "register" | "name" | "email" | "acceptTerms" | "message";
  checkboxMessage: string;
  requiredMessage: string;
  register: UseFormRegister<ICheckboxInputs & IFormInputs>;
}

export interface ISubscribeInputs {
  email: string;
}

export interface CheckboxState {
  setChecked: (checked: Checked | ((prev: Checked) => Checked)) => void;
  checked: Checked;
}

export type Checked = {
  contactForm: boolean;
  subscribe: boolean;
};
