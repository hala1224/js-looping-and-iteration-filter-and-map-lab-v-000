// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  
  
   return driver.filter( x => x.revenue > revenue);
  
}

function driverNamesWithRevenueOver(driver, revenue){
  
  // Filter the revenue and pass it to map function to extract the name
   
   const list=driver.filter( x => x.revenue > revenue);
  
    return list.map(function(driver) {
    return `${driver.name}`;
   });
}

function exactMatch(driver, attributeValuePair) {
  
  attr1=attributeValuePair.name;
  attr2=attributeValuePair.revenue;
  console.log(attributeValuePair.keys);
  
    const list1=driver.filter(x => x.name === attr1);
 
    const list=driver.filter(x => x.revenue===attr2);
  
     if(attr1 === 'undefined'){
       return list1;
     }

     if(attr2 === 'undefined'){

      return list;
     }

}