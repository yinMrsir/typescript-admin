module.exports = req => {
  const { username, password } = req.body
  const allowUser = ['admin', 'editor']
  if (!allowUser.includes(username)) {
    return {
      code: 201,
      message: '用户不存在'
    }
  }
  if (username !== password) {
    return {
      code: 201,
      message: '用户密码不正确, 用户名和密码要一致噢'
    }
  }
  return {
    code: 200,
    data: {
      token: username,
      username
    }
  }
}
