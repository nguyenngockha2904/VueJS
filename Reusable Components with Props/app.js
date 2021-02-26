let PlanComponent = {
     template: "#plan-template",
     props: {
          name: {
               type: String,
               required: true
          },
          selectedPlan:{
               type:String
          }
     },
     // data() {
     //      return {
     //           selected: false
     //      }
     // },
     computed:{
          isSelected(){
               return this.name===this.selectedPlan; 
          }
     },
     methods: {
          select() {
               // console.log(this.name);
               this.$emit('selectEventBinding',this.name) //custome event name
               // this.selected = !this.selected
          }
     },
}
// Vue.component('plan', {
//      template: "#plan-template",
//      props: {
//           name: {
//                type: String,
//                required: true
//           },
//      }

// })

let PlanPickerComponent = {
     template: '#plan-picker-template',
     components: {
          plan: PlanComponent
     },
     data() {
          return {
               plans: ['The Single', 'The Curious', 'The Addict'],
               selectedPlan:null
          }
     },
     methods: {
          selectPlan(plan){
               this.selectedPlan=plan
          }
     },
}

// Vue.component('plan-picker', {
//      template: '#plan-picker-template',
//      components: {
//           plan: PlanComponent
//      },
//      data() {
//           return {
//                plans: ['The Single', 'The Curious', 'The Addict']
//           }
//      },
// });
Vue.component('click-counter', {
     template: '#click-counter-template',
     data() {
          return {
               count: 0
          }
     },
})


new Vue({
     el: "#app",
     components: {
          'plan-picker': PlanPickerComponent
     }
})