//Challenge one Almost Palindrome
function AlmostPalindrome(palin){
    let len = palin.length;
    let mid = len/2;
    let count=0; //Count is acting as changes needed

    for(let i=0; i<mid; i++){
        if(palin.charAt(i) != palin.charAt(len-i-1)){
            count++;
        }
    }
    if(count == 1){
        return true;
    }
    else{
        return false;
    }
}



//Challenge two staircase of recursion
function Stairs(n){
    if(n<=1){
        return 1;
    }
    else{
        return Stairs(n-1) + Stairs(n-2);
    }
}

