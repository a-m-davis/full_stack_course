let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Splits story string into individual words and stores them in a new array
const storyWords = story.split(' ');

//Filters out words that are in the unnecessaryWords array
const betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word);
});

// Counts the number of times the overusedWords appear in storyWords
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of storyWords){
  if (word === 'really'){
    reallyCount +=1;
  } else if (word === 'very'){
    veryCount +=1;
  } else if (word === 'basically'){
    basicallyCount +=1;
  }
};

// Counts the number of sentences by counting punctuation
let periodCount = 0;
let exclamationCount = 0;
let questionCount = 0;

for (word of storyWords){
  if (word.includes('.')){
    periodCount += 1;
  } else if (word.includes('!')){
    exclamationCount += 1;
  } else if (word.includes('?')){
    questionCount +=1;
  }
};

let totalSentences = periodCount + exclamationCount + questionCount

// Logs to the console information about the paragraph
console.log('The total number of words is: ', storyWords.length);
console.log('The total number of sentences is: ', totalSentences);
console.log(`The total number of times 'really' was used: ${reallyCount}`);
console.log(`The total number of times 'very' was used: ${veryCount}`);
console.log(`The total number of times 'basically' was used: ${basicallyCount}`);

console.log(betterWords.join(' '));
