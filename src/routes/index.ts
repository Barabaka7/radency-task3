import { Router, Request, Response, NextFunction } from "express";

const router = Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('This is a notes management server.');
});

export { router };
