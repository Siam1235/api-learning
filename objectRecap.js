const normalPerson = {
    firstName: "Taufiq",
    lastName: "Siam",
    salary: 15000,
    getFirstName: function(){
        console.log(this.firstName);
    },
    getFromSalary: function(amount, tips, tax){
        this.salary = this.salary - amount -tips - tax;
        return this.salary;
    }
}

const smartGuy = {
    firstName: "Hero",
    lastName: "Alam",
    salary: 30000
}

const nayokSaheb = {
    firstName: "Manna",
    lastName: "Saheb",
    salary: 100000
}

// const smartGuyChargeBill = normalPerson.getFromSalary.bind(smartGuy);
// smartGuyChargeBill(3000);
// console.log(smartGuy.salary);
// const nayokSahebChargedBill = normalPerson.getFromSalary.bind(nayokSaheb);
// nayokSahebChargedBill(5750);
// console.log(nayokSaheb.salary + " TK");

// normalPerson.getFromSalary.call(nayokSaheb, 5000, 500, 50);
// console.log(nayokSaheb.salary);

normalPerson.getFromSalary.apply(nayokSaheb,[20000, 2000, 200]);
console.log(nayokSaheb.salary);