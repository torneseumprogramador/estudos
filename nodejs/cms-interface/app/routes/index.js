var express = require('express');
var HomeController = require('../controllers/home_controller');
var UsuariosController = require('../controllers/usuarios_controller');
var PaginasController = require('../controllers/paginas_controller');
var router = express.Router();

/* GET home page. */
router.get('/', HomeController.index);

router.get('/usuarios', UsuariosController.index);
router.get('/usuarios/novo', UsuariosController.novo);
router.post('/usuarios/cadastrar', UsuariosController.cadastrar);
router.get('/usuarios/:id/editar', UsuariosController.editar);
router.post('/usuarios/:id/atualizar', UsuariosController.atualizar);
router.get('/usuarios/:id/excluir', UsuariosController.excluir);

router.get('/paginas', PaginasController.index);
router.get('/paginas/novo', PaginasController.novo);
router.post('/paginas/cadastrar', PaginasController.cadastrar);
router.get('/paginas/:id/preview', PaginasController.preview);
router.get('/paginas/:id/editar', PaginasController.editar);
router.post('/paginas/:id/atualizar', PaginasController.atualizar);
router.get('/paginas/:id/excluir', PaginasController.excluir);

module.exports = router;
