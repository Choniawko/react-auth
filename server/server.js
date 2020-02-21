const jsonServer = require("json-server")
const auth = require("json-server-auth")

const server = jsonServer.create()
const router = jsonServer.router("./server/database.json")
const PORT = 8000
const rules = auth.rewriter({
  users: 600,
  books: 660,
})

server.db = router.db

server.use(jsonServer.defaults())
server.use(rules)
server.use(auth)
server.use(router)

server.listen(PORT, () => {
  console.log(`server is listening on PORT: ${PORT}`)
})
