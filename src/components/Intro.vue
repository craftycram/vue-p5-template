<template>
  <div class="main">
    <b-dropdown variant="secondary">
      <template v-slot:button-content>
        <b-icon icon="flag" aria-hidden="true"></b-icon> {{$t('lang')}}
      </template>

      <b-dropdown-item-button @click="changeLang('de')">Deutsch</b-dropdown-item-button>
      <b-dropdown-item-button @click="changeLang('en')">English</b-dropdown-item-button>
    </b-dropdown>

    <b-jumbotron bg-variant="dark" :header="$t('header')" :lead="$t('lead')">
    <p>{{$t('description1')}}</p>
    <p>{{$t('description2')}}</p>
    <p>{{$t('description3')}}</p>
    <br>
    <b-button style="margin-right: 10px;" variant="primary" @click="$emit('start-event')">{{$t('btn-start')}}</b-button>
  </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
      this.$router.push(lang)
    }
  }
}
</script>

<style>
  .main {
    width: 100vw;
    height: 100vh;
    padding: 100px;
    background-image: url("../assets/background.png")
  }

  .btn-group.dropdown.b-dropdown{
    position: absolute;
    right: 20px;
    top: 20px;
  }
</style>