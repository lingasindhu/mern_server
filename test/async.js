// to know how to perform test on async functions
function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },4000);
}
function mydata(callback){
    setTimeout(()=>{
        callback({id:10001})
    },3000);
}

module.exports={fetchData,mydata};