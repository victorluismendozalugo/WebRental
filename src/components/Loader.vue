<template>
    <div class="loader-wrapper" v-show="loader">
        <div class="loader-spin">
            <i class="fas fa-spinner fa-spin"></i>            
            <p class="loader-text">Espere un momento...</p>
        </div>        
    </div>
</template>

<script>
export default {
    computed:{
        loader(){                        
            return this.$store.state.loading
        }
    }
}
</script>

<style>
.loader-wrapper{
    position: fixed;
    top:0;
    left: 0;
    height: 100vh;
    width: 100vw;
    opacity: .8;
    background-color: #0A2157;
    z-index: 10000;  
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    }
.loader-spin{
    font-size:3.5em;
    color:#fff;            
}

.loader-text{
    font-size: 1.5rem;
}
</style>