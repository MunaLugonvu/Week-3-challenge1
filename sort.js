
   var arr1 = ['m','f','1','2','3','4','h','6','8'];
var arr2 =['evens', 'odds','chars']
    var obj = {}
   var  vCount = 0

    arr1.forEach(function(value, index) {
        for(var x = 0; x < arr1.length ; x++)
        {
          if ((arr1[x])%2 == 0)
          {
              obj['evens'] = arr1[x];
            vCount += 1;
      
          }
          else if (arr1[x]%2 ==1){
                obj['odds'] = arr1[x]
                vCount += 1;
          }
          else {
              obj['chars'] = arr1[x]
             
          }
        }
          
      
      
      });
      
      console.log(obj);
      
      