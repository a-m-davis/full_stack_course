const animals = ['Wombats', 'Penguins', 'Opossums', 'Chameleons', 'Porcupines', 'Camels', 'Capybara', 'Kiwis'];
const fact1 = ['enjoy the fresh smell after a rain', 'can be trained to handle basic dental examinations',
    'are powerful sorcerers', 'can\'t pilot a helicopter', 'do not use forks for eating', 'don\'t wear shoes'];
const fact2 = ['can control electronics with their minds.', 'do not have to obey traffic laws.', 'do not have to pay taxes.',
    'can\'t legally own a car.', 'do not have to go to school.', 'is most likely not a Pokemon.' ];

const messages = () => {
    let randAnimalIndex = Math.floor(Math.random()*animals.length);
    let randomAnimal = animals[randAnimalIndex];
    let randFact1Index = Math.floor(Math.random()*fact1.length);
    let randomFact1 = fact1[randFact1Index];
    let randFact2Index = Math.floor(Math.random()*fact2.length);
    let randomFact2 = fact2[randFact2Index];
    console.log(`${randomAnimal} ${randomFact1} and ${randomFact2}`);
}
// Test
messages()