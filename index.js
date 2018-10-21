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
  
  if (attr1 !== 'undefined'){
    
    const list=driver.filter(x => x.name === attr1)
    return list;
    }
    
  // const list=driver.filter (x => x.revenue === attr2);
  
}