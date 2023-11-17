import { createApp } from 'vue'
import App from './App.vue'

export default{
  data(){
    return{
      formSubmit: 'Добавить',
      formTitle: 'Заполнить форму',
      formShow: false,
      toAdd: true,
      toChange: false,
      name: '',
      lastName: '',
      experience: '',
      age: '',
      adress: '',
      list: [],
      changeId: 0,
    }
  },
  created(){
    this.getList()
    
  },
  methods: {
    updateLocal(){
      localStorage.removeItem('worker-list');
        let workerList = JSON.stringify(this.list)
        localStorage.setItem('worker-list', workerList)
    },
    clearForm(){
        this.name = '';
        this.lastName = '';
        this.experience = '';
        this.age = '';
        this.adress = '';
    },
    getData(){
      if(this.name && this.lastName && this.experience && this.age && this.adress){
        const newWorker = {
          name: this.name,
          lastName: this.lastName,
          experience: this.experience,
          age: this.age,
          adress: this.adress
        }
        this.list.push(newWorker);
        this.clearForm();
        this.updateLocal();
        this.formShow = false
      }
    },
    getList(){
      const workerList = JSON.parse(localStorage.getItem('worker-list'));
      this.list = workerList
    },

    deleteWorker(idx){
      this.list.splice(idx, 1);
      this.updateLocal();
    },

    toChangeWorker(idx){
      this.formShow = true;
      const changeWorker = this.list[idx];
      this.name = changeWorker.name;
      this.lastName = changeWorker.lastName;
      this.experience = changeWorker.experience;
      this.age = changeWorker.age;
      this.adress = changeWorker.adress;
      this.toAdd = false;
      this.toChange = true;
      this.formTitle = 'Изменить содержимое';
      this.formSubmit = 'Изменить';
      this.changeId = idx
      
    },
    saveChanged(){
      if(this.name && this.lastName && this.experience && this.age && this.adress){
        const changedWorker = {
          name: this.name,
          lastName: this.lastName,
          experience: this.experience,
          age: this.age,
          adress: this.adress
        }
      this.list.splice(this.changeId, 1, changedWorker);
      this.clearForm();
      this.toAdd = true;
      this.toChange = false;
      this.formShow = false
      this.updateLocal();
      }
    }
  }
}
createApp(App).mount('#app')
