import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"


const invoices = [
  {
    Store: "A",
    paymentStatus: "Paid",
    totalAmount: "Rs 250.00",
    Name: "Name",
  },
  {
    Store: "C",
    paymentStatus: "Pending",
    totalAmount: "Rs 150.00",
    Name: "Name",
  },
  {
    Store: "B",
    paymentStatus: "Unpaid",
    totalAmount: "Rs 350.00",
    Name: "Name",
  },
  {
    Store: "D",
    paymentStatus: "Paid",
    totalAmount: "Rs 450.00",
    Name: "Name",
  },
  {
    Store: "C",
    paymentStatus: "Paid",
    totalAmount: "Rs 550.00",
    Name: "Name",
  },
  {
    Store: "B",
    paymentStatus: "Pending",
    totalAmount: "Rs 200.00",
    Name: "Name",
  },
  {
    Store: "A",
    paymentStatus: "Unpaid",
    totalAmount: "Rs 300.00",
    Name: "Name",
  },
]

export default function Payments() {
  return (
    <>
      <div className="flex w-full flex-col p-4">
        <div className="flex flex-col md:flex-row justify-between space-x-4 md:space-x-0 p-4">
          <div className="flex w-full lg:w-1/2 space-x-5 p-4">
            <Input placeholder='Enter Name / Barcode' />
            <Button>Search</Button>
          </div>
          <div className="flex p-4 justify-center items-center">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Stores" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Overall">Overall</SelectItem>
                <SelectItem value="A">A</SelectItem>
                <SelectItem value="B">B</SelectItem>
                <SelectItem value="C">C</SelectItem>
                <SelectItem value="D">D</SelectItem>
              </SelectContent>
            </Select>

          </div>
        </div>

        <Table className=" p-5 bg-gray-300 rounded-xl text-black">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>User Name</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.Store}>
                <TableCell className="font-medium">{invoice.Store}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.Name}</TableCell>
                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
