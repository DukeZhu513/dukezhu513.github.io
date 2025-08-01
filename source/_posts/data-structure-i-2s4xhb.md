---
title: 数据结构（一）
date: '2025-07-14 00:18:56'
categories:
  - 学习笔记
tags:
  - 408
  - 数据结构  
updated: '2025-07-14 07:55:27'
permalink: /post/data-structure-i-2s4xhb.html
comments: true
toc: true
---



# 数据结构（一）

# 第一章

## 一、数据结构的基本术语

1. **数据**  
    描述客观事物的符号，是计算机处理的基本对象。例如：数字、字符、图像等。
2. **数据元素**  
    数据的基本单位，在程序中作为整体处理，如一个学生的姓名、学号、成绩。
3. **数据项**  
    数据元素的不可分割的最小单位。例如：学生的数据元素可以包含姓名、学号等数据项。
4. **数据结构**  
    数据元素之间的**逻辑结构**与它们在计算机中的**存储结构**的结合。

    **逻辑结构 vs 存储结构**

    **逻辑结构**：描述数据元素之间的关系。

    - **集合** ：无序且无关联。

    - **线性结构** ：一对一的线性关系。
    - **树形结构** ：一对多的层次关系。
    - **图形结构** ：多对多的复杂关系。

    6. **存储结构**：数据在内存中的实际表示方式。包括：

        - 顺序存储结构（如数组）
        - 链式存储结构（如链表）
        - 索引存储结构（如B+树）
        - 散列存储结构（如哈希表）
5. **抽象数据类型（ADT）**   
    是数据和操作的集合。它强调“做什么”，不强调“怎么做”。如：队列的操作为入队、出队。

## 二、数据结构的时间复杂度

### 定义：

时间复杂度是指算法执行所耗费的计算工作量（执行基本操作的次数）随问题规模增长的增长趋势。

### 常见的时间复杂度（按效率从高到低）：

|时间复杂度|名称|示例|
| ------------| --------------| ----------------------------|
|O(1)|常数时间|访问数组元素|
|O(log n)|对数时间|二分查找|
|O(n)|线性时间|遍历数组|
|O(n log n)|线性对数时间|归并排序、快速排序平均情况|
|O(n²)|平方时间|冒泡排序、选择排序|
|O(2ⁿ)|指数时间|递归解决背包、汉诺塔等问题|
|O(n!)|阶乘时间|全排列问题（如旅行商问题）|

### 时间复杂度的计算方法：

1. 找出循环
2. 计算循环次数
3. 相乘嵌套循环
4. 忽略低阶项和常数
5. 使用大O表示法

### 举个例子

对于下面的嵌套循环：

```c++
for (int i = 0; i < n; ++i)
    for (int j = 0; j < n; ++j)
        sum += i * j;
```

- 基本操作：`sum += i * j;`​, 总执行次数：n × n \= n²

- 时间复杂度：O(n²)

## 三、数据结构的空间复杂度

### 定义：

空间复杂度表示算法在运行过程中临时占用存储空间的大小。

### 空间复杂度的组成部分

**输入数据占用的空间** ：算法处理的数据本身所占用的空间。

**辅助存储空间** ：算法执行过程中使用的额外空间，如变量、数据结构等。

**临时空间** ：算法执行过程中产生的临时数据所占用的空间。

### 常见空间复杂度：

|空间复杂度|示例|
| ----------------------| ------------------------|
|常数空间复杂度O(1)|使用固定数量的变量|
|线性空间复杂度O(n)|递归栈、辅助数组等|
|二维空间复杂度O(n²)|矩阵（如图的邻接矩阵）|

### 举个例子

```cpp
void reverse(int arr[], int n) {
    int temp;
    for (int i = 0; i < n / 2; i++) {
        temp = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = temp;
    }
}
```

这个算法使用一个**临时变量**来交换元素，  
不需要**额外的存储空间**与数组大小有关，  
因此：空间复杂度是 **O(1)** 。

```cpp
void reverseWithExtraArray(int arr[], int n) {
    int reversed[n];
    for (int i = 0; i < n; i++) {
        reversed[i] = arr[n - i - 1];
    }

    // 将 reversed 数组的元素复制回 arr 数组
    for (int i = 0; i < n; i++) {
        arr[i] = reversed[i];
    }
}
```

这个算法创建了一个新的数组来存储反转后的元素，  
这个数组的大小与输入数组相同 🫱  
因此：空间复杂度是 **O(n)** 。

# 第二章：线性表

## 一、线性表的定义

**线性表** 是由 **n (n ≥ 0)**  个**数据元素** 组成的有限序列。通常表示为：

> L \= (a₁, a₂, ..., aₙ)

其中：

- aᵢ 是表中的第 i 个数据元素。
- n 是表的长度。
- 当 n \= 0 时，称为**空表** 。

## 二、线性表的特点

1. **有序性** ：表中元素之间存在先后顺序。
2. **元素唯一性**：每个元素在线性标的位置是唯一的
3. **动态性**：线性白哦的大小可以动态变化

## 三、线性表的顺序表示与实现（顺序表）

### 1. 定义

用一组**连续的存储单元** 依次存储线性表中的元素。

### 2. 特点

|特点|描述|
| ------------| -----------------------------------|
|存储方式|连续内存空间|
|存取方式|随机存取（支持下标访问）|
|时间复杂度|插入/删除 O(n)，查找 O(1) 或 O(n)|

### 常见操作：

- 初始化
- 插入

  插在第$i$个结点之前，移动$n-i+1$次
- 删除

  删除第$i$个结点，移动$n - i$次

- 查找
- 遍历

### 顺序表的优点

**时间** ：可以随机存取表中任一元素。

**空间** ：存储密度大（结点本身所占存储量 / 结点结构所占存储量）。

### 顺序表的缺点

**时间** ：在插入、删除某一元素时，需要移动大量元素。

**空间** ：浪费存储空间，属于静态存储形式，数据元素的个数不能自由扩充。

## 四、线性表的链式表示与实现（链表）

### 1. 定义

用一组**任意的存储单元** 存放线性表的数据元素，通过指针链接起来。

### 2. 头指针、首元结点、头结点

#### 头指针

是指向链表中第一个结点的指针。

#### 首元结点

是指链表中存储第一个数据元素 a1 的结点。

#### 头结点

是在链表的首元结点之前附设的一个结点；数据域内只放空表标志和表长等信息。

### 3. 特点

|特点|描述|
| ------------| ---------------------------------------|
|存储方式|不连续|
|存取方式|顺序存取（不支持随机访问）|
|时间复杂度|插入/删除 O(1)（已知位置），查找 O(n)|

### 常见操作：

- 初始化
- 头插法 / 尾插法建表
- 插入节点
- 删除节点
- 查找节点
- 遍历链表

# 第三章：栈和队列

# 一、栈

### 1. 定义：

栈是一种“先进后出”**的线性数据结构。只能在一端进行插入和删除操作，这端称为**栈顶（top） **，另一端为**栈底（bottom）。

### 2. 栈的基本操作：

|操作|描述|时间复杂度|
| ------| ------------------------| ------------|
|​`Push(x)`​|将元素 x 压入栈顶|O(1)|
|​`Pop()`​|弹出栈顶元素|O(1)|
|​`Top()`​|获取栈顶元素（不删除）|O(1)|
|​`IsEmpty()`​|判断栈是否为空|O(1)|

### 3. C++ 顺序栈实现（使用数组）：

```cpp
#define MAXSIZE 100
struct Stack {
    int data[MAXSIZE];
    int top = -1;
};

void push(Stack &s, int x) {
    if (s.top == MAXSIZE - 1) return; // 栈满
    s.data[++s.top] = x;
}

int pop(Stack &s) {
    if (s.top == -1) return -1; // 栈空
    return s.data[s.top--];
}

int top(Stack s) {
    return s.data[s.top];
}
```

## 二、队列

### 1. 定义：

队列是一种“先进先出”的线性数据结构。  
**从队尾入队，从队头出队**。

### 2. 队列的基本操作：

|操作|描述|时间复杂度|
| ------| --------------------| ------------|
|​`Enqueue(x)`​|将元素 x 加入队尾|O(1)|
|​`Dequeue()`​|删除并返回队头元素|O(1)|
|​`Front()`​|获取队头元素|O(1)|
|​`IsEmpty()`​|判断队列是否为空|O(1)|

## 三、循环队列（顺序存储实现）

### 1. 循环队列的结构：

使用数组实现，并通过**头指针** **​`front`​**​ **和尾指针** **​`rear`​**​ 来控制队列。  
采用**模运算**实现“循环”效果。

```cpp
#define MAXSIZE 100
struct CircularQueue {
    int data[MAXSIZE];
    int front = 0, rear = 0;
};
```

### 2. 判空与判满条件：

少用一个元素，就有$M-1$个元素认为队满

- 队空：`front == rear`​
- 队满：`(rear + 1) % MAXSIZE == front`​（空出一个位置作为标志）

### 3. 操作函数：

```cpp
bool enqueue(CircularQueue &q, int x) {
    if ((q.rear + 1) % MAXSIZE == q.front) return false; // 队满
    q.data[q.rear] = x;
    q.rear = (q.rear + 1) % MAXSIZE;
    return true;
}

bool dequeue(CircularQueue &q, int &x) {
    if (q.front == q.rear) return false; // 队空
    x = q.data[q.front];
    q.front = (q.front + 1) % MAXSIZE;
    return true;
}
```

## 四、链队列（链式存储实现）

### 1. 结构定义：

使用单链表实现队列，并使用两个指针指向队头与队尾。

```cpp
struct Node {
    int data;
    Node* next;
};

struct LinkQueue {
    Node* front;
    Node* rear;
};
```

### 2. 初始化：

```cpp
void init(LinkQueue &q) {
    q.front = q.rear = new Node; // 头结点
    q.front->next = nullptr;
}
```

### 3. 入队操作：

```cpp
void enqueue(LinkQueue &q, int x) {
    Node* node = new Node;
    node->data = x;
    node->next = nullptr;
    q.rear->next = node;
    q.rear = node;
}
```

### 4. 出队操作：

```cpp
bool dequeue(LinkQueue &q, int &x) {
    if (q.front == q.rear) return false; // 队空
    Node* p = q.front->next;
    x = p->data;
    q.front->next = p->next;
    if (q.rear == p) q.rear = q.front;
    delete p;
    return true;
}
```

## 五、时间复杂度比较总结

|结构类型|入队 Enqueue|出队 Dequeue|备注|
| ----------| --------------| --------------| ----------------|
|顺序队列|O(1)\*|O(n)\*|出队需整体移动|
|循环队列|O(1)|O(1)|使用模运算|
|链式队列|O(1)|O(1)|灵活扩展|

\*顺序队列如果不使用循环或链式结构，出队会变成 O(n)，所以实际很少使用。

# 第四章：串、数组、广义表

## 一、串

### 1. 串的定义：

> 串是由**零个或多个字符组成的有限序列**，是线性结构的一个重要扩展。

记作：  
  **S**  **=**  **a₁a₂a₃…aₙ**，其中每个 aᵢ 是字符。

- **主串**：包含其他子串的较大字符串。

- **子串**：子串是主串中连续的一段字符序列。

- **字符位置**：字符在字符串中的具体位置。

- **子串位置**：一个子串在主串中开始出现的位置。

- **串相等**：两个字符串相等意味着它们的每一个字符都完全对应相同，包括长度和字符的顺序。

- **空格串**：只包含空格的字符串。

### 2. 基本操作（重点）：

|操作|描述|
| ------| ------------------------------------------------|
|​`StrLength(S)`​|返回串的长度|
|​`StrAssign(S, "abc")`​|将字符串赋值给串 S|
|​`SubString(S, i, len)`​|取子串，从第 i 位起长度为 len|
|​`StrCompare(S1, S2)`​|按字典序比较两个串|
|​`Concat(S1, S2)`​|串连接|
|​`Index(S, T)`​|返回子串 T 在 S 中的首次出现位置（朴素或 KMP）|

### 3. 串的存储方式：

1. **定长顺序存储（数组）**   
      如：`char str[100];`​  
      固定大小，节省空间，但不易扩展。
2. **堆分配存储（动态字符串）**   
      如：`char* s = new char[n];`​  
      空间灵活，可动态增长。
3. **链式存储（稀有）**   
      每个字符单独存储在链表结点中，适用于频繁插入/删除。

### 4. BF 算法（朴素匹配算法）

BF 算法是最基本的字符串匹配方法，用来在**主串 S** 中查找是否包含**子串 T**，通过**逐个字符匹配**实现。

#### 1. 算法思想：

从主串 `S`​ 的第 `i`​ 个字符开始，依次和模式串 `T`​ 进行比较：

- 若匹配，则继续比较下一个字符；
- 若不匹配，则主串指针回退一个位置，重新开始匹配。

#### 2. 举例：

匹配 `"ababcabcacbab"`​ 中是否含 `"abcac"`​  
从第 0 位开始逐一匹配，失败就主串右移一位，继续从 T 的开头匹配。

#### 3. C++ 实现：

```c++
int BF(const string &S, const string &T) {
    int i = 0, j = 0;
    while (i < S.length() && j < T.length()) {
        if (S[i] == T[j]) {
            ++i; ++j;  // 匹配成功，继续比较下一个字符
        } else {
            i = i - j + 1;  // 回退主串指针，重新开始匹配
            j = 0;
        }
    }
    return (j == T.length()) ? (i - j) : -1;  // 成功返回位置，否则-1
}
```

#### 4. 时间复杂度分析：

- 最好情况：O(n)，主串一次就匹配成功
- 最坏情况：**O(n × m)** ，主串和模式串每个字符都被多次比较

其中：

- $n$：主串长度
- $m$：模式串长度

### 4. KMP 算法（模式匹配）

> KMP 用于在主串中高效查找子串，避免回溯，时间复杂度 O(n+m)。

#### 原理：

- 利用**部分匹配表（next 数组）** ，跳过无效字符比较。
- 保证主串指针不回退。

```c++
void getNext(const string &pattern, vector<int> &next) {
    int j = -1;
    next[0] = -1;
    for (int i = 1; i < pattern.size(); ++i) {
        while (j != -1 && pattern[j + 1] != pattern[i])
            j = next[j];
        if (pattern[j + 1] == pattern[i]) ++j;
        next[i] = j;
    }
}

int kmp(const string &text, const string &pattern) {
    int j = -1;
    vector<int> next(pattern.size());
    getNext(pattern, next);
    for (int i = 0; i < text.size(); ++i) {
        while (j != -1 && pattern[j + 1] != text[i])
            j = next[j];
        if (pattern[j + 1] == text[i]) ++j;
        if (j == pattern.size() - 1) return i - j;  // 匹配成功
    }
    return -1;
}
```

### 5. BP与 KMP 算法的比较

|比较项目|BF 算法|KMP 算法|
| ------------| ------------------| --------------------------|
|匹配方式|逐个字符暴力匹配|利用前缀信息避免重复匹配|
|主串回退|会回退|不回退|
|时间复杂度|最坏 O(n × m)|O(n + m)|
|辅助数组|无|有（next[]）|
|实现复杂度|简单|稍复杂|

## 二、数组

### 1. 定义：

> 数组是**相同类型数据元素的有序集合**，可以是**一维、二维或多维**，元素按下标访问。

### 2. 一维数组

- 元素线性排列，索引从 `0`​ 到 `n - 1`​
- 顺序存储，支持随机访问，时间复杂度 O(1)

```cpp
int a[5] = {1, 2, 3, 4, 5};
```

### 3. 二维数组（矩阵）

- 逻辑上是表格，物理存储仍是**一维线性空间**
- C++ 采用**行主序**（Row-major）

```cpp
int a[3][4];  // 3行4列，按行连续存储
```

二维数组元素地址计算公式：

$\text{Loc}(a[i][j]) = \text{Base} + [(i \times \text{列数}) + j] \times \text{元素大小}$---

### 4. 特殊矩阵的压缩存储

> 为节省空间，可以只存储矩阵中**非零或有效元素**。

常见压缩形式：

|矩阵类型|特点|存储方法|
| ----------| ------------------------| ------------------------|
|对称矩阵|​`a[i][j] == a[j][i]`​|存储上/下三角部分|
|三角矩阵|上/下半部分为零|只存储非零部分|
|对角矩阵|仅主对角线上有非零元素|只用一维数组存主对角线|
|稀疏矩阵|大部分元素为零|三元组表 或 十字链表|

**三元组表示法**（压缩稀疏矩阵）：

每个非零元素用一个三元组：`(row, col, value)`​  
优点：节省空间，便于快速操作非零元

## 三、广义表

### 1. 定义：

> 广义表是线性表的推广：表中的元素可以是**原子（单元素）或子表（表中表）** 。

例如：

```text
A = (a, b, (c, d), e)
```

- ​`a`​、`b`​、`e`​ 是原子
- ​`(c, d)`​ 是子表
- ​`A`​ 的长度为 4（最外层元素数量）

### 2. 存储结构：**链式存储（头尾指针表示）**

```cpp
struct GLNode {
    bool isAtom;        // 是否原子
    union {
        char atom;      // 原子
        struct {
            GLNode* head;
            GLNode* tail;
        } ptr;          // 子表
    };
};
```

### 3. 操作：

|操作|描述|
| ------------| ----------------------------|
|求表长|最外层元素个数（不计嵌套）|
|求表深度|最大嵌套层数|
|复制、销毁|遍历所有子节点递归处理|

### 4. 广义表的递归定义：

- 空表是一个广义表：`()`​
- 若 `a`​ 是原子，`G`​ 是广义表，则 `(a.G)`​ 也是广义表
