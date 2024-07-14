let person = {
    firstName: "Bob",
    lastName: "Loblaw",
    address: {
        street: "123 Fake St",
        city: "Emberton",
        state: "NJ",
    },
};

function giveAwesomePowers(copyPerson) {
    copyPerson.specialPower = "invisibility";
    return copyPerson;
}
function copy(obj) {
    if (typeof obj !== "object" || obj === null) return obj;
    const deepCopiedObj = {};
    for (let key in obj) {
        deepCopiedObj[key] = copy(obj[key]);
    }
    return deepCopiedObj;
}
console.log("person 내용물", person);
let samePerson = giveAwesomePowers(copy(person));
console.log("samePerson 내용물", samePerson);
samePerson.address.street = "Aatrox";
console.log(person.address.street);
console.log("두 객체는 같은가?", person.address === samePerson.address);
