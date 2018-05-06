import { Router } from 'express';
const router = new Router();

import Authentication from '../controllers/authentication.controller';
const AuthenticationController = new Authentication();

router.route('/signin').post(AuthenticationController.brandSignin)
router.route('/revoke').post(AuthenticationController.revokeAuthentication)
router.route('/signout').post(AuthenticationController.signout)
// router.route('/signup').post(AuthenticationController.signUp)

// router.route('/signin').post(AuthenticationController.signIn);

// router.route('/forgot-password').post(AuthenticationController.forgotPassword)

// router.route('/reset-password').post(AuthenticationController.resetPassword)

export default router;
