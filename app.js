const app = Vue.createApp({
    data(){
        return{
           
            prices:[8,12,16,24,36],
            pageViews:['10k','50k','100k','500k','1M'],
            sliderPosition:2,
            printPrice: 16,
            printSalePrice: "",
            printPageViews: '100k',
            saleMode: false,
            salePrices: []
        }
    },
    created(){
      
           this.salePrices = this.prices.map(price => price*0.75)
            console.log(this.salePrices)
            
    },
    methods:{
        
        changePrice(){
            
            if(!this.saleMode){
                this.printPrice = this.prices[this.sliderPosition]
                console.log(this.sliderPosition)
                return this.printPrice
            }
            else if(this.saleMode){
                this.printSalePrice = this.salePrices[this.sliderPosition]
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