import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const employeeFiltersSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  jobTitle: z.string().optional(),
});

interface Employee {
  firstName: string;
  lastName: string;
  jobTitle: string;
}

type EmployeeFiltersData = z.infer<typeof employeeFiltersSchema>;


export function EmployeeFilters({ setEmployees, setOpen }: { setEmployees: (employees: Employee[]) => void, setOpen: (open: boolean) => void }) {
  const { register, handleSubmit } = useForm<EmployeeFiltersData>({
    resolver: zodResolver(employeeFiltersSchema)
  });

  const handleEmployeeFilter = async (data: any) => {
    try {
      const response = await axios.get<Employee[]>(`http://localhost:8000/employees/filter/?firstName=${data.firstName}&lastName=${data.lastName}&jobTitle=${data.jobTitle}`); 
      setEmployees(response.data);
      setOpen(false);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }


  return (
    <form onSubmit={handleSubmit(handleEmployeeFilter)} className="flex items-center gap-2">
      <Input placeholder="First Name" className="w-auto" {...register('firstName')} />
      <Input placeholder="Last Name" className="w-auto" {...register('lastName')} />
      <Input placeholder="Job Title" className="w-auto" {...register('jobTitle')} />
      <Button type="submit">
        <Search className="w-4 h-4 mr-2" />
        Filter
      </Button>
    </form>

  );
}
