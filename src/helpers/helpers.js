module.exports = {
    response: (res, result, status, error) => {
        let resultPrint = {};
        
        if (result.length > 0) {
            resultPrint.error = error || null;
            resultPrint.statusCode = status || 200;
            resultPrint.message = "Berikut datanya ya guysss";
            resultPrint.result = result;
        } else {
            resultPrint.error = error || true;
            resultPrint.statusCode = 404;
            resultPrint.message = "Guys data yang kamu input lo ga tersedia";
        }
        return res.status(resultPrint.statusCode).json(resultPrint);
    },
};