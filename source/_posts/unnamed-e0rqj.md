---
title: 未命名
date: '2025-04-07 11:42:01'
updated: '2025-04-07 11:42:46'
permalink: /post/unnamed-e0rqj.html
comments: true
toc: true
---



# 未命名

## **问题1：用克拉默法则求解线性方程组**

<span data-type="text" style="font-size: 19px;">解线性方程组：</span>

$$
\left\{  
\begin{aligned} 
&x_1 + 2x_2 - x_3 = 5 \\
&x_1 - x_2 + x_3 = 5 \\
&2x_1 + 3x_2 - x_3 = 1
\end{aligned}
\right.
$$

‍

**解：** 

1. 先计算行列式$d$，并且判断是否$d \neq 0$​$ $：

$$
{d}=\left | \begin{matrix}
1 & 2 & 1 \\\\
1 & -1 & 1  \\\\
2 & 3 & -1 \\
\end{matrix} \right | =
\left | \begin{matrix}
0 & 2 & 1 \\\\
0 & -1 & 1  \\\\
3 & 3 & -1 \\
\end{matrix} \right | = 
3\left | \begin{matrix}
2 & 1 \\\\
-1 & 1 \\
\end{matrix} \right | = 
9 \neq 0
$$

2. 计算$d_1、d_2、d_3$：

$$
{d_1}=\left | \begin{matrix}
5 & 2 & 1 \\\\
5 & -1 & 1  \\\\
1 & 3 & -1 \\
\end{matrix} \right | =
\left | \begin{matrix}
0 & 0 & 1 \\\\
0 & -3 & 1  \\\\
6 & 5 & -1 \\
\end{matrix} \right | = 
\left | \begin{matrix}
0 & -3 \\\\
6 & 5 \\
\end{matrix} \right | = 
18
$$

$$
{d_2}=\left | \begin{matrix}
1 & 5 & 1 \\\\
1 & 5 & 1  \\\\
2 & 1 & -1 \\
\end{matrix} \right | 
=0
$$

$$
{d_3}=\left | \begin{matrix}
1 & 2 & 5 \\\\
1 & -1 & 5  \\\\
2 & 3 & 1 \\
\end{matrix} \right | =
\left | \begin{matrix}
0 & 3 & 0 \\\\
1 & -1 & 5  \\\\
2 & 3 & 1 \\
\end{matrix} \right | = 
-3\left | \begin{matrix}
1 & 5 \\\\
2 & 1 \\
\end{matrix} \right | = 
27
$$

3. 得出线性方程的唯一解：$ $  

    唯一解为：$x_1 = \frac{d_1}d,x_2 = \frac{d_2}d,x_3 = \frac{d_3}d$

**Python:** 

```python
import numpy as np
d = np.array([[1, 2, 1], [1, -1, 1], [2, 3, -1]])
b = np.array([5, 5, 1])
det_d = np.linalg.det(d)

if det_d != 0:
    # 替换各列求d1, d2, d3
    d1 = d.copy(); d1[:,0] = b
    d2 = d.copy(); d2[:,1] = b
    d3 = d.copy(); d3[:,2] = b

    # 求线性方程组的唯一解
    x1 = np.linalg.det(d1)/det_d
    x2 = np.linalg.det(d2)/det_d
    x3 = np.linalg.det(d3)/det_d
    print(f"x1={x1:.1f}, x2={x2:.1f}, x3={x3:.1f}")
else:
    print("无唯一解")
```

### <span data-type="text" style="font-size: 21px;">知识点：</span>

1. 行列式的计算方法（书P51）（7个）：

    * 化三角法
    * 降阶法(选择0最多的行（列）展开，降为低阶)
    * 加边法（*非对角线元素具有相同规律）
    * 拆行（列）法
    * 递归法（找规律）
    * 析因子法
2. 行列式的基本性质（书P38）（6个）：

    * 行列互换，行列式不变
    * 行列式中一行乘$k$，行列式变为原来的$k$倍
    * 行列式中某行元素均为两个元素的和，行列式等于两个行列数的和
    * 行列式某两行相同或者成比例，行列式为0
    * 一行的$k$倍加到另一行，行列式不变
    * 两行互换，行列式反号
3. 克拉默法则（书P58）
4. 行列式的定义
