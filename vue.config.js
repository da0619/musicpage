const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})
// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         additionalData: `
//           @import "@/style/_variables.scss";
//           @import "@/style/_mixin.scss";
//         `
//       }
//     }
//   }
// };