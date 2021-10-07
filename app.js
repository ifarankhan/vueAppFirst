const app = Vue.createApp({
    //data , function
   // template:"<h2>This is my template</h2>"
   data() {
       return {
        togglebuttonTitle : "Hide Buttons",
        showButton: true,
        title:'The age of Islam',
        author: 'Faran K',
        article: 'Multilingual writers often find article usage to be one of the most difficult concepts to learn. Although there are some rules about article usage to help, there are also quite a few exceptions. Therefore, learning to use articles accurately takes a long time. To master article usage, it is necessary to do a great deal of reading, notice how articles are used in published texts, and take notes that can apply back to your own writing.',
        age: 30
       }
   },
   methods:{
        changeTitle(titleChange){
            //    this.title = "The age of great Islam";
            this.title = "The age of "+titleChange+" Islam";
        },
        toggleShowButtons(){
            if(this.showButton){
                this.togglebuttonTitle = "Show Buttons"
            }else{
                this.togglebuttonTitle = "Hide Buttons"
            }
            this.showButton = !this.showButton;
        }
    }
})

app.mount('#app');