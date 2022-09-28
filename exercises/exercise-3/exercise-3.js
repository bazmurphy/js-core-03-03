let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt(orderArray) {
  console.log(`QTY\tITEM\tTOTAL`);
  orderArray.forEach(({quantity, itemName, unitPrice}) => {
    console.log(`${quantity}\t\t${itemName}\t\t${(quantity * unitPrice).toFixed(2)}`)
  })
  // destructure the object properties inside the reduce currentValue parameter
  console.log(`\nTotal: ${(orderArray.reduce((acc, {quantity, unitPrice}) => acc + (quantity * unitPrice), 0)).toFixed(2)}`)
}

printReceipt(order);
// QTY	ITEM	TOTAL
// 1		Hot cakes		2.29
// 2		Apple Pie		2.78
// 1		Egg McMuffin		2.80
// 1		Sausage McMuffin		3.00
// 2		Hot Coffee		2.00
// 4		Hash Brown		1.60

// Total: 14.47