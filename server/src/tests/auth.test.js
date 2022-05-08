const request = require('supertest');
const url = 'http://localhost:5000'
require('../app');
const { User } = require('../database/models')


describe('Authenticate a user', () => {

    // test model
    const newUser = {
        name: 'testName',
        email: 'test1@gmail.com',
        password: '123456'
    };
    
    const wrongUser = {
        name: '',
        email: 'abc',
        password: '01'
    };


    // delete the test model from the database
    afterAll( async () => {
        await User.destroy({
            where : {
                email:'test1@gmail.com'
            }
        })
    })

    describe('POST /auth/register', () => {

        test('Register Success.', async () => {
            await request(url)
                .post('/auth/register')
                .send(newUser)            
                .expect('Content-Type', /application\/json/)
                .expect(201);
        });

        test('Invalid format Email or Password.', async () => {
            await request(url)
                .post('/auth/register')
                .send(wrongUser)            
                .expect('Content-Type', /application\/json/)
                .expect(400);
        });

        test('A fail to try create an existing user.', async () => {
            await request(url)
                .post('/auth/register')
                .send({ name: 'testName', email: 'test1@gmail.com', password: 'newpass'})            
                .expect('Content-Type', /application\/json/)
                .expect(401, {
                    success : false,
                    message : 'User already exists'
                });
        });

    })

    describe('POST /auth/login', () => {

        test('Login Success.', async () => {
            await request(url)
                .post('/auth/login')
                .send(newUser)            
                .expect('Content-Type', /application\/json/)
                .expect(200);
        });
        
        test('Invalid credentials.', async () => {
            await request(url)
                .post('/auth/login')
                .send({ email: 'test@gmail2.com', password: '000000' })
                .expect('Content-Type', /application\/json/)
                .expect(400, {
                    success: false,
                    message: 'Invalid credentials',
                });
        });

    })    
      
})



