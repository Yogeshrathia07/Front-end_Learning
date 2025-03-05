
using namespace std;

int calculate(const string& str) {
    unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
    int count = 0;
    
    for (char a : str) {
        if (vowels.count(a)) {
            count++;
        }
    }
    
    return str.size() - count; 
}

int main() {
    string str;
    cout << "Enter the string: ";
    cin >> str;

    int val = calculate(str);
    cout << val << endl;

    return 0;
}
