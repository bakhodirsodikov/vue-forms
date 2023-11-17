<template>
  <div class="container">
    <button class="btn form__submit-btn"
  v-if="!formShow"
  @click="formShow = true"
  >Добавить</button>
  <div class="container-form" v-show="formShow">
    <div class="form" >
      <span class="form__close-container">
        <button class="btn delete-btn" 
        @click="formShow = false">
          X
        </button>
      </span>
      <h2 :class="{'add' : toAdd, 'change': toChange}">{{ formTitle }}</h2>
      <form action="" method="get" class="form-example">
        
        
          <input type="text"
          placeholder="Имя"
          v-model="name" required />

          <input type="text" 
          placeholder="Фамилия"
          v-model="lastName" required />

          <input type="number"
          placeholder="Стаж"
          v-model="experience" required />

          <input type="number"
          placeholder="Возраст"
          v-model="age" required />

          <input type="text"
          placeholder="Адресс"
          v-model="adress" required />

        <div class="form-el">
          <button 
            class="btn form__submit-btn"
            v-if="toAdd"
            @click="getData"> {{ formSubmit }} 
          </button>
          <button 
            class="btn form__change-btn"
            v-if="toChange"
            @click="saveChanged"> {{ formSubmit }} 
          </button>
        </div>
      </form>
    </div>
  </div> 
  <div class="list">
    <h2 class=""> Список работников</h2>
    <table class="workers-table">
      <thead>
        <tr>
          <th>№</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Стаж</th>
          <th>Возраст</th>
          <th>Адресс</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="list">
        <tr v-for="(person, idx) in list"
        :key="idx">
          <td>{{ idx + 1 }}</td>
          <td>{{ person.name }}</td>
          <td>{{ person.lastName }}</td>
          <td>{{ person.experience }}</td>
          <td>{{ person.age }}</td>
          <td>{{ person.adress }}</td>
          <td >
            <button class="btn"
            @click="toChangeWorker(idx)"
            >Изменить</button> 
            <button class="btn delete-btn"
            @click="deleteWorker(idx)"
            >Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>


<style src="./app.css">

</style>
<script src="./main.js"></script>


