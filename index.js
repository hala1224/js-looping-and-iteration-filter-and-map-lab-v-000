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

function exactMatch(drivers, attributeValuePair) {
  
}