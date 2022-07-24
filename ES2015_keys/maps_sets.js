new Set([1,1,2,2,3,4]) // is 1,1,2,3,4

// it would return ref
 
// m would have two seperate arrays depicting true and false each


const hasDuplicate = arr => new Set(arr).size !== arr.length;
function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lower = char.toLowerCase()
      if(isVowel(lowe)){
        if(vowelMap.has(lower)){
          vowelMap.set(lower, vowelMap.get(lower) + 1);
        } else {
          vowelMap.set(lower, 1);
        }
      }
    }
    return vowelMap;
  }