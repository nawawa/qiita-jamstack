export const state = () => ({
  pagination: Boolean,
});

export const mutations = {
  pagination(state, paginated) {
    state.pagination = paginated;
  },
}