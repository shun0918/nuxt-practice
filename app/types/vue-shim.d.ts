// vueファイルの方をTSに提供する
declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}