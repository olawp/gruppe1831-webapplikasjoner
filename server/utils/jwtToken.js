/**
 * @author Ola Wethal Petersen, Marius Wallin
 * @desc Håndterer jwt token som blir knyttet opp mot en bruker. Tatt fra pensum
 * @exports  sendToken
 */
export const sendToken = (user, res) => {
  const token = user.getJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: true,
  };

  res
    .status(200)
    .cookie('token', token, options)
    .json({
      success: true,
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        id: user.id,
      },
    });
};
