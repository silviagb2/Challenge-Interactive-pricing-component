const app = Vue.createApp({
    data(){
        return{
           
            prices:[8.00,12.00,16.00,24.00,36.00],
            pageViews:['10K','50K','100K','500K','1M'],
            sliderPosition:2,
            printPrice: 16.00.toFixed(2),
            printSalePrice: "",
            printPageViews: '100K',
            saleMode: false,
            salePrices: [],
        }
    },
    created(){
      
           this.salePrices = this.prices.map(price => price*0.75)
            console.log(this.salePrices)
            
    },
    methods:{
        
        changePrice(){
            
            if(!this.saleMode){
                this.printPrice = this.prices[this.sliderPosition].toFixed(2)
                console.log(this.sliderPosition)
                return this.printPrice
            }
            else if(this.saleMode){
                this.printSalePrice = this.salePrices[this.sliderPosition].toFixed(2)
                console.log(this.sliderPosition)
                return this.printSalePrice
            }
              
        },
        changePageViews(){
            this.printPageViews = this.pageViews[this.sliderPosition]
            return this.printPageViews
        },
        changeToAnnually(){
           this.saleMode= !this.saleMode  
        }
        

    }
})
//comparar el "value" del slilder con la posicion del array "prices"
//SI sliderValue = 0 --> 8(index=0)
//when "toggle" (price*12)*0.25
app.mount('#app')