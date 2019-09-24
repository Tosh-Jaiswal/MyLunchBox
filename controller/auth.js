// here is the main logic for authentication

exports.getLogin = (req,res,next) =>{
//    get /login logic
res.render("signin");
};

exports.getSignup = (req,res,next) =>{
// get /signup logic
res.render("signup")
};

exports.postSignup = (req,res,next) =>{
//  post /signup logic
};

exports.postLogin = (req,res,next) =>{
// post login logic
};
