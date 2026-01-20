export default function notFound (req, res, next){
    res
        .status(404)
        .json({
            error: 404,
            message: `page ${req,path} not found`,
        });

    next();
}