const sum =require('./test/sum')
//test case 

test ('1+2=3',()=>{
    expect(sum(1,2)).toBe(3);
})

//toEqual 
test('object in array ',()=>{
    const data={one:1}
    data['two']=2
    expect(data).toEqual({one:1,two:2})

})

//toBeNull used to find the given data is null or not
test('value is null',()=>{
    const n=null;
    expect (n).toBeNull();
})

// toBeDefine to check the value is defined or not
 test('value is defined',()=>{
    const a=1;
    expect(a).toBeDefined();
 })
 

 //toBeTruthy to check the recived value should be true
test('value is true',()=>{
    const bool=true;
    expect(bool).toBeTruthy();
})

//toBeFalsy to check value is false
test('value is false',()=>{
    const bool=false;
    expect(bool).toBeFalsy();
})
