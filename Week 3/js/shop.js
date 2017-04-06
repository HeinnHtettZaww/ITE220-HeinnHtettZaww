var price;
var quantity;
var total;
var customer = "Hein";


price = 5;
quantity = 14;
total = price * quantity;

//document.write("Total is " + total);
var cust = document.getElementById("name");
var totals = document.getElementById("totalprice");
//h3.textContent = "is " + total;
cust.textContent = customer;
totals.textContent = total;