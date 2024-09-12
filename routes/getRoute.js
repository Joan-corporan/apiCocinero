const {Router} = require("express")
const {getDataJoin} = require("../controllers/getDataJoin")
const { postDataJoin } = require("../controllers/postDataJoin");
const { getMesa } = require("../controllers/getMesa");
const { getProduct } = require("../controllers/getProduct");
const { getWaiters } = require("../controllers/getWaiter");
const { getCategoria } = require("../controllers/getCategoria");
const { getPedidos } = require("../controllers/getPedidos");

const router=Router();




router.get("/pedidos",getPedidos)
router.get("/categoria",getCategoria)
router.get("/mesa",getMesa)
router.get("/product",getProduct)
router.get("/join",getDataJoin)
router.get("/waiter",getWaiters)

router.post('/finalizarPedido/:idPedido',postDataJoin)
module.exports = router;