# Problem 1: Rotate Array (LeetCode 189)

## Problem

Rotate an array `nums` of length `n` to the right by `k` steps.

Example:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

yaml
Copy
Edit

---

## Key Concepts

- **Normalization**:  
  `k = k % n`  
  Rotating by full cycles (`n`, `2n`, …) does nothing.
- **Index Formula**:  
  newIndex = (i + k) % n

markdown
Copy
Edit
Derived from circular movement (like a clock).

---

## Approaches

### 1. Brute Force

- Rotate 1 step, repeat `k` times
- Time: O(n·k)
- Space: O(1)
- Too slow for large `k`.

### 2. Extra Array (Formula)

- Place each element at `(i+k)%n` in a new array
- Time: O(n)
- Space: O(n)
- Very intuitive, but extra memory used.

### 3. Reversal Trick (Classic)

1. Reverse the whole array
2. Reverse the first `k` elements
3. Reverse the last `n-k` elements

- Time: O(n)
- Space: O(1)
- Standard optimal solution.

### 4. Reversal Trick (Variation A)

1. Reverse last `k` elements
2. Reverse first `n-k` elements
3. Reverse the whole array

- Time: O(n)
- Space: O(1)
- Symmetric to the classic trick.

### 5. Reverse + Shift (Variation B)

1. Reverse last `k` elements
2. Shift last `k` elements to the front

- Time: O(n)
- Space: O(1)
- Works, but shifting is less elegant for interviews.

---

## Visualization: Why (i + k) % n ?

Think of indices as hours on a circular clock.

Example: n = 7, k = 3

- Index 5 → move 3 forward → 8
- 8 % 7 = 1 → so element at index 5 moves to index 1.

---

## Key Learnings

- Normalize `k` with `k = k % n`.
- Formula `(i+k)%n` captures circular shifts.
- Reversal trick is cleanest (O(n), O(1)).
- Multiple variations exist, all valid if explained well.

=====================================================================

# Problem 1: Rotate Array (LeetCode 189)

## Problem

Rotate an array `nums` of length `n` to the right by `k` steps.

Example:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

yaml
Copy
Edit

---

## Key Concepts

- **Normalization**:  
  `k = k % n`  
  Rotating by full cycles (`n`, `2n`, …) does nothing.
- **Index Formula**:  
  newIndex = (i + k) % n

yaml
Copy
Edit
Derived from circular movement (like a clock).

---

## Approaches

### 1. Brute Force

- Rotate 1 step, repeat `k` times
- Time: O(n·k)
- Space: O(1)
- Too slow for large `k`.

---

### 2. Extra Array (Formula)

- Create a new array.
- For each index `i`, place element at `(i+k)%n`.
- Copy result back to original.
- Time: O(n)
- Space: O(n)

**Loop Walkthrough (n=7, k=3, nums=[1,2,3,4,5,6,7])**

- i=0 → res[3]=1
- i=1 → res[4]=2
- i=2 → res[5]=3
- i=3 → res[6]=4
- i=4 → res[0]=5
- i=5 → res[1]=6
- i=6 → res[2]=7  
  Result: `[5,6,7,1,2,3,4]`

---

### 3. Reversal Trick (Classic In-Place)

1. Reverse the whole array.
2. Reverse the first `k` elements.
3. Reverse the last `n-k` elements.

- Time: O(n)
- Space: O(1)

**Loop Walkthrough (n=7, k=3, nums=[1,2,3,4,5,6,7])**

1. Reverse all → `[7,6,5,4,3,2,1]`
2. Reverse first 3 → `[5,6,7,4,3,2,1]`
3. Reverse last 4 → `[5,6,7,1,2,3,4]`

Result: `[5,6,7,1,2,3,4]`

---

### 4. Reversal Trick (Variation A)

1. Reverse last `k` elements.
2. Reverse first `n-k` elements.
3. Reverse the whole array.

- Time: O(n)
- Space: O(1)

---

### 5. Reverse + Shift (Variation B)

1. Reverse last `k` elements.
2. Shift last `k` elements to the front.

- Time: O(n)
- Space: O(1)
- Works but shifting = manual rearrangement (less elegant in interviews).

---

### 6. Cyclic Replacement (In-Place with `(i+k)%n`)

- Follow cycles created by `(i+k)%n` mapping.
- Carry one element around until the cycle closes.
- Repeat for all cycles until every element is moved once.
- Time: O(n)
- Space: O(1)

**Loop Walkthrough (n=7, k=3, nums=[1,2,3,4,5,6,7])**

- Start at index 0, carry=1  
  → move to 3, put 1 there, carry=4  
  → move to 6, put 4 there, carry=7  
  → move to 2, put 7 there, carry=3  
  → move to 5, put 3 there, carry=6  
  → move to 1, put 6 there, carry=2  
  → move to 4, put 2 there, carry=5  
  → move to 0, put 5 there, cycle ends.
- All elements moved → `[5,6,7,1,2,3,4]`.

---

## Visualization: Why (i + k) % n ?

Think of indices as hours on a circular clock.

Example: n = 7, k = 3

- Index 5 → move 3 forward → 8
- 8 % 7 = 1 → so element at index 5 moves to index 1.

---

## Key Learnings

- Normalize `k` with `k = k % n`.
- Formula `(i+k)%n` captures circular shifts.
- Direct in-place with formula fails due to overwriting.
- Extra array → safe but O(n) extra space.
- Reversal trick → cleanest O(n), O(1).
- Cyclic replacement → O(n), O(1) but more complex.
