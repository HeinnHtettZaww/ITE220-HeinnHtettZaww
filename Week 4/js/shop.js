

var customerName = "Hein";
var customer = document.getElementById("name");
customer.textContent = customerName;


var products = [
	"Brooklyn T-Shirt White", 
	"Brooklyn T-Shirt Black", 
	"Apple Watch", 
	"Android Phone"
];
var productsText = "";
var productsElement = document.getElementById("product-list");

var prices = [10,10,199,159];
var total = 0;
for(var i = 0; i<products.length; i++) {

	productsText += "<li class='list-group-item'>"+products[i]+"<span class='badge'>$"+prices[i]+"</span></li>";
	(total += prices[i]);
}

productsElement.innerHTML = productsText;


var totalPriceElement = document.getElementById("total-price");
totalPriceElement.textContent = total-(total*.25)+" ";


var date = new Date();
var hour = date.getHours();
var mae;
if (hour < 12 ){
	mae = "Good Morning";
}else if(hour< 18){
	mae = "Good Afternoon";
}else{
	mae = "Good Evening";
}
document.getElementById("goodmae").innerHTML = mae;
