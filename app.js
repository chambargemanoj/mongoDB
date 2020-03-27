

// Connection URL
const mongoose= require ('mongoose')
mongoose.connect("mongodb://localhost:27017/fruitDB", { useUnifiedTopology: true,  useNewUrlParser: true } )

const fruitSchema = new mongoose.Schema({
  name: {
  type: String,
  required: [true, "Please check your data entry ,  name is required"]
},
  rating: {
    type: Number,
      min: 1,
      max: 10
  },
  review: String,
  country: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit ({
  name: "Apple",
  rating: 6,
  review: "Best fruit"
})
// fruit.save()
const kiwi = new Fruit ({
  name: "kiwi",
  rating: 7,
  review: "nice test of fruit"
})

const banana = new Fruit ({
  name: "banana",
  rating: 7,
  review: "l love banan fruit"
})


// Fruit.insertMany([kiwi, banana], function(err ) {
//   if (err) {
//     console.log(err)
//   }
//   else
//   console.log("Successfully saved all the fruits.")
// })

//
// const ageSchema = new mongoose.Schema ({
//   name: String,
//   age: Number
// })
// const Age = mongoose.model ("Age", ageSchema)
// const age = new Age ({
//   name: "Manoj",
//   age: 39
// })
//
// Fruit.find(function(err, fruits) {
// if (err) {
//   console.log (err)
// }
// else {
//
//   mongoose.connection.close()
//   console.log(fruits)
//
// fruits.forEach(function(fruit) {
//   console.log( fruit.name)
// })
// }
// })
//
// Fruit.updateOne( {_id: "5e7d69b02f31e62264d47d45"}, {country: "USA"},
// function (err) {
//   if (err) {
//     console.log(err)
//   }
//   else{
//     console.log ("Recrod updated successfully.")
//   }
// }
//  )


Fruit.deleteOne({rating:6}, function (err) {
  if(err) {
    console.log (err)
  }
  else
  {
    console.log ("Successfully deleted record")
  }
})
fruit.save();
