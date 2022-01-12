// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

pAequorFactory = (number, dnaArray) => {
    return {
        specimenNum: number,
        dna: dnaArray,
        mutate (){
            let index = Math.floor(Math.random()*dnaArray.length);
            let randBase = this.dna[index];
            let newRandBase = returnRandBase();
            while (randBase === newRandBase){
                newRandBase = returnRandBase();
            }
            this.dna[index] = newRandBase;
            return this.dna;
        },
        compareDNA(anotherObject){
            let sameBases = [];
            for (let i = 0; i < this.dna.length; i++){
                if (anotherObject.dna[i] === this.dna[i]){
                    sameBases.push(anotherObject.dna[i]);
                };
            };
            //console.log(sameBases);
            let percentCommon = (sameBases.length/this.dna.length*100).toFixed(2);
            console.log(`Strand number ${anotherObject.specimenNum} and strand number ${this.specimenNum} have ${percentCommon} percent DNA in common.`);
        },
        willLikelySurvive (){
            let numberOfGorC = this.dna.filter(word => word === 'G' || word === 'C');
            let survivalPercent = numberOfGorC.length/this.dna.length*100;
            if (survivalPercent >= 60){
                return true;
            }
            return false;
        }
    };
};
//Creates 30 instances of pAequor and stores them in an array:
let batch = [];
for (let i = 0; i < 30; i++){
    batch.push(pAequorFactory(i, mockUpStrand()));
}
console.log(batch);



// Tests:
const strand1 = pAequorFactory(1, mockUpStrand());
console.log(`strand1 before mutation: ${strand1.dna}`);
strand1.mutate();
console.log(`strand1 after mutation:  ${strand1.dna}`);

const strand2 = pAequorFactory(222, mockUpStrand());
const strand3 = pAequorFactory(333, mockUpStrand());
console.log(strand2);
console.log(strand3);
strand2.compareDNA(strand3);

console.log(strand1.willLikelySurvive());
console.log(strand2.willLikelySurvive());
console.log(strand3.willLikelySurvive());

