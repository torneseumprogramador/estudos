var express = require('express');
var HomeController = require('../controller/home_controller');
var UsuariosController = require('../controller/usuarios_controller');
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

module.exports = router;
