import { cn } from "@/lib/utils" 

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full bg-transparent text-cream border border-cream rounded-xl py-3 px-4 caret-cream placeholder-cream placeholder:opacity-50 outline-none",
        className 
      )}
      {...props}
    />
  )
}
