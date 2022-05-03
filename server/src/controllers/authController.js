const { User } = require('../database/models');
const bcrypt = require('bcrypt');
const JWTGenerator = require('../helpers/jwt');
const getUrl = (req) => req.protocol + '://' + req.get('host') + req.originalUrl;



module.exports = {
    
    register: async (req, res) => {

        const { name, email, password } = req.body;

        try {

            const user = await User.findOne({where: {email}});

            if (user) {
                return res.status(401).json({
                    success : false,
                    message : 'User already exists'
                });
            };

            const newUser = await User.create({
                name,
                email,
                password: bcrypt.hashSync(password, 12)
            });
            
            await newUser.save();

            const token = await JWTGenerator(newUser.id, newUser.name);

            return res.status(201).json({ 
                meta:{
                    success: true,
                    url: getUrl(req),
                    message: 'successfully registered user'
                },
                data:{
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    token
                }
            });

        } catch (error) {
            
            console.log(error);
            return res.status(500).json({
                success : false,
                message : 'Contact the site administrator',
                error
            });

        }

    },
    login: async (req, res) => {

        const { email, password } = req.body;
        
        try {
            
            const user = await User.findOne({where: {email}});

            const validatePass = user &&                     
            bcrypt.compareSync(password, user.password); // si user existe comparo el password 

            if (!user || !validatePass) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid credentials'
                })
            } 

            /* Si todo salio bien genero el JWT */
            const token = await JWTGenerator(user.id, user.name);
            //console.log(user);
            
            return res.status(200).json({
                meta:{
                    success: true,
                    url: getUrl(req),
                    message: 'Successful user login'
                },
                data:{
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    token
                }
            });

        } catch (error) {
            
            console.log(error);
            return res.status(500).json({
                success : false,
                message : 'Contact the site administrator',
                error
            });

        }



    },
    revalidateToken: async (req, res) => {

        try {

            const awaitToken = await JWTGenerator(req.id, req.name);

            return req.status(200).json({
                success: true,
                token: awaitToken
            });
            
        } catch (error) {

            console.log(error);
            return res.status(500).json({
               success : false,
               message : 'Contact the site administrator',
               error
           });
    
        }

    }
    
}
