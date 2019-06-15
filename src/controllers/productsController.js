var itemProduct = [];

exports.get = (req, res, next) => {
    res.status(200).send(itemProduct);
    res.status(200).send("Produto retornado com sucesso");
};


exports.getById = (req, res, next) => {
    let id = req.params.id;
    for (i in itemProduct) {
        if (itemProduct[i].id == id) {

            res.json(itemProduct[i]);
            res.status(200).send("Produto retornado com sucesso");
        }
    }

};



exports.post = (req, res, next) => {
    itemProduct.push(req.body)
    res.status(201).send('Requisição POST recebida com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    for (i in itemProduct) {
        if (itemProduct[i].id == id) {
            itemProduct[i] = req.body;
        }
    }
    res.status(204).send(`Requisição PUT recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    for (i in itemProduct) {
        if (itemProduct[i].id == id) {
            itemProduct.splice(itemProduct[i], 1);
        }
    }
    res.status(204).send(`Requisição DELETE recebida com sucesso! ${id}`);
};