# tqas-frontend-vue

## 项目初始化

```shell
yarn install
```

### 开启开发服务器

```shell
yarn serve
```

### 构建生产版本

```shell
yarn build
```

### 提示和修复文件

```shell
yarn lint
```

### 自定义选项

查看 [Configuration Reference](https://cli.vuejs.org/config/).

## 在 Docker 中运行

构建 Docker 镜像

```shell
$ docker build -t mazixiang/tqas-frontend-docker .
```

运行 Docker 镜像

```shell
$ docker run -p 4040:8080 --name tqas-frontend-docker mazixiang/tqas-frontend-docker
```

在浏览器中访问 `http://localhost:4040`
