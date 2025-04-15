---
title: 二、C++
date: '2025-04-15 14:59:18'
updated: '2025-04-15 15:00:36'
permalink: /post/ii-c-fl4k0.html
comments: true
toc: true
---



# 二、C++

本周主要学习的是内容是：日期问题。

核心是使用Nextday函数：

```c++
void NextDay(int& year, int& month, int& day) {
	// & 出现在定义or形参中，表示引用，出现在其他位置表现为取缔值
	int dayOfMonth[] = { 0,31,28,31,30,31,30,31,31,30,31,30,31 };
	int isLeap;
	isLeap = year % 400 == 0 || year % 4 == 0 && year % 100 != 0;
	if (isLeap) {
		dayOfMonth[2] = 29;
	}
	else {
		dayOfMonth[2] = 28;
	}// & 闰年判断

	++day;
	if (day > dayOfMonth[month]) {
		day = 1;
		++month;
	}
	if (month > 12) {
		month = 1;
		++year;
	}
}
```

​`NextDay`​ 函数的作用是将输入的日期（年、月、日）推进到下一天，同时处理闰年、月份切换和年份切换。

其余的根据题目要求，进行对nextday函数进行循环调用，将日期逐日推进，最后打印结果即可。
