function differenceMaxMin(tableau) {
    let max = tableau[0];
    let min = tableau[0];
  
    for (let i = 1; i < tableau.length; i++) {
      if (tableau[i] > max) {
        max = tableau[i];
      }
      if (tableau[i] < min) {
        min = tableau[i];
      }
    }
  
    return max - min;
  }
  
  const tableau = [10, 5, 20, 8, 15];
  console.log(differenceMaxMin(tableau)); // Output: 15
  