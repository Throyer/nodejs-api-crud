
import { Router } from 'express'
import UsuariosController from './controllers/UsuariosController'
import PermissoesController from './controllers/PermissoesController';

const routes = Router()

routes.get('/api/usuarios', UsuariosController.index);
routes.get('/api/usuarios/:id', UsuariosController.show);
routes.post('/api/usuarios', UsuariosController.store);
routes.put('/api/usuarios/:id', UsuariosController.update);
routes.delete('/api/usuarios/:id', UsuariosController.destroy);

routes.get('/api/permissoes', PermissoesController.index);
routes.get('/api/permissoes/:id', PermissoesController.show);
routes.post('/api/permissoes', PermissoesController.store);
routes.put('/api/permissoes/:id', PermissoesController.update);
routes.delete('/api/permissoes/:id', PermissoesController.destroy);

export default routes