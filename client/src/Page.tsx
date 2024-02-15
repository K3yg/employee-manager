import { Dialog, DialogTrigger } from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { PlusCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeButton } from "./components/ui/theme-button";
import { EmployeeFilters } from "./components/employee-filters";
import { CreateEmployeeDialog } from "./components/create-employee-dialog";
import { EmployeeTable } from "./components/employee-table";
import axios from "axios";

interface Employee {
  firstName: string;
  lastName: string;
  jobTitle: string;
}

export function Page() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    // Função para buscar os usuários da API
    const fetchemployees = async () => {
      try {
        const response = await axios.get<Employee[]>("http://localhost:8000/employees/");
        setEmployees(response.data); 
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        setError("Erro ao buscar usuários. Por favor, tente novamente mais tarde.");
      }
      console.log("fetchou")
    };    
    fetchemployees();
  }, [open]);

  if (error) {
    return <div className="p-6 max-w-4xl mx-auto">Erro: {error}</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4"> 
      <div className="grid justify-items-end">
        <ThemeButton />  
      </div>
      <h1 className="text-3xl font-bold">Employee Directory</h1>
  
      <div className="flex items-center justify-between">
        <EmployeeFilters setEmployees={setEmployees} setOpen={setOpen} /> 

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              Add employee
            </Button>
          </DialogTrigger>

          <CreateEmployeeDialog setOpen={setOpen} />
        </Dialog>
      </div>
      
      <EmployeeTable employees={employees} />
    </div>
  );
}
