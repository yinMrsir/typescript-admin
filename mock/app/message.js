module.exports = req => {
  return {
    code: 200,
    data: {
      "list|20": [{
        "title": "@ctitle(10)",
        "date": "@date('yyyy-MM-dd')"
      }]
    }
  }

}
