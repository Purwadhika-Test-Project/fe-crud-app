import React, { InputHTMLAttributes, ButtonHTMLAttributes } from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
