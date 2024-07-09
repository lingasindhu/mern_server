jest.mock('./test/utils',()=>({
            getdata:jest.fn(),
}))
const {getdata}=require('./test/utils');
const processdata=require('./test/processData')

test('mocked function data',()=>{
    getdata.mockReturnValue('mocked data');
    expect(processdata()).toBe('processed: mocked data')
});
