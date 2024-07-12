import { Request, Response } from "express";

class NoteController {
  findAll = (req: Request, res: Response) => {
    res.status(200).json({
      notes: [],
    });
  };
}

const noteController = new NoteController();

export default noteController;
