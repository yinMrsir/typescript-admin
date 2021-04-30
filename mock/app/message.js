module.exports = req => {
  const { page = 1, pageSize = 10 } = req.query
  const list = []
  for(let i = 0; i < pageSize; i++) {
    list.push({
      "title": "@ctitle(10)",
      "date": "@date('yyyy-MM-dd')"
    })
  }
  return {
    code: 200,
    data: {
      list,
      page,
      pageSize
    }
  }

}
