import { configureStore } from "@reduxjs/toolkit";
import auth from "./slice/auth";

const store = configureStore({
    reducer: {
        auth,
    },
});

export default store;
export type RootStore = ReturnType<typeof store.getState>; // useSelector desak ->  tepadagi storedan getState qiliniyapti.
export type AppDispatch = typeof store.dispatch; // useDispatch bn birxil ekan. aniqlashtirish kerak!!
