import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/shop-owner"
        className="text-sm font-medium  hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/shop-owner/components/Inventory"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Inventory
      </Link>
      <Link
        href="/shop-owner/components/Payments"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Payments
      </Link>
      <Link
        href="/shop-owner/components/CheckOut"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  )
}
