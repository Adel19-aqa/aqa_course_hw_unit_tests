// 1.1

interface IEmployee {
    name: string;
    salary: number;
    isManager: boolean;
};

const QA: IEmployee = {
    name: "Alice",
    salary: 2000,
    isManager: false,
};

type EmployeeKeys = keyof IEmployee;

type QaKeys = keyof typeof QA;

type UserType = typeof QA;

type PartialEmployee = Partial<IEmployee>;

type NameAndSalary = Pick<IEmployee, "name" | "salary">;

type WithoutIsManager = Omit<IEmployee, "isManager">;

type ReadonlyEmployee = Readonly<IEmployee>;

type QaKeyUnion = keyof typeof QA;

const recordObj: Record<string, QaKeyUnion> = {
    first: "name",
    second: "salary",
    third: "isManager",
};

//1.2
interface IVehicle {
    getDetails(): string;
    start(): string;
};

abstract class Vehicle implements IVehicle {
    constructor(
        public make: string,
        public model: string
    ) { }
    start(): string {
        return `The vehicle ${this.make} ${this.model} is starting`;
    }
    abstract getDetails(): string;
}

class Car extends Vehicle {
  constructor(
    make: string,
    model: string,
    public year: number
  ) {
    super(make, model);
  }
  getDetails(): string {
    return `${this.make} ${this.model}, ${this.year}`;
  }
}

const wantedCar = new Car("Audi", "Q8", 2024);

console.log(wantedCar.start()); 
console.log(wantedCar.getDetails());