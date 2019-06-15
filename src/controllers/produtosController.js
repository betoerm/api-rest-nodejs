var itemProduto = [];

exports.get = (req, res, next) => {
    res.status(200).send(itemProduto);
    res.status(200).send("Produto retornado com sucesso");
};


exports.getById = (req, res, next) => {
    let id = req.params.id;
    for (i in itemProduto) {
        if (itemProduto[i].id == id) {

            res.json(itemProduto[i]);
            res.status(200).send("Produto retornado com sucesso");
        }
    }
};


exports.post = (req, res, next) => {
    itemProduct.push(req.body)
    res.status(201).send('Produto incluído com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    for (i in itemProduto) {
        if (itemProduto[i].id == id) {
            itemProduto[i] = req.body;
        }
    }
    res.status(204).send(`Produto alterado com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    for (i in itemProduto) {
        if (itemProduto[i].id == id) {
            itemProduto.splice(itemProduto[i], 1);
        }
    }
    res.status(204).send(`Produto excluído com sucesso! ${id}`);
};