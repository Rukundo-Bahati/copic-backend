import jwt from "jsonwebtoken";
import c from "config";

const secret = c.get('PRIVATEKEY');
const authMiddleWare = async (req, res, next) => {
  try {
    // const token = req.headers.authorization.split(" ")[1];
    const token = req.cookies.jwt;
    // console.log(token)
    if (token) {
      const decoded = jwt.verify(token, secret);
      console.log(`Decoded: ${decoded}`)
      req.body._id = decoded?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default authMiddleWare;
