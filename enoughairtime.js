export function enoughAirtime(itemString, loaded) {
	var calls = 0;
  	var smses = 0;
  	var data = 0;
   	var item = itemString.split(',');
  	console.log(item);

 
  	for (let i =0; i < item.length; i++) {
    	console.log(item[i]);
      	if (item[i].includes('call')) {
        	calls++;
        }
      	else if (item[i].includes('sms')){
        	smses++;
        }
      	else {data++;}
    
    }
  var callcost = calls * 1.88;
  var smscost = smses * 0.75;
  var datacost = data * 12;
  var billtotal = (callcost + smscost + datacost);
  var balance = loaded - billtotal;
  
  if (balance > 0) {
  	return 'R'+ balance.toFixed(2);
  }
  return 'R0.00' ;
}