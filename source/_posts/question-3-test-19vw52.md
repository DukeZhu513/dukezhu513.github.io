---
title: 问题三（测试）
date: '2025-04-07 12:02:39'
updated: '2025-04-07 12:05:38'
permalink: /post/question-3-test-19vw52.html
comments: true
toc: true
---



# 问题三（测试）

如何通过初等行变换化为行阶梯形矩阵，并计算秩？矩阵为：

$$
A = 
\begin{pmatrix} 
1 & 2 & 3 \\\\
4 & 5 & 6 \\\\
7 & 8 & 9 \end{pmatrix}
$$

**解：** 

1. 通过矩阵的初等行变换得到阶梯形矩阵：

$$
A = 
\begin{pmatrix} 
1 & 2 & 3 \\\\
0 & 1 & 2 \\\\
0 & 0 & 0 \end{pmatrix}
$$

2. 确定矩阵的秩：

    阶梯形矩阵中有2个非零行。所以，$R(A)=2R(A)=2$.

### Python将矩阵变换为阶梯形矩阵，并求矩阵的秩

```python
from sympy import Matrix

A = Matrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

# 计算行阶梯形矩阵并获取秩
rref_matrix, pivots = A.rref()
rank = len(pivots)  # 主元列数即为秩
```

### **知识点：** 

1. 矩阵的秩（书P103）
2. 矩阵的初等变换（书P90）
