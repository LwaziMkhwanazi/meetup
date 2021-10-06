// POST api/new-meetups
import {MongoClient} from "mongodb"

 async function handler(req,res){
    if(req.method === 'POST'){
            try {
                const data = req.body
                const {title,description,image,address} = data
                const client = await  MongoClient.connect('')
                const db = client.db()
                    const meetupCollections = db.collection('meetups')
                  const results = await meetupCollections.insertOne({title,description,image,address})
                  console.log(results)
                  client.close()
                  res.status(201).json({message:"Meetup created"})
            } catch (error) {
                console.log(error.message)
            }
    }
}

export default handler
