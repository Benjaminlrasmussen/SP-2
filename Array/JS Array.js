// JS Array exercise //

// a) //
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
///////

// b) //
var all = boys.concat(girls);
////////

// c) //
var csv = all.join(",");
var hyphen = all.join("-");
////////

// d) + e) //
all.push("Lone", "Gitte");
all.unshift("Hans", "Kurt");
/////////////

// f) + g) //
all.shift();
all.pop();
/////////////

// h) //
all.splice(3, 2);
////////

// i) //
all.reverse();
////////

// j) //
all.sort();
////////

// k) //
all.sort(function(a, b){return a.toLowerCase().localeCompare(b.toLowerCase)})
////////

// i) //
all = all.map(function(str){ return str.toUpperCase(); })
////////

// m) //
var newAll = all.filter(function(str){ if (str.startsWith("L") || str.startsWith("I")){ return true; } return false; });
////////

console.log(all.join(","));
console.log(newAll.join(","));