// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        aboutUS: resolve(__dirname, "pages/aboutUs.html"),
        addGoal: resolve(__dirname, "pages/addGoal.html"),
        budgetCategoryChanger: resolve(
          __dirname,
          "pages/budgetCategoryChanger.html"
        ),
        budgetTracking: resolve(__dirname, "pages/budgetTracking.html"),
        contactUs: resolve(__dirname, "pages/contactUs.html"),
        expenses1: resolve(__dirname, "pages/expenses1.html"),
        expensesAddition: resolve(__dirname, "pages/expensesAddition.html"),
        goals: resolve(__dirname, "pages/goals1.html"),
        goals1: resolve(__dirname, "pages/goals.html"),
        login: resolve(__dirname, "pages/login.html"),
        register: resolve(__dirname, "pages/register.html"),
        userHome: resolve(__dirname, "pages/userHome.html"),
      },
    },
  },
});
