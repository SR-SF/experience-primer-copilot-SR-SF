// Create web server

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Get comment list
router.get('/', commentController.comment_list);

// Display form to create a new comment
router.get('/create', commentController.comment_create_get);

// Handle POST request to create a new comment
router.post('/create', commentController.comment_create_post);

// Handle DELETE request to delete a comment by id
router.delete('/:id/delete', commentController.comment_delete);

module.exports = router;