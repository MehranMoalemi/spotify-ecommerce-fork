"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { CircleChevronDown } from 'lucide-react';


import { cn } from "@/lib/utils"
import { Button } from "@/src/shared/ui/Button/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/src/widgets/shadcn/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/src/widgets/shadcn/popover"

interface ComboProps {
    items: ComboItem[]
}
 type ComboItem =  {
    value: string;
    label: string;
}

export function Combobox(props: ComboProps) {
    const { items } = props;

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen} >
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="py-6 justify-between bg-transparent border-cream text-cream rounded-xl"
                >
                    {value
                        ? items.find((item) => item.value === value)?.label
                        : "انتخاب کنید..."}
                    <CircleChevronDown className="ml-2 "  />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-black p-0">
                <Command className="bg-black">
                    {/* <CommandInput placeholder="Search item..." className="h-9" /> */}
                    <CommandList >
                        <CommandEmpty>No item found.</CommandEmpty>
                        <CommandGroup >
                            {items.map((item) => (
                                <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                    className="text-white cursor-pointer"
                                >
                                    {item.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value === item.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
