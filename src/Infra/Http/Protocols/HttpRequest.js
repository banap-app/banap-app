export default class HttpRequest {
  constructor (req) {
    this.body = req.body
    this.method = req.method
    this.path = req.path
    this.query = req.query
    this.params = req.params
    this.headers = req.headers
  }
}
