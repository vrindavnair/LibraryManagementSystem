const express =require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")
const Book = require("./models/book");
const router = express.Router();


const app=express();
app.use(bodyParser.json());
app.use(cors());

var connectDb=()=>{
mongoose.connect('mongodb://127.0.0.1:27017/librarysystem').then((res)=>{
    console.log('database connected')
}).catch((err)=>{
    console.log(err) 
})
}

router.post("/books", async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        publicationYear: req.body.publicationYear,
        description: req.body.description
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put("/books/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete("/books/:id", async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: "Book not found" });
        res.json({ message: "Book deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.get("/api/books", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



app.use("/api", router);

app.listen(9000, () => {
    console.log("server is running on port 9000");
    connectDb();
});


