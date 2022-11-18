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
    ll arr[n];
    for(ll i=0;i<n;i++)
    {
        arr[i]=i+1;
    }

    if(n%2)
    {
        for(ll i=1;i<n-2;i=i+2)
        {
            ll x=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=x;
        }
    }
    else{
        for(ll i=0;i<n-2;i=i+2)
        {
            ll x=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=x;
        }
    }

       for(ll i=0;i<n;i=i+2)
        {
            cout<<arr[i]<<" ";
        }
        cout<<endl;
    
}
int main()
{
tests()
The_Expl0rer();
    
    return 0;
}