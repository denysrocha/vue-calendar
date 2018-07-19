export default {
  name: 'HelloWorld',
  data () {
    return {
      dayslist: [],
      day_selected: {}
    }
  },
  methods: {
    getDays() {
      var today = new Date()
      var month = today.getMonth() + 1
      var year = today.getFullYear()
      var days = new Date(year, month, 0).getDate()
      for (var i = 1; i <= days; i++) {
        this.dayslist.push({ number: i, status: ''})
      }
    },
    selectDay(day) {
      this.day_selected = day
      console.log(day.number)
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.getDays()
  }
}
