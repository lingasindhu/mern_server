const mongoose =require('mongoose')
describe('MongoDB connected',()=>{
    beforeAll(async ()=>{
        const url ='mongodb+srv://sindhulinga18:JEdVAinM1xxzdwxv@cluster0.9x5rzyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(url);

    })
    test('mongodb connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1);
    })
})

