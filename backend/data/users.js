const bcrypt = require('bcryptjs');

const user =[
    {
        name:'Admin01',
        email:'doe22john@eddit.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Eemily Miller',
        email:'emilymiller7@eddit.com',
        password:bcrypt.hashSync('123456bb',10),
    },
    {
        name:'Kurt nazis',
        email:'nazisatkurt55@eddit.com',
        password: bcrypt.hashSync('789012',10),
    }
]

module.exports= user;