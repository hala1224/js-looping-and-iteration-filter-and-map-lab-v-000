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

function exactMatch(driver, attr) {
  
  attr1=attr.name;
  attr2=attr.revenue;
  
  
    if(Object.keys(attr)=='name'){
        return list1=driver.filter(x => x.name === attr1);
    } 

    if(Object.keys(attr) =='revenue'){
      // console.log('inside if');
      return list=driver.filter(x => x.revenue===attr2);
   }
}

function exactMatchToList(driver, attr) {
  
  attr1=attr.name;
  attr2=attr.revenue;
  
  
    if(Object.keys(attr)=='name'){
        return list1=driver.filter(x => x.name === attr1);
    } 

    if(Object.keys(attr) =='revenue'){
      // console.log('inside if');
      return list=driver.filter(x => x.revenue===attr2);
   }
}