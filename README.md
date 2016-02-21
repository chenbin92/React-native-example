# React Native Notes (iOS)

## 一：学习笔记

Date：2016-02-21

- [浅谈前端移动开发 (Ionic 与 React Native)](https://github.com/chenbin92/React-native-example/issues/2)
- [React Native 新手入门篇](https://github.com/chenbin92/React-native-example/issues/3)
- [React Native 控件之 Navigator 组件详解以及实例](https://github.com/chenbin92/React-native-example/issues/4)
- 持续更新中...

## 二： 环境搭建
工欲善其事，必先利其器。整个示例代码都是以Mac OS X系统为基础的；

#### React Native主要依赖的环境：

  * Mac OS X操作系统
  * 推荐使用Xcode7.1或者更高版本
  * 安装Node.js 5.0或者最新版本
  * 建议使用Homebrew安装： watchman和flow

#### 项目依赖的版本
```
  $ node -v  =>  v5.1.1
  $ react-native cli -v  =>  react-native-cli: 0.1.10
                         =>  react-native: 0.20.0
```

  

#### 安装 node
推荐使用 [nvm](https://github.com/creationix/nvm) 管理你的 Node.js 版本

```
  $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.0/install.sh | bash
  $ source ~/.nvm/nvm.sh
  $ nvm install 5.1.1
  $ nvm use 5.1.1
```


常用 nvm 命令    
```
  $ nvm use <version> // 切换版本
  $ nvm ls-remote // 查看远程 Node.js 的版本
  $ nvm ls  // 查看本地安装的 Node.js 的版本
```
   
   
#### 安装 react-native
在安装 react-native 之前，需要确保 Node.js 已经安装且在环境变量中；需要确保 Xcode 已经安装且最好是7.1 或者更高版本

###### 1. 通过Homebrew安装watchman和flow：

```
 $ brew install watchman
 $ brew install flow
```

###### 2. 安装完成后，我们就可以通过 npm 安装react-native-cli 的命令行工具：
```
 $ npm install -g react-native-cli  // -g 表示全局安装
```

 *注：如果安装不成功或者很慢，是因为react-native命令是从npm官网源安装，我们可以改用淘宝镜像源来安装*
``` 
 $ npm config set registry https://registry.npm.taobao.org
 $ npm config set disturl https://npm.taobao.org/dist
```

或者如果你已经安装cnpm：
```
// 在 /usr/local/lib/node_modules/react-cli/index.js中找到下面一行代码
run('npm install --save react-bative', function(e) {

修改为

run('cnpm install --save react-bative', function(e) {
```

改用 cnpm 重新安装 react-native-cli，你会发现是如此的快...
```
 $ cnpm install -g react-native-cli  // -g 表示全局安装
```


###### 3. 检查是否安装正确：
```
  $ brew -v  =>  Homebrew 0.9.5
  $ npm -v   =>  3.3.12
  $ cnpm -b  =>  3.3.12
  $ node -v  =>  v5.1.1
  $ nvm --version  => 0.17.3
  $ react-native cli -v  =>  react-native-cli: 0.1.10
                         =>  react-native: 0.20.0
```

#### Clone Repo

```
  $ git clone git@github.com:chenbin92/React-native-example.git
  $ cd React-native-example
```
    
#### 安装依赖

  使用 `npm` 安装项目的依赖: `npm`
  
```
  $ npm install
```  

  * `node_modules` - contains the npm packages for the tools we need
  
####  在 iOS simulator运行应用

```
  $ npm start
  $ react-native run-ios
```

#### 在设备上运行应用
 * 打开项目的 AppDelegate.m 文件，找到`jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle"];```
 * 将 localhost 修改为你的 `ip` 地址，如 `jsCodeLocation = [NSURL URLWithString:@"http://192.168.1.101:8081/index.ios.bundle"];`
 * 重新编译即可
 
#### 调试

 1. 在iOS设备上晃动即可自动弹出开发菜单
 2. 在iOS simulator 中按下 `commond + D`即可
 
![ios simulator](http://7xr387.com1.z0.glb.clouddn.com/ios-simulator.png)
 
 * Enable Live Reload: 开启js代码自动刷新
 * Reload: 刷新（command + R）
 * Debug in Chrome： 在chrome上调试js代码
 * Show Inspector： 查看元素模型
  
#### 更新 React Native 项目依赖包版本

在升级之前，我们可以运行 `npm infi react-native `查看react-native的版本信息：

```
  $ npm update -g react-native-cli  // 更新本地 react-native-cli的版本
  $ npm install --save react-native@0.20 // @后面跟需要升级的版本号
  $ react-native upgrade
```
#### 降级 React Native 项目依赖包版本 (与更新一样)
```
  $ npm install --save react-native@0.18 // @后面跟需要升级的版本号
  $ react-native upgrade
```

#### 相关文章推荐：
[React-Native入门指南](http://vczero.github.io/react_native/%E7%AC%AC1%E7%AF%87hello%20react-native.html)
[React Native: 配置和起步](http://www.liaohuqiu.net/cn/posts/react-native-1/)
 [React Native库版本升级(Upgrading)与降级讲解](http://www.lcode.org/%E3%80%90react-native%E5%BC%80%E5%8F%91%E3%80%91react-native%E5%BA%93%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7upgrading%E4%B8%8E%E9%99%8D%E7%BA%A7%E8%AE%B2%E8%A7%A3/)
