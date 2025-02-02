export const pathKeys = {
  root: '/',
  home() {
    return this.root;
  },
  login() {
    return this.root.concat('login/');
  },
};