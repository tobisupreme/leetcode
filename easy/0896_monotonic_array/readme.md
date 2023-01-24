# [896. Monotonic Array](https://leetcode.com/problems/monotonic-array/)

An array is **monotonic** if it is either monotone increasing or monotone decreasing.

An array `nums` is monotone increasing if for all `i <= j`, `nums[i] <= nums[j]`. An array `nums` is monotone decreasing if for all `i <= j`, `nums[i] >= nums[j]`.

Given an integer array `nums`, return `true` _if the given array is monotonic_, or `false` _otherwise_.

### Example 1:

```text
Input: nums = [1,2,2,3]
Output: true
```

### Example 2:

```text
Input: nums = [6,5,4,4]
Output: true
```

### Example 3:

```text
Input: nums = [1,3,2]
Output: false
```

### Constraints:

- `1 <= nums.length <= 10`<sup>5</sup>
- `-10`<sup>5</sup> `<= nums[i] <= 10`<sup>5</sup>
