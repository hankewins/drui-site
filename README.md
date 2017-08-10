# drui-site

DRUI Design guide line site 点融UXUI设计文档站

## 文章编写

### 开分支

首先打开项目，点击 `branch` 输入一个分支名

![](docs/create-branch.png)

### 编辑内容

单击 `posts`，进入页面后点击 `create new file`

![](docs/create-new-file.png)

编写文档，可以点击`preview`预览写好的文档。

![](docs/file-content.png)

然后下滑到底部，点击 `commit new file`，文件就被编辑完成了。

![](docs/commit-file.png)

### 调整目录结构

然后回到 drui-site 主页，进入文件 `src` -> `drui-config` -> `menu.json`, 单击铅笔图标

![](docs/edit-menu.png)

找到适合的层级结构，写入对应的 `title`, `path` 和 `content`, 如果此条属于大的分类，请加入字段`"type": "black"` 表明这个结构应该用黑色字显示

![](docs/menu-content.png)

依旧是点击底部一个绿色的 `Commit changes`, 这样，菜单栏的 `设计指引` -> `设计理念与原则` -> `你好啊` 就被创建成功了，但是依旧不能立即查看到。

### Pull Request

点击上面的 `Pull request` 的 Tab, 然后点击右边绿色的 `New pull request`

![](docs/new-pull-request.png)

在 *Compare changes* 下面的 `base` 换成 *master*， 将 `compare` 换成刚刚创建好的分支

![](docs/compare-changes.png)

然后点击 `Create pull request`

![](docs/to-merge.png)

写入一些更新信息，也可以不写，之后点击 `Create pull request` 即可。

![](docs/pr-message.png)

告知维护的开发人员，他在看过没问题之后会合并入主分支，页面上就会有所体现。

## 附录

[markdown 语法学习](https://guides.github.com/features/mastering-markdown/)

