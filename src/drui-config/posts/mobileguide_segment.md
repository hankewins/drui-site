# SegmentedControl 分段控件

## 原则&规范

### 项目个数

<img src="../images/mobile_guide/Segmented_overview.png" align="right"/>

当分段控件项目数过多导致可能超过较小屏移动端屏幕宽度时（通常大于等于5项时），分段控件需可滑动。

### 避免嵌套

<img src="../images/mobile_guide/Segmented_double_wrong.png" data-isError="true" alt="错误" align="right" />

设计中应避免同一视觉风格的两个层级分段控件直接嵌套。以免对用户产生困扰。

### 标题完整

<img src="../images/mobile_guide/Segmented_coupon.png" isError align="right"/>

Tab标题应言简意赅，且必须显示完整。不可有省略符号出现。**设计师在处理多语言版本app时须特别注意本地化语言长度**

## 使用场景

分段控件通常用于「快速筛选」和「组合相关内容」2种。

### 快速筛选

<img src="../images/mobile_guide/Segmented_truncated_wrong.png" data-isError="true" alt="错误" align="right"/>

当分段控件用于快速筛选时，应当遵循MECE原则（Mutually Exclusive Collectively Exhaustive）。
即每个tab应当属于全部内容的一部分。通常情况下每个tab内容互无交集；所有tab内容合集不能遗漏内容。比如券包中所有优惠券分为「可使用」「已使用」「已过期」。每张券只可能被分在一个类别中。三个Tab内容总和即是券包中所有的券。

快速筛选适用于从同一个维度筛选信息，比如上图券包以「优惠券状态」分成3类；若以「优惠券种类」可分为「代金券」「满减券」「体验金券」。设计师应根据场景选择最优的筛选维度。

### 组合相关内容

<img src="../images/mobile_guide/Segmented_data.png" align="right"/>

移动端页面空间有限，可以用分段控件把多个相似或相关的内容组合在同一区域，以节省页面纵向空间。


需注意：若用户需要对不同Tab的内容进行对比，则不适合使用Segmented control。

