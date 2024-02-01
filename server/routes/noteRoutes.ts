import express from 'express';
import {
  getAllNotes,
  createNote,
  getNote,
  updateNote,
  deleteNote,
} from '../controllers/noteController';

const router = express.Router();
router.route('/').get(getAllNotes).post(createNote);

router.route('/:id').get(getNote).patch(updateNote).delete(deleteNote);

export default router;
