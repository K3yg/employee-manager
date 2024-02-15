import pymongo
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Query, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = pymongo.MongoClient("mongodb://employee-db:27017/")
db = client["employee-db"]
employee_collection = db["employees"]

class Employee(BaseModel):
    firstName: str
    lastName: str
    jobTitle: str

@app.get("/employees/", response_model=List[Employee])
async def get_employees():
    employees = []
    for employee in employee_collection.find():
        employees.append(Employee(**employee))
    return employees

@app.post("/employee/", response_model=Employee)
async def add_employee(employee: Employee):
    employee_dict = dict(employee)
    inserted_employee = employee_collection.insert_one(employee_dict)
    employee_dict["_id"] = str(inserted_employee.inserted_id)
    return employee_dict

@app.get("/employees/filter/", response_model=List[Employee])
async def filter_employees(firstName: Optional[str] = None, lastName: Optional[str] = None, jobTitle: Optional[str] = None):
    filter_params = {}
    if firstName:
        filter_params["firstName"] = firstName
    if lastName:
        filter_params["lastName"] = lastName
    if jobTitle:
        filter_params["jobTitle"] = jobTitle

    employees = []
    for employee in employee_collection.find(filter_params):
        employees.append(Employee(**employee))
    return employees


@app.delete("/employee/")
async def delete_all_employees():
    employee_collection.delete_many({})
    return {"message": "All employees deleted"}