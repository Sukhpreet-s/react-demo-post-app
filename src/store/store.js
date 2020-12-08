import { createStore } from 'redux';



// Reducers
function postReducer(state = { posts: [] }, action) {
  switch (action.type) {

    case 'POST_ADD':
      return {
        posts: [...state.posts, action.post]
      }
    
    case 'POST_DELETE':
      return {
        posts: state.posts.filter(post => post.id !== action.id)
      }
    
    default:
      return state;
  }
}


// Action Creators
let postId = 0;

export const addPost = content => {
  return {  
    type: "POST_ADD",
    post: {
      id: ++postId,
      ...content
    } 
  }
}

export const deletePost = id => ({ type: "POST_DELETE",  id})


// Create the store.
export const store = createStore(postReducer);