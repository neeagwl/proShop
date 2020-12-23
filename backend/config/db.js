const mongoose = require('mongoose');

const db_url = "mongodb://localhost:27017/proshop" || process.env.DB_URL ;


  mongoose.connect(db_url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        console.log('MongoDB Connected!')    
 

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
