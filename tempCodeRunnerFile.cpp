#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric> // For std::accumulate
#include <tuple>

class Solution {
public:
    std::vector<int> A;
    int c1, c2;

    std::tuple<int, int, int, int> t(int maxA) {
        std::vector<int> A1 = A;
        for (int i = 0; i < A1.size(); ++i) {
            A1[i] = maxA - A1[i];
        }
        std::sort(A1.begin(), A1.end());
        
        int n = 2;
        int su = std::accumulate(A1.begin(), A1.end(), 0);
        int tot = su;
        
        while (!A1.empty() && A1.back() > su / n) {
            n--;
            su -= A1.back();
            A1.pop_back();
        }
        su /= n;
        
        return std::make_tuple(tot, su, tot - 2 * su, (tot - 2 * su) * c1 + su * c2);
    }

    int minCostToEqualizeArray(std::vector<int>& nums, int cost1, int cost2) {
        A = nums;
        c1 = cost1;
        c2 = cost2;

        int maxA = *std::max_element(A.begin(), A.end());
        int l = std::get<2>(t(maxA));
        int n = A.size();

        while (l >= n - 1 && n - 1 > 1) {
            maxA += l / (n - 1);
            l += (2 - n) * (l / (n - 1));
        }

        int result1 = c1 * (maxA * n - std::accumulate(A.begin(), A.end(), 0));
        int result2 = std::get<3>(t(maxA));
        int result3 = std::get<3>(t(maxA + 1));

        return std::min({result1, result2, result3});
    }
};

int main() {
    Solution sol;
    std::vector<int> nums = {3,9,1};
    int cost1 = 5;
    int cost2 = 7;
    std::cout << sol.minCostToEqualizeArray(nums, cost1, cost2) << std::endl;
    return 0;
}
