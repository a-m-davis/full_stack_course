const _ = {
  clamp(number, lower, upper){
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end){
    if (end === undefined){
      end = start;
      start = 0;
    };
    if (start > end){
      let swap = start;
      start = end;
      end = swap;
    };
    if (number >= start && number < end){
      return true;
    } else {
      return false;
    };
  },
  words(string){
    let words = string.split(' ');
    return words;
  },
  pad(string, length){
    if (string.length >= length){
      return string;
    };
    let totalPadding = length - string.length;
    let startPaddingLength = Math.floor(totalPadding/2);
    let endPaddingLength = totalPadding-startPaddingLength;
    let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key){ 
    if (key in object){
    if (object.key !== undefined){
      return true;
      }
    }
    return false;
  },
  invert (object){
    let invertedObject = {};
    for (let key in object){
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey (object, predicate){
    for (let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue){
        return key;
      }
    } return undefined;
  },
  drop (arr, numberToDrop){
    if (!numberToDrop){
      numberToDrop = 1;
    };
    let newArray = arr.slice(numberToDrop);
    return newArray;
  },
  dropWhile (arr, predicate){
    let dropNumber = arr.findIndex(function(element, index) {
      return !predicate(element, index, arr);
    });
    let droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
  },
  chunk (array, size=1){
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size){
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    };
    return arrayChunks;
  }  
};





module.exports = _;