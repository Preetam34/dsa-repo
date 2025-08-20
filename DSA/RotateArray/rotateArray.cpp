#include <vector>
#include <algorithm>
using namespace std;

class Solution
{
public:
    void rotate(vector<int> &nums, int k)
    {
        int n = nums.size();
        if (n == 0)
            return;

        k = k % n;

        auto reverseRange = [&](int l, int r)
        {
            while (l < r)
            {
                swap(nums[l], nums[r]);
                l++;
                r--;
            }
        };

        reverseRange(0, n - 1);
        reverseRange(0, k - 1);
        reverseRange(k, n - 1);
    }
};

class Solution2
{
public:
    void reverseRange(vector<int> &nums, int l, int r)
    {
        while (l < r)
        {
            swap(nums[l], nums[r]);
            l++;
            r--;
        }
    }

    void rotate(vector<int> &nums, int k)
    {
        int n = nums.size();
        if (n == 0)
            return;
        k = k % n;
        reverseRange(nums, 0, n - 1);
        reverseRange(nums, 0, k - 1);
        reverseRange(nums, k, n - 1);
    }
};
