var express = require('express');
var HomeController = require('../controller/home_controller');
var UsuariosController = require('../controller/usuarios_controller');
var PaginasController = require('../controller/paginas_controller');
var router = express.Router();

/* GET home page. */
router.get('/', HomeController.index);
router.get('/usuario', HomeController.usuario);

router.head('/usuarios.json', UsuariosController.head);
router.get('/usuarios.json', UsuariosController.todos);
router.post('/usuarios.json', UsuariosController.criar);
router.put('/usuarios.json', UsuariosController.atualizar);
router.options('/usuarios.json', UsuariosController.options);
router.get('/usuarios/:id.json', UsuariosController.porId);
router.patch('/usuarios/:id.json', UsuariosController.atualizarPorPatch);
router.delete('/usuarios/:id.json', UsuariosController.excluirUsuario);
router.options('/usuarios/:id.json', UsuariosController.options);

router.head('/paginas.json', PaginasController.head);
router.get('/paginas.json', PaginasController.todos);
router.post('/paginas.json', PaginasController.criar);
router.put('/paginas.json', PaginasController.atualizar);
router.options('/paginas.json', PaginasController.options);
router.get('/paginas/:id.json', PaginasController.porId);
router.patch('/paginas/:id.json', PaginasController.atualizarPorPatch);
router.delete('/paginas/:id.json', PaginasController.excluirPagina);
router.options('/paginas/:id.json', PaginasController.options);

module.exports = router;
