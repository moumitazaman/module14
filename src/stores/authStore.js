import {ref, reactive} from 'vue';
import router from '../router/index';
import { cart } from "./cart";



const authStore = reactive({
    errorMsg: "",
    isAuthenticated: localStorage.getItem("auth") == 1,
    user: JSON.parse(localStorage.getItem("user")),
    authenticate(email, password) {
      fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error == 0) {
            authStore.isAuthenticated = true;
            authStore.user = res;
            localStorage.setItem("auth", 1);
            localStorage.setItem("user", JSON.stringify(res));
            router.push("/dashboard");
          }
        });
    },
    register(name, email, password) {
      fetch("http://localhost:8000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error == 1) {
            authStore.errorMsg = res.message;
          } else {
            authStore.errorMsg = "Registration successful";
            router.push("/login");
          }
        });
    },
    logout() {
      authStore.isAuthenticated = false;
      authStore.user = {};
      localStorage.removeItem("auth", 0);
      localStorage.removeItem("user", "{}");
      cart.items = {};
      cart.totalPrice = 0;
      cart.saveCartInLocalStorage();
      router.push("/login");
    },
    getUserToken() {
      return authStore.user.token;
    },
  });

export default authStore;
export { authStore }