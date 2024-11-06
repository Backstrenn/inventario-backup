
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import InputMask from 'react-input-mask';

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-lg border px-4 py-3 text-base transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 shadow-sm",
  {
    variants: {
      variant: {
        default: "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400",
        outline: "border-gray-400 bg-transparent focus:border-primary",
        filled: "bg-gray-100 text-gray-900 placeholder:text-gray-500",
      },
      size: {
        default: "h-11",
        sm: "h-9 rounded-md px-3 text-sm",
        lg: "h-14 rounded-lg px-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
  mask?: string | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, asChild = false, mask, ...props }, ref) => {
    const Comp = asChild ? Slot : mask ? InputMask : "input";

    return (
      <Comp
        className={cn(inputVariants({ variant, size }), className)}
        ref={ref}
        mask={mask || ''}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
