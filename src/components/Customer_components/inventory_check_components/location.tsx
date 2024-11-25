import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function Location() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="location" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Select Location</SelectLabel>
                    <SelectItem value="Location_1">Location_1</SelectItem>
                    <SelectItem value="Location_2">Location_2</SelectItem>
                    <SelectItem value="Location_3">Location_3</SelectItem>
                    <SelectItem value="Location_4">Location_4</SelectItem>
                    <SelectItem value="Location_5">Location_5</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
