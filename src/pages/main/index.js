import './index.css';

import User from '../../scripts/components/User';
import USER_PARAMETERS from '../../scripts/constants/user';

import ApiUser from '../../scripts/api/ApiUser';
import API_USER_PARAMETERS from '../../scripts/constants/api-user';

const user = new User(USER_PARAMETERS);

const apiUser = new ApiUser(API_USER_PARAMETERS);

user.getDependencies({ apiUser });


user.renderUser();
