 #include <bits/stdc++.h>
#define ll long long
#define ull unsigned long long
#define ld long double
#define vi vector<int>
#define vll vector<long long>
#define pb push_back
#define p_b pop_back
#define print(s) cout<<s<<endl;
#define tests() int t; cin >> t; while(t--)
#define loop(a, n) for(int i = 0; i < n; i++)
using namespace std;
void The_Expl0rer(){
    
    ll n;
    cin>>n;
    vi vec(n);
    loopi(0,n) vec[i] = i+1;
    
    for( int i = n%2 ; i < n-2; i+= 2)
    {
        swap(vec[i], vec[i+1]);
    }
//   for n is odd..
   if(n&1){
 reverse(v.begin()+1,v.begin()+n-2); 
}
}

int main()
{
tests()
The_Expl0rer();
    
    return 0;
}