import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

interface Employee {
  firstName: string;
  lastName: string;
  jobTitle: string;
}

export function EmployeeTable({ employees }: { employees:Employee[]}) {

  return (
    <div className="border rounded-lg p-2">
      <Table>
          <TableHeader>
            <TableHead>#</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Job Title</TableHead>
          </TableHeader>
          <TableBody>
            {employees.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.jobTitle}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>
  )
}