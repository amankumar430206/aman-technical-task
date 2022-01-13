import { createStore } from 'vuex'
import store_auth from "./modules/auth";
import store_blogs from "./modules/blogs";

export default createStore({
  modules: {
    store_auth,
    store_blogs
  }
})
