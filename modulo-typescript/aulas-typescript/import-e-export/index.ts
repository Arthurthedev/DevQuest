import { Customer } from "./customers.ts"; 

interface especialCustomer extends Customer{
    couponQuantity: number
}

const clienteEspecial: especialCustomer = {
    couponQuantity: 10,
    name: "Arthur",
    age: 20
}
