export const sendToken = (user, res) => {
  const token = user.getJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE_tIME * 24 * 60 * 60 * 1000
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
        email: user.email,
        role: user.role,
      },
    });
};