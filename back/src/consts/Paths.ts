/**
 * Express router paths go here.
 */

export default {
  Base: '/api',
  Users: {
    Base: '/users',
    Get: '',
    GetOne: '/:id',
    GetStats:'/stats/:id',
    Add: '',
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
    Average: '/avgRating/:id',
  },
  Reviews: {
    Base: '/reviews',
    Get: '',
    GetOne: '/:id',
    Add: '',
    Update: '/:id',
    Delete: '/:id',
    Like: '/like/:id'
  },
  Artists: {
    Base: '/artists',
    Get: '',
    GetOne: '/:id',
    Add: '',
    Update: '/:id',
    Delete: '/:id',
    Average: '/avgRating/:id',
  },
  Comments: {
    Base: '/comments',
    Get: '',
    GetOne: '/:id',
    Add: '',
    Update: '/:id',
    Delete: '/:id',
  },
} as const;
