const min = (arr) =>
{
let minn=arr[0];
let i = arr.length;
  while (i--) {
        minn = arr[i] < minn ? arr[i] : minn;
}
if(arr.length==0) return null
else if(arr.length==1) return arr
return minn
}

 


