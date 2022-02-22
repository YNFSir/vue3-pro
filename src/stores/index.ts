/*
 * Created by YNF on 2022/2/15 18:05.
 * @file: pinia stores
 */
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isFocus: false
  }),

  actions: {
    handleChangeFocus (isFocus: boolean) {
      this.isFocus = isFocus;
    }
  },

  getters: {
    focus: state => !state.isFocus
  }
});
