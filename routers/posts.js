import express from "express";
import dino from "../dino.js";

import postsController from '../controllers/postsController.js'

const router = express.Router()
// ----------INDEX----------
// lettura di tutti i dinosuari
router.get("/", postsController.index);


// ----------SHOW----------
// dettagli di un singolo dinosauro
router.get("/:id", postsController.show);


// ----------STORE----------
// creare un nuovo dinosauro
router.post("/", postsController.store);


// ----------UPDATE----------
// modificiare un dinosauro esistente 
router.put("/:id", postsController.update);


// ----------MODIFY----------
// modificare solo alcuni dati di un dinosauro esistente 
router.patch("/:id", postsController.modify);


// ----------DESTROY----------
// cancellare un dinosauro esistente
router.delete("/:id", postsController.destroy);




export default router;
