// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  
  
   return driver.filter( x => x.revenue > revenue);
  
}

function driversNamesWithRevenueOver(driver, revenue){
  
  
   
   const list=driver.filter( x => x.revenue > revenue);
  // console.log(list);
    return list.map(function(driver) {
    return `${driver.name}`;
   });
}
