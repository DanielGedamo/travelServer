const router = require("express").Router()
const{
    getBooks,
    getBooksById,
    createBook
} = require("../conrtoller/books-ctl")
router.get("/",getBooks)
router.get("/GetById",getBooksById)
router.put("/addBook",createBook)

module.exports = router