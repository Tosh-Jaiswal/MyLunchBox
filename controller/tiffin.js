exports.getIndex = (req, res,next) => {
    res.render('index')
};

exports.getList = (req,res,next) =>{
//   menu list 
res.render('foodprovider')
};

exports.getFoodOrder = (req,res,next) =>{
    //   menu list 
    res.render('foodorder')
};

exports.getContactUs = (req,res,next) =>{
    //   menu list 
    res.render('Contact-us')
};



//syntax for controller file
// exports.get/put/post/delete = (req,res,next) =>{
//   logic
// };