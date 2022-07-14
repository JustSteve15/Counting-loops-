let pet = {
    name: "pluto",
    age: 110,
    type: "dog",
}

//loop through the "keys"
for (let thing in pet) {
    console.log(thing);
}

//for loop
// from 1 to 5

for (let i = 1; i < 6; i++) {
    console.log(i);
}

// from 5 to 0

for (let i = 5; i >= 0; i--) {
    console.log(i);
}

// from 2 to 10 only evens

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}