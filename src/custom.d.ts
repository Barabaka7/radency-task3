import { Note } from "./services/note";

declare global {
  namespace Express {
    interface Request {
      note?: Note;
    }
  }
}