module.exports = function toReadable (n) {
    let text='';
    let z = [];
   z[0]='zero';
   z[1]='one';
   z[2]='two';
   z[3]='three';
   z[4]='four';
   z[5]='five';
   z[6]='six';
   z[7]='seven';
   z[8]='eight';
   z[9]='nine';
   let t = [];
   t[0]='ten';
   t[1]='twenty';
   t[2]='thirty';
   t[3]='forty';
   t[4]='fifty';
   t[5]='sixty';
   t[6]='seventy';
   t[7]='eighty';
   t[8]='ninety';
   let el = [];
   el[0]='ten';
   el[1]='eleven';
   el[2]='twelve';
   el[3]='thirteen';
   el[4]='fourteen';
   el[5]='fifteen';
   el[6]='sixteen';
   el[7]='seventeen';
   el[8]='eighteen';
   el[9]='nineteen';
  
   let i=0;
  const hundred='hundred';
    let a = Array.from(String(n)).map(i=>Number(i));
    for(i=0;i<10;i++)
    {
      if(a[a.length-1]==i)
      {
        if(a.length==1) return z[i];
        else {if (i !=0) text=`${z[i]}`; break;}
      }
    }
    if(a.length>=2)
    {
  for(let j=0;j<10;j++)
  {
    if(a[a.length-2]==j)
    {
  if (j==1) {
    if(a.length==2) {let st = el[i].trim();
        return st;}
        else text=`${el[i]}`;
  }
  else if (j==0) {
  }
  else {
    text=`${t[j-1]} `.concat(text);
    if(a.length==2) {let st = text.trim();
        return st;}
  }
    }
  }
  if(a.length==3){
    (text == undefined) ? text="hundred" : text="hundred ".concat(text);
    for(let k=0;k<10;k++){
      if(a[a.length-3]==k) text= `${z[k]} `.concat(text);
    }
  }
  let st = text.trim();
  return st;
  }
}
