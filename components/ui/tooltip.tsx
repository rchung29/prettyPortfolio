import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const DEFAULT_DELAY_DURATION = 25; // delay in milliseconds

interface TooltipProps {
  children: React.ReactNode; // Type for children
  content: React.ReactNode; // Type for content
  delayDuration?: number; // Optional type for delayDuration
}

const TooltipProvider = TooltipPrimitive.Provider;

// Now using TooltipProps to type the component's props
const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  delayDuration = DEFAULT_DELAY_DURATION,
  ...props
}) => (
  <TooltipPrimitive.Root delayDuration={delayDuration} {...props}>
    {children}
  </TooltipPrimitive.Root>
);

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      // ... your existing classes
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
