export default function errorHandles(err, req, res, next) {
    console.error(err.stack);
    res
        .status(500)
        .json({
            error: `Internal Server Error`,
            message: err.message,
        });
};

// err.stack contiene messaggio di ErrorEvent, file e riga dove è avvenuto
// esempio: Error: Il title è obbligatorio
//         at store (postsController.js:25)

// res.status(500), dove 500 è internal server error