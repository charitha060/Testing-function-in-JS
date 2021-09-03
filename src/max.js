const max = (arr) =>
{
let maxx=arr[0];
let i = arr.length;
  while (i--) {
        maxx = arr[i] > maxx ? arr[i] : maxx;
}
if(arr.length==0) return null
else if(arr.length==1) return arr
return maxx
}

 var arr=[-1,-2,-3,-4]
 console.log(max(arr))


