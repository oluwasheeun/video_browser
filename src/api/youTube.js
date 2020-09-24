import axios from 'axios';

const KEY = 'AIzaSyDGNHDtnhjcxYLiXFshwq6nSJ6JG9aDlbc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
