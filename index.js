// Code your solution in this file.

function lowerCaseDrivers(drivers) {
return drivers.map(driver => driver.toLowerCase());
  
}

function nameToAttributes(array) {
  return array.map(e=>{
    const nameAndSurname = e.split(" ");
    return {
      firstName: nameAndSurname[0],
      lastName: nameAndSurname[1]
    };
  });
}


function attributesToPhrase(drivers) {
  return array.map(e=>{
    const nameAndHometown = e.split("");
    return {
      name: nameAndHometown[0],
      hometown: nameAndHometown[1]
      
    };
  });
 
}
