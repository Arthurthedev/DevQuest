type customer = {
    firstName: string,
    lastName?: string,
    age: number,
}

const newCustomer: customer = {
    firstName: "João",
    age: 32
}

console.log(newCustomer);
