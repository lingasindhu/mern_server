const {getdata}=require('./utils')
function processdata(){
    return `processed: ${getdata()}`;

}
module.exports=processdata