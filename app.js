
function findsum()
{
    var sum=0;
    for(var i=0;i<=arguments.length;i++)
    {
        var sum=sum+i;
    }
    return sum;
}

console.log(findsum(1,2,3));
console.log(findsum(1,2,3,4,5,6,7,8,9,10));
