import { configureStore } from "@reduxjs/toolkit";
import popUpReducer from "./pop-up-slice";
import authReducer from "./auth-slice";
import themeReducer from "./theme-slice";
import mailBoxReducer from "./mail-box-slice";
import sidebarReducer from "./sidebarSlice";

const store = configureStore({
  reducer: {
    modals: popUpReducer,
    auth: authReducer,
    theme: themeReducer,
    mailBox: mailBoxReducer,
    sideBar:sidebarReducer
  },
});

export default store;
