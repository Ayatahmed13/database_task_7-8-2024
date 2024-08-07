const mongodb = require ('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = "db_task_7_8_2024"

mongoClient.connect(connectionUrl , (error,res1) =>{
    if(error){
        return  console.log('error has occured')
    }
    console.log('All Perf')

    const db = res1.db(dbname)

    ////// adding 2 users using insertOne////////

    db.collection('users').insertOne({
            name : 'Ayat',
            age : 22
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
            console.log(" first user inserted in database")
        })

        db.collection('users').insertOne({
            name : 'walaa',
            age : 33
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
            console.log(" second user data inserted in database")
        })
 ///////////////////////////////////////////////////////////////////////////////
 /////// adding 10 users also to database using insert many///////////////////
        db.collection ('users').insertMany(
            [ {
                 name: 'mona',
                 age: 27
             },
             {
                 name: 'manar',
                 age: 27
             },
             {
                 name: 'mayada',
                 age: 27
             },
             {
                 name: 'fatma',
                 age: 27
             },
             {
                 name: 'wafaa',
                 age: 27
             },
             {
                 name: 'shimaa',
                 age: 23
             },
             {
                 name: 'farida',
                 age: 19
             },
             {
                 name: 'hanan',
                 age: 24
             },
             {
                 name: 'gehad',
                 age: 25
             },
             {
                name: 'nour',
                age: 21

            }] , (error,data)=>{
                 if(error){
                     console.log('Unable to insert data')
                 }
                 console.log("10 data inserted in database")
             } 
         )
         ////////////////////////////////////////////////////////////////
         /////////////////////////////////////////////////////////////

         //to print the first 3 users have 27years old
    db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
        if (error) {
             return console.log('error has occured')
        }

         console.log(users)
             
        })
    //////////////////////////////////////////////////////////

    // update name for the first 4 users in database 
    db.collection("users").updateOne({_id:mongodb.ObjectId("66b3612964cc04aac4b10a09")},{
          $set:{name:"Rewan" },
     }).then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})
       

    db.collection("users").updateOne({_id:mongodb.ObjectId("66b3612964cc04aac4b10a0a")},{
            $set:{name:"Rokia" },
       }).then((data1)=>{console.log(data1.modifiedCount)})
       .catch((error)=> {console.log(error)})
      

    db.collection("users").updateOne({_id:mongodb.ObjectId("66b3612964cc04aac4b10a0b")},{

            $set:{name:"tasneem" },
       }).then((data1)=>{console.log(data1.modifiedCount)})
       .catch((error)=> {console.log(error)})
    
    db.collection("users").updateOne({_id:mongodb.ObjectId("66b3612964cc04aac4b10a0c")},{

        $set:{name:"Hager" },
   }).then((data1)=>{console.log(data1.modifiedCount)})
   .catch((error)=> {console.log(error)})
/////////////////////////////////////////////////////////////////////////////////////
    // update age for users that have age=27 (incremention=4)

    db.collection("users").updateMany( { age: 27 } ,{
            $inc: { age: 4 } 
    }).then((data1) => {
        console.log(data1.modifiedCount);
    }).catch((error) => {
        console.log(error);
    })
///////////////////////////////////////////////////////////////////////////////
//update age to first user in db and increment age with 5 years

    db.collection("users").updateOne({_id:mongodb.ObjectId("66b3612964cc04aac4b10a09")},{
        $inc: { age: 5 } 
     }).then((data1) => {
    console.log(data1.modifiedCount);
     }).catch((error) => {
    console.log(error);
     })
//////////////////////////////////////////////////////////////
// update age to all users in db and increment their ages with 10 years
    db.collection('users').updateMany({},{
        $inc: {age: 10}
    }).
    then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})

////////////////////////////////////////////////////////////////
//delete all users that have age=41
db.collection('users').deleteMany({age:41})
    .then((data1)=>{console.log(data1.deletedCount+" user deleted from database")})
   .catch((error)=> {console.log(error)})
})