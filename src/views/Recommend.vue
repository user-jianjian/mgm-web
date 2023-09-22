<template>
    <div class="pos">


        <div class="box">
            <li class="txt">
                <ol>{{ config.id }} </ol>
                <ol>邀请您办卡</ol>
            </li>

            <vue-qr class="twocode" :text="config.id" :logoSrc="config.logo" margin="1"></vue-qr>
        </div>


    </div>
</template>


<script>
import VueQr from 'vue-qr'

export default {
    components: {
        VueQr,
    },

    created() {
        console.log(this.$route.params.userName);
    },

    data() {
        return {
            config: {
                logo: require('../assets/1.png'),
                id: this.$route.params.userName + "邀请您办卡，请您先注册我行账号",
            }
        }
    },
    methods: {

    }
}


</script>


<style scoped>
.pos {
    position: absolute;
    width: 100%;
    background-image: url('../assets/bg.png');
    background-size: 100% 100%;
    background-position: center top;
    aspect-ratio: 864/1470;
    background-repeat: no-repeat;
    /* background-color:#e9ecf1; */
    z-index: -12;

}






.box {
    position: fixed;

    /* vertical-align: middle; */

    /* bottom: 20%; */

    top: 70%;
    left: 10%;
    background-color: white;
    height: 20%;
    /* left: 10%; */
    width: 80%;


}

.twocode {
    position: relative;

    width: 25%;
    bottom: 50%;
    left: 25%;
    aspect-ratio: 1/1;
}

.txt {
    position: relative;
    text-align: left;
    font-size: large;
    font-weight: bold;
    top: 15%;
}






/* .postbg {
    width: 100%;
    height: 100%;
}

.qr {
    position: absolute;
    top: 60%;
    left: 60%;
    z-index: 2;
} */
</style>