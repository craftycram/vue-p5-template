<template>
  <div style="width: 100vw; height: 100vh;">
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="danger"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
      class="alert"
    >
      <p>{{$t('alert1')}}</p>
      <p>{{$t('alert2')}}</p>
      <p>{{$t('alert3')}}</p>
      <p>{{$t('alert4.1')}} {{ dismissCountDown }} {{$t('alert4.2')}}</p>
      <b-progress
        variant="danger"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <intro class="content" @start-event="showAlert" v-show="!start"></intro>
    <p5-Viz class="content" v-show="start"></p5-Viz>
  </div>
</template>

<script>
  import Intro from '../components/Intro.vue';
  import p5Viz from '../components/p5Viz.vue';

  export default {
    name: 'Colors',
    components: {
      Intro,
      p5Viz
    },
    data: function () {
      return {
        start: false,
        dismissSecs: 10,
        dismissCountDown: 0,
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        if (!this.$cookies.get('visited')) {
          this.$cookies.set('visited','true', '14d');
          this.dismissCountDown = this.dismissSecs
        }
        this.start = true;
      }
    }
  }
</script>
<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  
  .alert {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
  }
  .content {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    z-index: 1;
  }
</style>