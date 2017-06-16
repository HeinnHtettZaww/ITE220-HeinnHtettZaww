window.onload= function(){
    
    var samsung = ["GalaxyS8",
                   "GalaxyS8+",
                   "GalaxyNote7",
                   "GalaxyJMax",
                   "GalaxyA7",
                   "GalaxyA5",
                   "GalaxyA9",
                   "GalaxyS7",
                   "GalaxyS7edge",
                   "GalaxyNote5"];
    var images = ["samsung/galaxyS8",
                  "samsung/galaxyS8+",
                  "samsung/galaxyNote7",
                  "samsung/galaxyJMax",
                  "samsung/galaxyA7",
                  "samsung/galaxyA5",
                  "samsung/galaxyA9",
                  "samsung/galaxyS7",
                  "samsung/galaxyS7edge",
                  "samsung/galaxyNote5"];
    var prices = [800,850,900,720,750,700,780,600,650,540];
    var a = {
        a: function(){
            var samsungDisplay = document.getElementById("content");
            var tags = "";
            for (var i=0; i < samsung.length; i++){
                tags += "<li id='list' class='btn text-center' style='float:left; margin:1px'><figure><img class='img-responsive' src='images/"+images[i]+".jpeg'><br><figcaption><strong>"+samsung[i]+"<br><span style='font-size:12px' class='label label-danger'>$"+prices[i]+"</span></strong><br><br><form method='post' action='https://www.paypal.com/cgi-bin/webscr' target='paypal'><input type='hidden' name='add' value='1'><input type='hidden' name='cmd' value='_cart'><input type='hidden' name='business' value=''><input type='hidden' name='item_name' value='Baseball Hat'><input type='hidden' name='item_number' value='123'><input type='hidden' name='amount' value='5.95'><input type='hidden' name='shipping' value='1.00'><input type='hidden' name='shipping2' value='0.50'><input type='hidden' name='handling' value='2.00'><input type='hidden' name='currency_code' value='USD'><input type='hidden' name='return' value=''><input type='hidden' name='undefined_quantity' value='1'><input type='image' src='http://www.paypalobjects.com/en_US/i/btn/x-click-but22.gif' border='0' name='submit' width='87' height='23' alt='Make payments with PayPal - its fast, free and secure!'></form></figcaption></figure></li>";
            }samsungDisplay.innerHTML=tags;
            
        }
        };
    a.a();
}

    
    