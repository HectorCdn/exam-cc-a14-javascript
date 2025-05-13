const produits = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
  ];
  
  function ajouterTva(produits) {
    return produits.map(produit => produit.price + produit.price * 20/100);
  }
  
  console.log(ajouterTva(produits)); // Output : [{ name: 'Laptop', price: 1200 }, { name: 'Phone', price: 600 }, { name: 'Tablet', price: 360 }]