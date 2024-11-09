import jwt from 'jsonwebtoken';
import config from 'config';

const generateTokenAndSetCookie = (userId, res) => {
  try {
    const token = jwt.sign({ id: userId }, config.get('PRIVATEKEY'), { expiresIn: '7d' });
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'strict',
    });
    // console.log(token);
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    return null;
  }
};

export default generateTokenAndSetCookie;
