  import { Input } from "./ui/input";
  import { Label } from "./ui/label";
  import { Button } from "./ui/button";
  import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogClose } from "./ui/dialog";
  import { toast } from "sonner"

  import { useForm } from "react-hook-form";
  import { z } from "zod";
  import { zodResolver } from "@hookform/resolvers/zod";

  import axios from "axios";

  const CreateEmployeeSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    jobTitle: z.string()
  })

  type CreateEmployeeData = z.infer<typeof CreateEmployeeSchema>

  export function CreateEmployeeDialog({ setOpen }: { setOpen: (open: boolean) => void }) {
    const { register, handleSubmit, reset } = useForm<CreateEmployeeData>({
      resolver: zodResolver(CreateEmployeeSchema)
    })

    const handleCreateEmployee = async (data: CreateEmployeeData) => {
      await axios.post<CreateEmployeeData[]>("http://localhost:8000/employee", data);

      setOpen(false);
      reset();
      toast.success(`${data.firstName} was added successfully!`, 
      {
        duration: 2000,
        action: {
          label: "Dismiss",
          onClick: () => toast.dismiss()
        }
      })
    }

    return (
      <DialogContent>
        <DialogHeader>
          <h2 className="text-xl font-bold">New Employee</h2>
          <DialogDescription>
            <p className="text-sm">Add a new employee to the directory.</p>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleCreateEmployee)} className="space-y-6">
          <div className="grid grid-cols-4 items-center text-center gap-3">  
            <Label htmlFor="firstName">First Name</Label>
            <Input placeholder="First Name" className="col-span-3" id="firstName" {...register('firstName')} />
          </div>
          <div className="grid grid-cols-4 items-center text-center gap-3">  
            <Label htmlFor="lastName">Last Name</Label>
            <Input placeholder="Last Name" className="col-span-3" id="lastName" {...register('lastName')} />
          </div>
          <div className="grid grid-cols-4 items-center text-center gap-3">  
            <Label htmlFor="jobTitle"> Job Title</Label>
            <Input placeholder=" Job Title" className="col-span-3" id="jobTitle" {...register('jobTitle')} />
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
    
            <Button type="submit">Add Employee</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    );
  }
