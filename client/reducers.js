/**
 * Root Reducer
 */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Import Reducers
import { reducer } from 'react-redux-sweetalert';
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import categories from './modules/Dashboard/Category/CategoryReducer'
import products from './modules/Dashboard/Products/ProductsReducer'
import user from './modules/Dashboard/Brand/UserReducer'
import authentication from './modules/Dashboard/Authentication/AuthenticationReducer'
import integration from './modules/Dashboard/Integration/IntegrationReducer'
import campaign from './modules/Dashboard/Campaign/CampaignReducer'
import label from './modules/Dashboard/Configuration/LabelReducer'
import world from './modules/WorldReducer'
import step from './modules/Dashboard/Step/StepReducer'
import message from './modules/Dashboard/Message/MessageReducer'
import dashboardForm from './modules/Dashboard/Form/FormReducer'

import customerCampaign from './modules/CustomerApp/Campaign/CampaignReducer'
import customerProduct from './modules/CustomerApp/Products/ProductReducer'
import customerCategory from './modules/CustomerApp/Category/CategoryReducer'

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  authentication,
  posts,
  intl,
  categories,
  products,
  user,
  integration,
  campaign,
  label,
  step,
  world,
  message,
  dashboardForm,
  form: formReducer,
  sweetalert: reducer,

  customerCampaign,
  customerProduct,
  customerCategory,
});
