const s = 'abppplee';
const d = ['able', 'ale', 'apple', 'bale', 'kangaroo'];

// Pull a word from d
// Loop through it
 // -if the current char of d String = s char ADD to new string
 // if char of d is not in s increment

// If new string === d word
    // subsequence
// If not equal pull a new word and start over



let subs = [];
// Main loop to pull words from D
for(let i=0; i< d.length; i++) {

    const dWord = d[i];
    let trackWord = '';
    for(let j = 0; j < dWord.length; j++) {
        for (let k = j; k < s.length; k++) {
            // matching char
            if(dWord[j] === s[k]) {
                trackWord = trackWord + dWord[j];
                j++;
            }
        }

        if(trackWord === dWord) {
            subs.push(dWord);
        }
    }
}

let longest = '';

for (let l = 0; l < subs.length; l++) {
    if(subs[l].length >= longest.length) {
        longest = subs[l];
    }

}
console.log(`The longest entry in the dictionary that is a sub of A is ${longest}`);



