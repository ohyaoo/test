let uc
window.bridgeReady = function () {
  // 应用工厂模式
  uc = new UC({
    env: 'product',
    mode: 'appfactory',
    sso: true
  })

  // 应用工厂模式
  uc = new UC({
    env: 'product',
    mode: 'appfactory',
    sso: false
  })

  // 默认模式
  // uc = new UC({
  //   env: 'product',
  //   sso: true
  // })

  // 默认模式
  // uc = new UC({
  //   env: 'product',
  //   sso: false
  // })

  // 默认模式
  // uc = new UC({
  //   env: 'product',
  //   sso: true,
  //   mode: 'default'
  // })

  uc.isLogin().then(islogin => {
    if (islogin) {
      const account = uc.getCurrentAccount()
      account.getAccountInfo().then(accountInfo => {
        document.getElementById('root').innerText = JSON.stringify(accountInfo, null, 4);
      })
    }
  })
}

// 在设置ready事件后，才动态加载jsbridge
const body = document.getElementsByTagName('body')[0]
const script = document.createElement('script')
script.type = 'text/javascript'
script.src = 'smartcan://jssdk/JsBridge.js'
body.appendChild(script)

document.getElementById('logout').addEventListener('click', function () {
  uc && uc.logout()
})
