import{r as a,h as r}from"./p-ac1acae8.js";const s=class{constructor(r){a(this,r)}normalize(a){return a?a.substr(0,1).toUpperCase()+a.substr(1).toLowerCase():""}render(){if(this.match&&this.match.params.name)return r("div",{class:"app-profile"},r("p",null,"Hello! My name is ",this.normalize(this.match.params.name),". My name was passed in through a route param!"))}};s.style=".app-profile{padding:10px}";export{s as app_profile}