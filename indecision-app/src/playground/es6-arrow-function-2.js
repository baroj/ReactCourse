const add = (a ,b ) => {
return a+b;
};

console.log(add(5,24));

const user = {
    name: 'Johnattan',
    cities:['NY', 'Cali','Deerfield'],
    printPlacesLiver(){
        return this.cities.map((city) => this.name + ' hasLiveIn ' + city + '!');
        


        // this.cities.forEach( (city) => {
        // console.log(this.name + 'has lived in city ' + city );
        // });

    }
}

console.log(user.printPlacesLiver());


const multiplier = {
    numbers: [1, 2, 3],
    mb : 5,
    multiply(){ 
        return this.numbers.map(
            (num) => num * this.mb 
        )}
};

console.log(multiplier.multiply());