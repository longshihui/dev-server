# dev-server

开发时的接口模拟服务器

## 目的

- 解决离线时的开发mock问题（离线开发）
- 解决jsonp、跨域接口模拟、全局变量模拟等问题（mock类型）
- 减少mock数据对源代码的侵入性 (自动解耦)
- 提供UI配置界面进行接口配置 (傻瓜式配置)

## 现状

### webpack-dev-server或webpack-dev-middleware

通过中间件的方式接入至dev-server启动的express服务，可以扩展其路由来进行接口模拟

缺点：

- 无法进行JSONP mock
- 跨域mock

### rap2等系统

通过启动另一个服务，提供接口模拟方案

缺点：

- 无法进行JSONP mock

### webpack-dev-middleware + http代理 + 第三方mock系统

**调研中...**
