var express = require('express');
var router = express.Router();
var homeController = require('../app/controllers/home');

router.get('/login', homeController.login);
router.post('/fazer-login', homeController.fazer_login);
router.get('/', homeController.index);
router.get('/alterar', homeController.alterar);
router.post('/alterar-pessoa', homeController.alterar_pessoa);
router.get('/excluir', homeController.excluir);
router.get('/pesquisar', homeController.pesquisar);
router.get('/ajax-test-html', homeController.ajax_test_html);
router.get('/estados.json', homeController.estados);
router.get('/cidades.json', homeController.cidades);
router.post('/cadastrar-pessoa', homeController.cadastrar_pessoa);

router.get('/pessoas.json', homeController.pessoas);
router.post('/pessoas.json', homeController.cadastrar_pessoa_service);
router.put('/pessoas.json', homeController.alterar_pessoa_service);
router.delete('/pessoas.json', homeController.excluir_service);


module.exports = router;
