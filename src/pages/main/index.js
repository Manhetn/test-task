import './index.css';

import Storage from '../../scripts/components/Storage';

import User from '../../scripts/components/User';
import USER_PARAMETERS from '../../scripts/constants/user';

import Avatar from '../../scripts/components/Avatar';
import AVATAR_PARAMETERS from '../../scripts/constants/avatar';

import Friends from '../../scripts/components/Friends';
import FRIENDS_PARAMETERS from '../../scripts/constants/friends';

import Friend from '../../scripts/components/Friend';

import Posts from '../../scripts/components/Posts';
import POSTS_PARAMETERS from '../../scripts/constants/posts';

import Post from '../../scripts/components/Post';

import Tabs from '../../scripts/components/Tabs';
import TABS_PARAMETERS from '../../scripts/constants/tabs';

import Filter from '../../scripts/components/Filter';
import FILTER_PARAMETERS from '../../scripts/constants/filter';

import Pagination from '../../scripts/components/Pagination';
import PAGINATION_PARAMETERS from '../../scripts/constants/pagination';

import ApiUser from '../../scripts/api/ApiUser';
import API_USER_PARAMETERS from '../../scripts/constants/api-user';

import ApiFriends from '../../scripts/api/ApiFriends';
import API_FRIENDS_PARAMETERS from '../../scripts/constants/api-friends';

import ApiPosts from '../../scripts/api/ApiPosts';
import API_POSTS_PARAMETERS from '../../scripts/constants/api-posts';

// import checkImageUrl from '../../scripts/utisl/checkImageUrl';

const storage = new Storage(sessionStorage);
const user = new User(USER_PARAMETERS);
const avatar = new Avatar(AVATAR_PARAMETERS);
const friends = new Friends(FRIENDS_PARAMETERS);
const friend = new Friend();
const posts = new Posts(POSTS_PARAMETERS);
const post = new Post();
const tabs = new Tabs(TABS_PARAMETERS);
const filter = new Filter(FILTER_PARAMETERS);
const pagination = new Pagination(PAGINATION_PARAMETERS);

const apiUser = new ApiUser(API_USER_PARAMETERS);
const apiFriends = new ApiFriends(API_FRIENDS_PARAMETERS);
const apiPosts = new ApiPosts(API_POSTS_PARAMETERS);

user.getDependencies({ apiUser });
friends.getDependencies({ storage, apiFriends, friend, pagination });
posts.getDependencies({ storage, apiPosts, post });
tabs.getDependencies({ friends, posts });
filter.getDependencies({ storage, friends, pagination });
pagination.getDependencies({ friends });

user.renderUser();
avatar.renderAvatar();
friends._getFriends();
posts._getPosts();
tabs.setListeners();
filter.setListeners();
