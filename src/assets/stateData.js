import {reactive,computed,toRefs} from 'vue'
export const stateData = ()=>{
    const state = reactive({
      firstname: 'noushedul',
      lastname: 'islam',
      fullname: computed(()=>{
        return `${state.firstname} ${state.lastname}`;
      })
    });
    return toRefs(state);
  };
  export const countryD = ()=>{
      const cstate = reactive({
          city : 'chittagong',
          phone: 123123,
          po: 'mirzarhat',
          posts: []
      });
      return toRefs(cstate);
  }