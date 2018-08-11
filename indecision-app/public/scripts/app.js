'use strict';

var add = function add(a, b) {
    return a + b;
};

console.log(add(5, 24));

var user = {
    name: 'Johnattan',
    cities: ['NY', 'Cali', 'Deerfield'],
    printPlacesLiver: function printPlacesLiver() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' hasLiveIn ' + city + '!';
        });

        // this.cities.forEach( (city) => {
        // console.log(this.name + 'has lived in city ' + city );
        // });
    }
};

console.log(user.printPlacesLiver());

var multiplier = {
    numbers: [1, 2, 3],
    mb: 5,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return num * _this2.mb;
        });
    }
};

console.log(multiplier.multiply());
