function person(){
    let pii= {
      name:"Somesh Dixit"
      ,SSN: 123-12-1221
    ,haircolor:brown
    };
  return{
    getName: function(){
      return pii.name
    },
    gethaircolor :function(){
      return pii.haircolor
    }
  }
  }