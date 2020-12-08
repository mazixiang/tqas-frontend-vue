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

```shell
$ docker build -t tqas-frontend-docker .\
  && docker run\
  -p 4040:8080\
  --name tqas-frontend-docker\
  tqas-frontend-docker
```
