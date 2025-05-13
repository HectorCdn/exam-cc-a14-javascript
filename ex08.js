function additionerrPar(tableau, multiplicateur) {
	return tableau.map((nombre) => nombre + multiplicateur);
}

const tableau = [1, 2, 3, 4, 5];
const nombre = 10;
console.log(additionerrPar(tableau, nombre)); // Output: [11, 12, 13, 14, 15]
