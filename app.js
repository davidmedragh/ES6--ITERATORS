"use strict";
const myFavoriteAuthors = [
    'David MEDRAGH',
    'Maxime MEDRAGH',
    'Ryan KOZAK'
];

//for loop
console.log("for loop example");
for (var index = 0; index < myFavoriteAuthors.length; index++) {
    const element = myFavoriteAuthors[index];
    console.log(element);

}

console.log("\n while example");
//while loop
index = 0;
while (index < myFavoriteAuthors.length) {
    console.log(myFavoriteAuthors[index]);
    index++;
}

//for-of loop iterator
console.log("\n for-of loop");
for (const iterator of myFavoriteAuthors) {
    console.log(iterator);

}

const myFavoriteSingers = {
    allSingers : {
    rockSingers: [
        'Dupond David',
        'Martin nicolas'
    ],

    popSingers: [
        'Michael jackson',
        'Didier blazz'
    ],

    raiSingers: [
        'cheb Khaled',
        'Cheb Mami'
    ],
    bluesSingers: [
        'theo adolph',
        'Mimi patea'
    ]
},

/**
 * @returns return a singers array
 */
getAllSingers(){
    const singers = [];

    for (const iterator of this.allSingers.rockSingers) {
        singers.push(iterator);
    }
    for (const iterator of this.allSingers.popSingers) {
        singers.push(iterator);
    }
    for (const iterator of this.allSingers.raiSingers) {
        singers.push(iterator);
    }
    return singers;
},
[Symbol.iterator](){
    //get all rockSingers in an array
    const genres = Object.values(this.allSingers);

    //store the current genre and index
    let currentSingerIndex = 0;
    let currentGenreIndex = 0;

    return {
        //implementation of next()
        next() {
            const singers = genres[currentGenreIndex];

            //do not have more singers
            const doNotHaveMoreSingers = !(currentSingerIndex < singers.length)
            if (doNotHaveMoreSingers){
                // When that happens, we move the genre index to the next genre
                currentGenreIndex++;
                // and reset the author index to 0 again to get new set of authors
                currentSingerIndex = 0;

            }
            //can give more values
            const doNotHaveMoreGenre = !(currentGenreIndex < genres.length);
            if (doNotHaveMoreGenre) {
                return {
                    value : undefined,
                    done : true
                };
            }

            return {
                value : genres[currentGenreIndex][currentSingerIndex++],
                done :false
            }
        }
    }
}
}
// for-of loop

console.log('For-of loop on myFavoriteSingers'+ (myFavoriteSingers.getAllSingers)());
for (const iterator of (myFavoriteSingers.getAllSingers)()) {
    console.log(iterator);
}

//iterate on allSingers array
for (const iterator of  Object.values(myFavoriteSingers.allSingers)) {
    console.log(iterator);
    
}

//iterate over myFavoriteSingers
console.log('iterate over myFavoriteSingers');
for (const iterator of  myFavoriteSingers) {
    console.log(iterator);
    
}
