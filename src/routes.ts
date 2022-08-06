import { Router, Request, Response  } from "express"
import usersControler from "./usersControler"

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  return res.status(200).send(` 🌈 Api Running`)
})

routes.get('/get', usersControler.getAll)
routes.post('/register', usersControler.register)

export default routes