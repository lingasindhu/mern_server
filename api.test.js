const fetchData=require('./test/api')
// const fetch =require('node-fetch')
jest.mock('node-fetch');
test('GET/users api data',async()=>{
    const data=await fetchData();
    console.log(data);
    expect(data).toHaveProperty('getAllUsers')
})