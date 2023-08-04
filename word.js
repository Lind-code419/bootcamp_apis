export function longestWord(wordList) {
    let wordScore1 = 0;
    let wordScore2 = 0;
    let separateList = [];
    separateList = wordList.split(' ');
    console.log(separateList[0].length);
    wordScore1 = separateList[0].length;

    for (let i = 0; i < separateList.length; i++) {
        console.log(separateList[i]);
        if (separateList[i].length >= wordScore1) {
            wordScore1 = separateList[i].length;
            console.log(wordScore1);
            wordScore2 = i;
        }

    }
    return separateList[wordScore2];
}
export function shortestWord(wordList) {
    let wordScore1 = 0;
    let wordScore2 = 0;
    let separateList = [];
    separateList = wordList.split(' ');
    console.log(separateList[0].length);
    wordScore1 = separateList[0].length;

    for (let i = 0; i < separateList.length; i++) {
        console.log(separateList[i]);
        if (separateList[i].length <= wordScore1) {
            wordScore1 = separateList[i].length;
            console.log(wordScore1);
            wordScore2 = i;
        }

    }
    return separateList[wordScore2];

}
export function wordLengths(wordList) {
    let wordScore1 = 0;
    //let wordScore2 = 0;
    let separateList = [];
    separateList = wordList.split(' ');
    console.log(separateList[0].length);
    //wordScore1 = separateList[0].length;

    for (let i = 0; i < separateList.length; i++) {
        console.log(separateList[i]);

        wordScore1 += separateList[i].length;
        console.log(wordScore1);
        //wordScore2 = i;


    }
    return wordScore1;
}