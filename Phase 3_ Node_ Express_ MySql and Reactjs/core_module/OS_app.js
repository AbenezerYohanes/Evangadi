const OS_Module=require('os');

//console.log(OS_Module);

let FreeMemory=OS_Module.freemem(); // freemem() returns the free memory in bytes

let TotalMemory=OS_Module.totalmem(); // totalmem() returns the total memory in bytes

let FreeMemoryInGB=FreeMemory/(1024*1024*1024); // converting bytes to GB

let TotalMemoryInGB=TotalMemory/(1024*1024*1024); // converting bytes to GB

console.log(`Free Memory: ${FreeMemoryInGB.toFixed(2)} GB`);

console.log(`Total Memory: ${TotalMemoryInGB.toFixed(2)} GB`);

let platfrom=OS_Module.platform(); // platform() returns the platform of the OS telling whether it is Windows, Linux, or MacOS
 // my pc win32
console.log(`Platform: ${platfrom}`);
