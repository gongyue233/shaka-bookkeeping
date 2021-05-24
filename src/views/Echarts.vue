<template>
<div class="chart-wrapper" ref="chartWrapper">
    <div ref="container" class="chartDiv"></div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';  
import * as echarts from 'echarts'; //如果是直接import echarts from...会报错 init 是undefined
import { EChartsOption } from 'echarts';
import {Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class Echarts extends Vue{
    @Prop()readonly option?: EChartsOption; 
    mychart!:echarts.ECharts ;
    mounted(){  
        const div = (this.$refs.chartWrapper as HTMLElement);
        div.scrollLeft = div.scrollWidth; // 最大滚动距离
        if(!this.option){
            return console.error('option为空')
        }else{   
            // as HTMLDivElement是为了不报错说vue的元素给ECharts来init，这里应当是HTML元素
            this.mychart = echarts.init(this.$refs.container as HTMLDivElement)
            this.mychart.setOption(this.option)
        }
    }
    @Watch('option')
    upChart(newval:EChartsOption){
        console.log('option检查到')
        this.mychart.setOption(newval)
    }

}
</script>
<style lang="scss" scoped>
.chart-wrapper{
    overflow: auto;
}
.chartDiv{
    height: 300px;
    width: 400%;
}

</style>