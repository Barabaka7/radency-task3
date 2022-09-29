import { Router, Request, Response, NextFunction } from "express";
import { getAllNotes } from "../services/notes/get-all-notes";
import { findOneNote } from "../services/notes/find-one-note";
import { NoteUpdateRequest, updateNote } from "../services/notes/update-note";

const router = Router();

type WithId = { id: string };

router.param('id', (req: Request, res: Response, next: NextFunction, id: string) => {
  const note = findOneNote(Number(id));

  if (note === null) {
    res.status(404).send({message: 'Not found'});
    return;
  }

  req.note = note;
  next();
});

router.get('/', (req: Request, res: Response) => {
  const notes = getAllNotes();
  res.send(notes);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('TODO: add note');
});

router.get('/:id', (req: Request<WithId>, res: Response) => {
  res.send(req.note);
});

router.delete('/:id', (req: Request, res: Response) => {
  res.send('TODO: delete one note');
});

router.get('/stats', (req: Request, res: Response) => {
  res.send('TODO: show stats');
});

router.patch('/:id', (req: Request<WithId, any, NoteUpdateRequest>, res: Response) => {
  const updatedNote = updateNote(req.note!, req.body);
  res.send(updatedNote);
});

export { router };
