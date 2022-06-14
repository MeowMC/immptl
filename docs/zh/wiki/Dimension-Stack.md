# 位面纵向堆叠

纵向位面堆叠就是使用 [纵向堆叠传送门](https://github.com/qouteall/ImmersivePortalsMod/wiki/Portals#vertical-dimension-connecting-portal) 将不同位面的上下连接起来。



![image.png](https://i.loli.net/2021/11/20/aui8vcNer9hAmgJ.png)

![image.png](https://i.loli.net/2021/11/20/r7sUyN6Azm4qiaF.png)



在创建世界的界面，可以看到“位面纵向堆叠”的按钮。

![image.png](https://i.loli.net/2021/11/20/helqg7vkcdML5n3.png)



![2021-12-31_18.16.46.png](https://s2.loli.net/2021/12/31/k5ghxSuULNtGK9V.png)



### 主选项

#### 循环

如果启用，则最下面的位面会连接到最上面的位面，形成循环。

#### 引力改变

如果启用，则在穿过传送门后玩家的引力方向会改变。该功能需要安装Gravity Changer模组。

如果没有任何位面是翻转的，则这个选项没有影响。

### 每个位面的选项

点击“编辑”后可以看到每个位面的选项：

![2021-12-31_18.16.51.png](https://s2.loli.net/2021/12/31/9VBFmxTPLn17oRK.png)

#### 缩放比例

控制传送门的缩放变换。传送门不会将穿过的实体的缩放比例改变。

如果你希望实现地狱的一格对应主世界8格，那么主世界的缩放比例应设为8.

![image.png](https://i.loli.net/2021/11/20/ywnkEq6F4pQS7Ha.png)

推荐要么 **(1)** 将主世界缩放比例设为8，要么 **(2)** 将地狱传送门模式设为 `disabled`。因为位面纵向堆叠不影响地狱传送门，如果位面纵向堆叠允许玩家在主世界和地狱间1:1移动，而地狱传送门允许8:1移动，则玩家通过交替使用地狱传送门和位面纵向堆叠传送门可以很快到达很远的世界边界。

#### 翻转

控制传送门的旋转变换。如果启用，该位面看起来像是“翻转”了。这不会改变该位面中的引力方向（除非启用引力改变选项）。如果一个翻转的位面连接一个未被翻转的位面，则传送门将会有绕X轴180度的旋转变换。

![image.png](https://i.loli.net/2021/11/20/pXxmBnrQd2CbVIE.png)

#### 水平旋转

控制传送门的旋转变换。让位面看起来是绕Y轴旋转了。

![image.png](https://i.loli.net/2021/11/20/Fnv4GOCW8A3wiJM.png)

#### 顶部纵坐标、底部纵坐标

控制顶部和底部的传送门的纵坐标。这两项可以默认为空。

如果底部纵坐标为空，则将会使用dimension type的 `min_y` 属性。如果顶部纵坐标为空，则使用 `min_y` + `logical_height`。

#### 基岩替换放开

指定基岩被替换成的方块。如果为空，则基岩不会被替换。

### 用命令重新设定位面纵叠

通过命令 `/portal dimension_stack` (在MC 1.18后才有) 可以在创建世界之后设定位面纵叠。


