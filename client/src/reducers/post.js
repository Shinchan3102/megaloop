const initialisation = { isAdd: false, posts: [], categories: [], updatePosts: null, isEdit: false, history: [] };

const reducer = (state = initialisation, action) => {
    switch (action.type) {
        case "ADD_HISTORY":
            return { ...state, history: [...state.history, action.payload] };
        case "ADD":
            return { ...state, isAdd: true };
        case "EDIT":
            return { ...state, isEdit: true };
        case "REMOVE_EDIT":
            return { ...state, isEdit: false };
        case "REMOVE":
            return { ...state, isAdd: false, updatePosts: null };
        case "UPDATE":
            return { ...state, isAdd: true, updatePosts: action.payload }
        case "FETCH_ALL":
            return {
                ...state,
                posts: action.payload,
                categories: Array.from(new Set([...action.payload.map((post) => post.category.toUpperCase())]))
            };
        // case "FETCH_BY_SEARCH":
        //     return { ...state, memory: action.payload };
        // case "FETCH_MEMORY":
        //     return { ...state, mem: action.payload };
        case "CREATE":
            return {
                ...state,
                posts: [action.payload, ...state.posts],
                categories: Array.from(new Set([...state.categories, action.payload.category.toUpperCase()]))
            };
        case "UPDATED_POST":
            return {
                ...state,
                posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post),
                categories: Array.from(new Set([...state.categories, action.payload.category.toUpperCase()]))
            };
        // case "LIKE":
        //     return { ...state, memory: state.memory.map((memory) => memory._id === action.payload._id ? action.payload : memory) };
        // case "COMMENT":
        //     return { ...state, memory: state.memory.map((memory) => memory._id === action.payload._id ? action.payload : memory) };
        case "DELETE":
            return {
                ...state,
                posts: state.posts.filter((post) => post._id !== action.payload._id)
            };
        default:
            return state;
    }
}
export default reducer;