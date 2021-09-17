

var app = new Vue (
{
    el:'#app',    
    data:{
        listaDellaSpesa: [
            'Salsiccia',
            'Verdura',
            'Pane',
            'Latte',
        ],
    
    },
    methods:{
        togliLaSpunta: function (articoloPreso){
            this.listaDellaSpesa.splice(articoloPreso,1);
        },

        aggiungiArticolo: function () {
            this.listaDellaSpesa.push
        },
        premiAzione: function (premi) {
            console.log('ciao')
        }  
         },

});