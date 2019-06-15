var itemPedido = [];

exports.get = (req, res, next) => {
    res.status(200).send(itemPedido);
    res.status(200).send("Pedido retornado com sucesso");
};


exports.getById = (req, res, next) => {
    let id = req.params.id;
    for (i in itemPedido) {
        if (itemPedido[i].id == id) {
            res.json(itemPedido[i]);
            res.status(200).send("Pedido retornado com sucesso");
        }
    }

};

exports.post = (req, res, next) => {
    itemProduct.push(req.body)
    res.status(201).send('Pedido gravado com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    for (i in itemPedido) {
        if (itemPedido[i].id == id) {
            itemPedido[i] = req.body;
        }
    }
    res.status(204).send(`Pedido atualizado om sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    for (i in itemPedido) {
        if (itemPedido[i].id == id) {
            itemPedido.splice(itemPedido[i], 1);
        }
    }
    res.status(204).send(`Pedido deletado com sucesso! ${id}`);
};