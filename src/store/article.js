export const state = () => ({
  is_paginated: false,
});

export const mutations = {
  set_is_paginated(state, is_paginated) {
    state.is_paginated = is_paginated;
  },
}