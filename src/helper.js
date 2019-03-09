export function convertStringToLatLng(location){
    return [parseFloat(location.latitude), parseFloat(location.longitude)]
}

export function getDriverName(name){
    return `${name.first} ${name.last}`
}

export function filterDrivers(drivers, filter){
    let filteredDrivers=drivers;

    if(filter.name != ''){
        filteredDrivers = filteredDrivers.filter((driver)=>getDriverName(driver.name).toLowerCase().includes(filter.name));
    }

    if(filter.age != ''){
        filteredDrivers = filteredDrivers.filter((driver)=>driver.age.toString().includes(filter.age))
    }

    return filteredDrivers;
}

export function filterTasks(tasks, drivers, filter){
   
    if(filter.name == '' && filter.age == ''){
       return tasks;
    }
   
    let filteredDrivers = filterDrivers(drivers, filter);
    
    return tasks.filter((task)=> filteredDrivers.find(driver=> task.driverId === driver._id));
}