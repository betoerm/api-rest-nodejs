var itemPagamento = [];

exports.get = (req, res, next) => {
    res.status(200).send(itemPagamento);
    res.status(200).send("Pagamento retornado com sucesso");
};


exports.getById = (req, res, next) => {
    let id = req.params.id;
    for (i in itemPagamento) {
        if (itemPagamento[i].id == id) {

            res.json(itemPagamento[i]);
            res.status(200).send("Pagamento retornado com sucesso");
        }
    }
};


exports.post = (req, res, next) => {
    itemProduct.push(req.body)
    res.status(201).send('Pagamento incluído com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    for (i in itemPagamento) {
        if (itemPagamento[i].id == id) {
            itemPagamento[i] = req.body;
        }
    }
    res.status(204).send(`Pagamento alterado com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    for (i in itemPagamento) {
        if (itemPagamento[i].id == id) {
            itemPagamento.splice(itemPagamento[i], 1);
        }
    }
    res.status(204).send(`Pagamento excluído com sucesso! ${id}`);
};