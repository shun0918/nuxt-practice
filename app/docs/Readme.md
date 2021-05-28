# 参考資料
https://typescript.nuxtjs.org/ja/guide/setup

#メモ

## 独自のサーバーフレームワークでNuxtをプログラムにより使用している場合
>独自のサーバーフレームワークで Nuxt をプログラムにより使用している場合、ビルドを行う前に Nuxt の準備ができるまで待機する必要があることに注意してください：
```
// Make sure to wait for Nuxt to load @nuxt/typescript-build before proceeding
await nuxt.ready()
...
if (config.dev) {
  const builder = new Builder(nuxt)
  await builder.build()
}
```