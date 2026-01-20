import dino from "../dino.js";
// ----------INDEX----------
function index(req, res) {

    const dinoIndex = dino.map(({ id, title }) => ({ id, title }));

    res.send(dinoIndex);
}

// ----------SHOW----------
function show(req, res) {
    const id = parseInt(req.params.id);
    const dinosauro = dino.find((dino) => dino.id === id);


    if (dinosauro !== undefined) {
        res.json(dinosauro);
    } else {
        res.status(404);
        res.json({
            error: "Not Found",
            message: "Dinosauro non trovato"
        })
    }
}

// ----------STORE----------
function store(req, res) {
    const dati = req.body;
    console.log(dati);

    if (dati.title === undefined || dati.title.length === 0) {
        res.status(400);
        return res.json({
            error: "Client Error",
            message: "Il Title è obbligatorio"
        });
    }


    const newId = dino[dino.length - 1].id + 1;
    const newDino = {
        id: newId,
        title: dati.title,
        content: dati.content,
        image: dati.image,
        tags: dati.tags
    };

    dino.push(newDino);
    res.status(201);
    res.json(newDino);
}

// ----------UPDATE----------
function update(req, res) {
    const id = parseInt(req.params.id);
    const dati = req.body;

    const dinosauro = dino.find(dino => dino.id === id);

    if (!dinosauro) {
        return res.status(404).json({
            error: "Not Found",
            message: "Dinosauro non trovato"
        });
    }


    dinosauro.title = dati.title;
    dinosauro.content = dati.content;
    dinosauro.image = dati.image;
    dinosauro.tags = dati.tags;
    res.json(dinosauro);
}

// ----------MODIFY----------
function modify(req, res) {

    const id = parseInt(req.params.id);
    res.send(`Modifica parzialmente alcuni dati del post ${id}`)
}

// ----------DESTROY----------
function destroy(req, res) {
    const id = parseInt(req.params.id);

    const index = dino.findIndex((dinosauro) => dinosauro.id === id);

    // id non trovato\\
    if (index === -1) {
        res.status(404);
        res.json({
            error: "Not Found",
            message: "Dinosauro non trovato"
        });
    } else { //rimuovo l'elemento
        dino.splice(index, 1);
        res.sendStatus(204)
    }
}

const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}


export default controller