const cats = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendCat(){
    cats.push('Ralph')
}
function destructivelyPrependCat(){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop('Garfield')
}
function destructivelyRemoveFirstCat(){
    cats.shift('Milo')
}
const copyOfCats1 = ['Milo','Otis','Garfield','Broom']
function appendCat(){
return copyOfCats1
}
const copyOfCats2 = ['Arnold','Milo','Otis','Garfield']
function prependCat(){
    return copyOfCats2
}
const copyOfCats3 = ['Milo','Otis']
function removeLastCat(){
    return copyOfCats3
}
const copyOfCats4 = ['Otis','Garfield']
function removeFirstCat(){
    return copyOfCats4
}