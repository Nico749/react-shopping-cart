const jwt = require ('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        //grab the header of the token 
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if (err) res.status(403).json("Invalid token");
        req.user = user;
        //move on to the route 
        next();
      });
    } else {
      return res.status(401).json("Authorization failed");
    }
  };

const verifyTokenAndAuth = (req, res, next) => {
    verifyToken(req, res, () => {
        //if userId is the same of the one we pass or is an admin, then continue
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        }
        else{
            res.status(403).json("You are not authorized")
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        //check if the user is admin
        if (req.user.isAdmin) {
            next()
        }
        else{
            res.status(403).json("You are not an admin therefore not authorized")
        }
    })
}


module.exports = {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin}