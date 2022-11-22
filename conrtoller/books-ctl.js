
const model = require("../model/books-model")
const getBooks = async (req,res ) =>{
    await booksMoodel.find({})
    .then((books,err) =>{
      if(err){
        return res.status(400).json({success:false,err})
      }
      if(books.length == 0 ){
        return res.json({success: false,massege:"no books"})
      }
      return res.status(200).json({success:true , massege:books})
  
    })
  }
  const getBooksById = async (req,res) => {
    await booksMoodel.findById(req.params.id)
   .then(book =>{
    if(!book){
      return res.json({massege:"books is not available"})
    }
      return res.json({success: false,massege:"book is not available"})
   })
    return res.status(200).json({success:true,book})
    .catch(error => res.status(400).json({ success: false, error }))
  }
  const createBook = async (req,res) =>{
    await booksMoodel.insertMany(rea.boody.book)
    .then(() =>res.status(300).json({success:true,massege:"books add succesfuly"}))
    .catch((err) => res.status(400).json({success:false,err}))
  }
  module.exports = {
    getBooks,
    getBooksById,
    createBook,
  };
  