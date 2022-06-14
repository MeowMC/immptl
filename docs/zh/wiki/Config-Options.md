# 设置选项

## 如何修改设置

在Fabric版模组中，可以通过模组列表mod menu来打开设置界面 (你需要手动安装提供模组列表的模组)

也可以在游戏中通过命令 `/imm_ptl_client_debug config` 打开设置界面。

配置文件是 `/config/immersive_portals_fabric.json` .

## 客户端性能选项

在你接近一个传送门后，帧率可能会下降，因为

* 传送门渲染。如果一个传送门是不可见的（例如说被方块遮挡），则传送门不会被渲染。渲染一次传送门相当于再次渲染一次世界。
* 客户端光照更新。光照更新可能带来卡顿。
* 更多的区块的三角形网格生成。
* 由于加载更多区块导致的更频繁的垃圾回收。

本模组最新版可以在客户端帧率下降时自动减少通过传送门渲染的区块数量。

### 渲染递归上限

指定最大的传送门内渲染传送门的层数。

在遇到镜子房间这种情况，会大量渲染传送门中的传送门，导致帧率大幅度下降。

![image.png](https://i.loli.net/2021/11/20/xs9Fb6JDjgWNRlh.png)

将渲染递归上限调为1则不在传送门中渲染传送门。

![image.png](https://i.loli.net/2021/11/20/8a9IntyHuMRBVcN.png)

如果将其设为0，则可以看见传送门区域但不会渲染传送门内世界。

![image.png](https://i.loli.net/2021/11/20/NCKAx3HQZfDVrb7.png)

### 卡顿时限制传送门渲染

在由于渲染过多传送门（例如镜子房间的场景）导致卡顿的情况下，将会进入“防御掉帧攻击”模式，只渲染少量传送门，使游戏不再卡顿。

### 传送门渲染上限

指定在一帧中渲染传送门的数量上限。

## 服务端性能选项

如果一个玩家靠近一个传送门，则传送门另一边的区块会被加载并模拟，其区块加载半径由玩家离传送门的距离影响。

本模组中有一阶间接区块加载和二阶间接区块加载。一阶间接区块加载指玩家身边的传送门可以加载区块。二阶间接区块加载指靠近一阶加载的传送门的指向点的传送门也能加载区块。

### 间接区块加载半径上限

指定间接区块加载的半径上限。调低则可以让玩家靠近传送门时对面加载更少区块，减少性能消耗。

全局传送门的间接区块加载上限是该值的两倍。

## 其他客户端选项

### 兼容性渲染模式

如果启用，则将会选用另一种不使用stencil buffer的传送门渲染算法，并无法渲染传送门内的传送门。如果你在使用Iris光影的时候能透过方块看见传送门，则你应该启用这个选项。

### 在传送门中渲染自己

如果关闭，则你无法在传送门中看见自己。

### 镜面无玻璃材质

如果启用，则镜面表面的玻璃材质将不会渲染。

### 跨传送门实体渲染

如果关闭，则接触传送门的实体将会看上去被剪切。然而，有时跨传送门实体渲染会导致一些渲染问题。

## 其他服务端选项

### 地狱传送门模式

[参见](https://github.com/qouteall/ImmersivePortalsMod/wiki/Portals#nether-portals)

### 潜行时创建原版地狱传送门

如果启用，则在潜行的时候打火石只能点燃原版地狱传送门。

### 末地传送门模式

[参见](https://github.com/qouteall/ImmersivePortalsMod/wiki/Portals#end-portals)

### 启用附加位面

如果禁用，则所有的附加位面都不会被加载，且所有指向附加位面的传送门将会消失。

### 启用地狱传送门材质

如果启用，则新生成的地狱传送门将会有原版传送门的材质，透明度0.5。不影响已生成的传送门。

![image.png](https://i.loli.net/2021/11/20/regLGPdYoUv9MHC.png)

水平方向的传送门不会有材质因为原版没有水平方向的地狱传送门方块。

### 缩放比例限制

若一个实体的缩放比例过小或过大，则它在通过传送门的时候会重置缩放比例。([Pehkui](https://www.curseforge.com/minecraft/mc-mods/pehkui)) 若缩放比例过大则服务端碰撞计算将会卡顿。若缩放比例太小则实体将会看不见。该缩放比例限制只在实体跨过传送门时生效。

如果该值为 `x`，实际上的缩放比例限制为 `1/2x` 到 `x` .

### 传送门搜索范围

在点亮地狱传送门或数据包自定义传送门的时候，对框架的搜索范围。


