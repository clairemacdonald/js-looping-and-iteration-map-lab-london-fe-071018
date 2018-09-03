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
  return drivers.map(e=>{
    const name = e.name;
    const hometown =e.hometown;
    console.log(name + " is from " + hometown)
    return name + " is from " + hometown;
  });
 
}
