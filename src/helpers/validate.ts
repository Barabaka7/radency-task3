import Yup from "yup";
import { Request, Response, NextFunction } from "express";

export const validateBody =
  (schema: Yup.AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    //const castedBody = schema.cast(req.body);

    try {
      await schema.validate(req.body);
      return next();
    } catch (err) {
      return res.status(500).send("validation failed");
    }
  };

export const validateBodyPatch =
  (schema: Yup.AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    //const castedBody = schema.cast(req.body);

    try {
      await schema.validate(req.body);
      return next();
    } catch (err) {
      return res.status(500).send("validation failed");
    }
  };
