---
title: 未命名
date: '2025-04-07 11:59:52'
updated: '2025-04-07 12:00:21'
permalink: /post/unnamed-z1kxrdr.html
comments: true
toc: true
---



# 未命名

## 问题二：**分块矩阵求逆**

设$m+n$阶方阵$D$为

$$
{D}= \begin{pmatrix}
A & 0 \\\\
C & B
\end{pmatrix}
$$

其中$A$为$m$阶可逆矩阵，$B$为$n$阶可逆矩阵，证明$D$可逆，并求$D^{-1}$.

‍

**解:** 

1. 因为$A,B $均可逆，则$\begin{vmatrix} A \end{vmatrix} \neq 0, \begin{vmatrix} B \end{vmatrix} \neq 0$，又$\begin{vmatrix} D \end{vmatrix}= \begin{vmatrix} A \end{vmatrix} \cdot \begin{vmatrix} B \end{vmatrix} $，故$\begin{vmatrix} D \end{vmatrix} \neq 0$，$D$可逆.
2. 设

$$
D^{-1} =
\begin{pmatrix}
X_{11} & X_{12} \\\\
X_{21} & X_{22} \end{pmatrix}
$$

此时$DD^{-1}= E_{m+n}$

$$
\begin{pmatrix} A & O \\ C & B \end{pmatrix}
\begin{pmatrix} X_{11} & X_{12} \\ X_{21} & X_{22} \end{pmatrix}=
\begin{pmatrix} E_m & O \\ O & E_n \end{pmatrix}
$$

$$

$$

$$
\begin{cases}
AX_{11} = E_m \\
AX_{12} = O \\
CX_{11} + BX_{21} = O \\
CX_{12} + BX_{22} = E_n
\end{cases}
$$

3. 由第一、二式可知：

$$
X_{11} = A^{-1}, \quad X_{12} = O \\
$$

 由第三、四式可知：

$$
X_{21} = -B^{-1}CA^{-1}, \quad X_{22} = B^{-1}
$$

故：

$$
D^{-1} = 
\begin{pmatrix} 
A^{-1} & O \\ 
-B^{-1}CA^{-1} & B^{-1} 
\end{pmatrix}
$$

若$C = 0$，则：

$$
D^{-1} = 
\begin{pmatrix} 
A^{-1} & O \\ 
0 & B^{-1} 
\end{pmatrix}
$$

### Python求矩阵的逆：

```python
import numpy as np

# 定义矩阵（需为方阵）
D = np.array([[A, 0], [C, B]])

# 求逆矩阵
D_inv = np.linalg.inv(D)
```

### **知识点：** 

1. 矩阵分块
2. 可逆矩阵的性质(书P83页)：

‍
