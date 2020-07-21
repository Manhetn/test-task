import './index.css';

import Storage from '../../scripts/components/Storage';

import Avatar from '../../scripts/components/Avatar';
import AVATAR_PARAMETERS from '../../scripts/constants/avatar';

import User from '../../scripts/components/User';
import USER_PARAMETERS from '../../scripts/constants/user';

import Friends from '../../scripts/components/Friends';
import FRIENDS_PARAMETERS from '../../scripts/constants/friends';

import Pagination from '../../scripts/components/Pagination';
import PAGINATION_PARAMETERS from '../../scripts/constants/pagination';

import Friend from '../../scripts/components/Friend';

import Posts from '../../scripts/components/Posts';
import POSTS_PARAMETERS from '../../scripts/constants/posts';

import Post from '../../scripts/components/Post';

import Tabs from '../../scripts/components/Tabs';
import TABS_PARAMETERS from '../../scripts/constants/tabs';

import Filter from '../../scripts/components/Filter';
import FILTER_PARAMETERS from '../../scripts/constants/filter';

import ApiUser from '../../scripts/api/ApiUser';
import API_USER_PARAMETERS from '../../scripts/constants/api-user';

import ApiFriends from '../../scripts/api/ApiFriends';
import API_FRIENDS_PARAMETERS from '../../scripts/constants/api-friends';

import ApiPosts from '../../scripts/api/ApiPosts';
import API_POSTS_PARAMETERS from '../../scripts/constants/api-posts';

import NotFound from '../../scripts/components/NotFound';
import MESSAGES_EN from '../../scripts/constants/messages_en';

const storage = new Storage(sessionStorage);
const avatar = new Avatar(AVATAR_PARAMETERS);
const user = new User(USER_PARAMETERS);
const friends = new Friends(FRIENDS_PARAMETERS);
const pagination = new Pagination(PAGINATION_PARAMETERS);
const friend = new Friend();
const posts = new Posts(POSTS_PARAMETERS);
const post = new Post();
const tabs = new Tabs(TABS_PARAMETERS);
const filter = new Filter(FILTER_PARAMETERS);
const notFound = new NotFound(MESSAGES_EN);
const apiUser = new ApiUser(API_USER_PARAMETERS);
const apiFriends = new ApiFriends(API_FRIENDS_PARAMETERS);
const apiPosts = new ApiPosts(API_POSTS_PARAMETERS);
console.log('!!!!!!!!!!!!!!!!!!!')
user.getDependencies({ apiUser });
posts.getDependencies({ storage, apiPosts, post, notFound });
friends.getDependencies({ storage, apiFriends, friend, pagination, notFound, filter });
filter.getDependencies({ storage, friends, pagination });
tabs.getDependencies({ friends, posts, filter, pagination });
pagination.getDependencies({ friends });

user.getUser();
posts.getPosts();
friends.getFriends();

// filter.setListeners();
tabs.setListeners();

avatar.setListeners();


