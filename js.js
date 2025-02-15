//1
let human = {
    I: {
        my_name: "Akbar",
        my_surname: "Asadov",
        my_old: 14,
    },
    mother: {
        mothers_name: "Mohigul",
        mothers_surname: "Kayumova",
        mothers_old: 34
    },
    father: {
        fathers_name: "Zafar",
        fathers_surname: "Asadov",
        fathers_old: 44
    },
    brother_older: {
        brothers_name: "Bekzod",
        brothers_surname: "Asadov",
        brothers_old: 11
    },
    brother_smaller: {
        brothers_name: "Samir",
        brothers_surname: "Asadov",
        brothers_old: 7
    }
}
console.log(human);
console.log(`My name is ${human.I.my_name}, my surname is ${human.I.my_surname}, I'm ${human.I.my_old} years old`);

//2
let arr = [
    {
        name: "Ilya",
        age: 15,
        isMaried: false
    },
    {
        name: "Shohida",
        age: 18,
        isMaried: false
    },
    {
        name: "Sabrina",
        age: 20,
        isMaried: false
    },
    {
        name: "Amina",
        age: 25,
        isMaried: true
    },
    {
        name: "Malika",
        age: 35,
        isMaried: true
    },
]
let maried = []
let single = []

arr.forEach(elm => {

    if (elm.isMaried === true) {
        maried.push(elm)
    } else {
        single.push(elm)
    }


})
console.log(maried);
console.log(single);