let datasets=[];
//execute env before all
beforeAll(()=>{
    datasets=['sindhu','vyshu'];
})
beforeEach(()=>{
    console.log('before each setup is called')
})
afterEach(()=>{
    console.log('after each setup is called')
})
afterAll(()=>{
    datasets=[];
})
test('test case',()=>{
    expect(datasets.length).toBe(2);

})
test('dataset contain',()=>{
    expect(datasets).toContain('vyshu');
})
test('dataset contain',()=>{
    expect(datasets).toContain('sindhu');
})
