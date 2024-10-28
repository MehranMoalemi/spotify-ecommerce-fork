'use client'

import { useState } from 'react'
import { Input } from '@/src/shared/ui/Input'
import { Button } from '@/src/shared/ui/Button/button'
import EyeOff from './icons/EyeOff'
import EyeOn from './icons/EyeOn'

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex  w-full max-w-sm items-center space-x-2">
      <div className="relative w-full ">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="*************"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute left-4 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <EyeOn className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  )
}