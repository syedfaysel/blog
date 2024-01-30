---
title: "Binary Search"
subtitle: "Implementing  discreate & continuous binary search in c++"
date: "31-01-2024"
author: "Syed Faysel Ahammad Rajo"
---

## Intro

Binary search is a search algorithm to search elements in a [monotonous array](). 


## Discreate Binary Search implementation

```c++
//Author:@syedrajo20
// Discreate binary search

#include<bits/stdc++.h>
using namespace std;
#define nl "\n"
#define ll long long

int32_t main(){
	ios_base::sync_with_stdio(0); cin.tie(NULL);

	int n; //size of array
	cin >> n;
	vector<int> v(n);
	// insert the elements into vector
	for (int i = 0; i < n; i++){
		cin >> v[i];
	}

	int to_find; // value to search for
	cin >> to_find;

	int lo = 0, hi = n - 1; 
	// search space or range [lo, hi]
	int mid;

	while(hi - lo > 1){
		mid = (hi + lo) / 2;

		if(v[mid] < to_find){
			lo = mid + 1;
		}else{
			hi = mid;
		}
	}
	// now check between 2 values (v[lo], v[hi])
	if(v[lo] == to_find) {
		cout << "Found at index: " << lo << nl;
	}else if(v[hi] == to_find) {
		cout << "Found at index: " << lo << nl;
	}else cout << "Not Found";

	return 0;
}

```
Time Complexity: **O(log n)**

> Connect me on  [github](https://github.com/syedfaysel). 
