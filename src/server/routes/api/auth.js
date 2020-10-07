const router = require('express').Router();

const {
  signUp,
  login,
  authenticate,
  issueToken,
} = require('../../controllers/auth');

router.post('/signup', signUp, issueToken);
router.post('/login', login, issueToken); // A
/* Convenience route to check if a token is valid */
router.post('/validateToken', authenticate, (
  // S
  req,
  res
) => res.status(200).json({ ok: true }));

module.exports = router;
