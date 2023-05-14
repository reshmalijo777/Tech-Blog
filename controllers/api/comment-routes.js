const router = require('express').Router();
const {Comment,User}= require('../../models');

router.post('/', async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
       userId:req.userId
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  
router.delete('/:id', async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id,
          userId: req.userId,
        },
      });
  
      if (!commentData) {
        res.status(404).json({ message: 'No comments found with this id!' });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;