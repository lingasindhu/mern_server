const express = require('express');
const router = express.Router();
const Book = require('../model/bookModel');
const User = require('../model/authorModel');  // Assuming you have a userModel for authors

// Create a new book and update author's book count
router.post('/', async (req, res) => {
    try {
        const { _id, name, publisher, description, author_id } = req.body;
        const newBook = new Book({ _id, name, publisher, description, author_id });

        // Save the new book to the database
        await newBook.save();

        // Update the author's total books count
        const updatedAuthor = await User.findByIdAndUpdate(
            author_id,
            { $inc: { totalBooks: 1 } },  // Increment the totalBooks field by 1
            { new: true }  // Return the updated document
        );

        if (!updatedAuthor) {
            return res.status(404).send({ message: "Author not found" });
        }

        res.status(201).send({ message: "Book Created", newBook, updatedAuthor });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// Get all books
router.get('/', async (req, res) => {
    try {
        const data = await Book.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// Update an author's total books count (assuming you want a separate route for this)
router.put('/:id', async (req, res) => {
    try {
        const authorId = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(
            authorId,
            { $inc: { totalBooks: 1 } },  // Increment the totalBooks field by 1
            { new: true }  // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).send({ message: "Author not found" });
        }

        res.status(200).send({ message: "Book count updated successfully", updatedUser });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;
