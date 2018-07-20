export default {
  name: 'HelloWorld',
  data () {
    return {
      labelsWeek: ['Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sab'],
      dayslist: [],
      day_selected: {}
    }
  },
  methods: {
    initCalendar() {
      for (var i = 0; i < 35; i++) {
        this.dayslist.push({
          number: null,
          label: this.labelsWeek[i]
        })
      }
    },
    getDays() {
      var today = new Date()
      var month = today.getMonth() + 1
      var year = today.getFullYear()
      var days = new Date(year, month, 0).getDate()

      console.log(this.dayslist.lenght)
      for (var i = 1; i <= this.dayslist; i++) {
        console.log(this.dayslist[i])
        // var date = new Date(year, month - 1, i).getDay()
        // if (this.labelsWeek[date] == this.dayslist[i].label) {
        //   this.dayslist.push(i)
        // }
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
    this.initCalendar()
  }
}
