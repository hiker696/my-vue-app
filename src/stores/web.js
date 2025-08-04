import { reactive,ref } from "vue";
import{ defineStore } from 'pinia'

export const useWebStore = defineStore('web', () =>{
    const web = reactive({
        title:'hujiaying',
        url:'dengruicode.com'
    })

    const users = ref(1000)

    const userAdd = () =>{
        users.value++
    }

    return {web,users,userAdd}
},{persist: true }
)