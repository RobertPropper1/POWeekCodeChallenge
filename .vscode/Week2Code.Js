//Challenge One Boomerang
function Boomerang(param){
    let count=0;
    for(let i=0; i<(param.length-2); i++){
        if(param[i]!=param[i+1] && param[i]==param[i+2]){
            count++;
        }
        else{
            continue;
        }
    }
    return count;
}

//Challenge two LoneOne
function LoneOne(param){
    let count = 0;
    for(let i=0; i<param.length; i++){
        if(i==param.length-1){
            if(param[i]==1 && param[i-1]!=1){
                count++;
            }
        }
        else{
            if(param[i]==1 && param[i+1]!=1 && param[i-1]!=1){
                count++;
            }
        }
    }
    return count;
}
