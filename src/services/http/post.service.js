import Fire from "../Fire";

export const _getPostsFromLocation = (location) =>{
   return  Fire.shared.getPostsFromLocation(location);
};

export const _addPost = async (post) =>{
   return Fire.shared.addPost(post);
};

export const _getPostsFromUser=()=>{
    return Fire.shared.getPostsFromUser();
};
