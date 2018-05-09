<script>
import VueCharts from 'vue-chartjs'
import { Doughnut } from 'vue-chartjs'
export default {
  name: 'PollPie',
  extends: Doughnut,
  mounted(){
    this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10]
          }
        ]
      })
    },
  data () {
    return {

    }
  }
}
</script>


<style scoped>

</style>
