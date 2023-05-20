import handlebars from 'vite-plugin-handlebars';


// const data = {
//   '/index.html' : {
//     title : "Andrew",
//     fruits : ["apple", "banana", "orange"]
//   },
//   '/one.html' : {
//     title : "Andre",
//     fruits : ["pear", "banana", "grapes"]
//   }
// }


export default {
  base: '/vite-hbs/',
  plugins: [handlebars({
    
      context : {
        title : "Sibu & Thabang",
        fruits : ["apple", "banana", "orange", "pear", "litchi"]
      }


      // context(pagePath) {
      //   // console.log(pagePath);
      //   return data[pagePath]
      // }

    
  })]
};


// {
//   pizzas : [{
//     size : "small",
//     price : 23.00
//   }]
// }
