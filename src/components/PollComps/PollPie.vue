<script>
import ChartJS from 'chart.js'
import VueCharts from 'vue-chartjs'
import { Doughnut } from 'vue-chartjs'

ChartJS.defaults.global.tooltips.enabled = false;
ChartJS.defaults.global.legend.display = false;


export default {
  name: 'PollPie',
  extends: Doughnut,
  props: ['stats'],
  data () {
    return {
      dataCollection: {
          labels: this.stats.answers,
          datasets: [
            {
              label: 'GitHub Commits',
              backgroundColor: '#f87979',
              data: this.stats.data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)'
              ]
            }
          ]
      }
    }
  },
  mounted(){
    this.renderChart(this.dataCollection, {responsive: true, maintainAspectRatio: false})
  },
  computed: {
    GetData(){
      return this.stats.data;
    }
  },
  watch: {
    stats(){
      //this.GetData;
      this.renderChart({
          labels: this.stats.answers,
          datasets: [
            {
              label: 'GitHub Commits',
              backgroundColor: '#f87979',
              data: this.GetData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)'
              ]
            }
          ]
      }, {responsive: true, maintainAspectRatio: false})
    }
  }
}
</script>


<style scoped>

</style>
