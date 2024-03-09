import inquirer from "inquirer"
let input = await inquirer.prompt([
    {
        type: "input",
        name: "fullname",
        message: "enter name"
    },
    {
        type: "input",
        name: "contact",
        message: "enter contact"
    },
    {
        type: "input",
        name: "id",
        message: "enter id"
    },
])
let amount = 0


class customer {
    name: string
    contact: number


    constructor(Name: string, Contact: number) {
        this.name = Name,
            this.contact = Contact

    }

}
class account extends customer {
    id: number
    balance: number

    constructor(Name: string, Contact: number, Id: number) {
        super(Name, Contact)
        this.id = Id,
            this.balance = 0

    }

    deposit(amount: number) {

        this.balance += amount
        console.log(`${amount} rupees deposited `)


    }
    withdraw(amount: number) {
        if (amount > this.balance) {
            console.log("insufficient fund")
        } else {
            this.balance -= amount,
            console.log(`${amount} rupees withdrwan`)
        }
    }
    balanceCheck() {
        
        console.log(`your balance is ${this.balance}.`)
    }
}
let x = new account(input.fullname,parseInt( input.contact),parseInt( input.id))

async function main() {
    let Input;
    while(Input!=="exit"){
         Input =( await inquirer.prompt([
            {
                type: "list",
                name: "operation",
                choices: ["withdrawal", "deposit", "exit"]
            }
        ])).operation
        

        if (Input == "withdrawal" || Input == "deposit") {
            amount = parseFloat((await inquirer.prompt(
                {
                    type: "input",
                    name: "money",
                    message: "enter amount..."
                }
            )).money);
            
            if (Input === "withdrawal") {
                x.withdraw(amount)
            }
             
             if (Input=== "deposit") {
                x.deposit(amount)
            }
            x.balanceCheck()
            
        }
    }}

main()







