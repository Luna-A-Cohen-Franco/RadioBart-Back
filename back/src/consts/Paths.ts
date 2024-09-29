/**
 * Express router paths go here.
 */

import Album from "@src/models/Album";
import Genre from "@src/models/Genre";


export default {
  Base: '/api',
  Users: {
    Base: '/users',
    Get: '',
    GetOne: '/:id',
    Register: '',
    Update: '/:id',
    Delete: '/:id',
  },
  Auth: {
    Base: '/auth',
    Login: ''
  },
  Albums: {
    Base: '/albums',
    Get: '',
    GetOne: '/:id',
    Add: '',
    Update: '/:id',
    Delete: '/:id',
  },
  Reviews: {
    Base: '/reviews',
    Get: '',
    GetOne: '/:id',
    Add: '',
    Update: '/:id',
    Delete: '/:id',
  },
  Artists: {
    Base: '/artists',
    Get: '',
    GetOne: '/:id',
    Add: '',
    Update: '/:id',
    Delete: '/:id',
  },
  Genres: {
    Base: '/genres',
    Get: '',
    GetOne: '/:id',
    Add: '',
    Update: '/:id',
    Delete: '/:id',
  },
} as const;
