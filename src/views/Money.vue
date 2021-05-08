<template>
    <Layout class-prefix="money">
         <NumPad /> 
         <Types />
        <Notes/>
        <Tags :tagSource.sync="tags"/> 

    </Layout>
</template>


<script>
import NumPad from '@/components/money/NumPad.vue';
import Tags from '@/components/money/Tags.vue';
import Types from '@/components/money/Types.vue';
import Notes from '@/components/money/Notes.vue';
export default {
    name:'Money',
    components:{NumPad, Tags, Types, Notes},
    data(){
        return{
            tags:['衣','食','住','行']
        }
    }
}
</script>

<style lang="scss">
.money-content{
    display: flex;
    flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped>  


</style>