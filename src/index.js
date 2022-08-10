const messages = [
    "Erik",
    "Ivan",
    "Kari",
    "Cami",
    "Jesus",
    "Alejandro",
    "Camille",
    "Andy"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message)
};

module.exports = {randomMsg};

