module.exports = req => {
  return {
    code: 200,
    data: {
      "list|20": [{
        "id": "@increment",
        "tag|1-5": 1,
        "name": "@cname",
        "date": "@date('yyyy-MM-dd')",
        "title": "@ctitle(15, 30)",
        "content": "@cparagraph()",
        "state|0-1": 1
      }]
    }
  }
}
