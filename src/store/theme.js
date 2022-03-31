export const state = () => ({
  theme: 'dark',
});

export const mutations = {
  toggle(state, dark_or_light) {
    state.theme = dark_or_light;
  },
}