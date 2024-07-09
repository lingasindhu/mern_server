const {fetchData,mydata} =require('./test/async');
test('callback data',done=>{
    function callback(data){
        try{
            expect(data).toBe('admin');
            done();
        }
        catch(err)
        {
            done(err)
        }
    }
    fetchData(callback);
})
test('callback my data',done=>{
    function callback(data){
        try{
            expect(data.id).toBe(10001);
            done();
        }
        catch(err)
        {
            done(err)
        }
    }
    mydata(callback);
})

//mock function
test('mocking callback function',done=>{
    const mockfunction=jest.fn(data=>{
        expect(data).toBe('admin')
       
        done();
    })
    fetchData(mockfunction)
})
