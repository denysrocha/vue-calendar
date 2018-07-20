export default {
  name: 'HelloWorld',
  data () {
    return {
      labelsWeek: ['Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sab'],
      labelsMonth: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      dayslist: [],
      daySelected: {},

      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      increment: 0
    }
  },
  methods: {
    initCalendar () {
      this.getDays(this.year, this.month)
    },
    changeMonth (n) {
      this.increment += n
      this.month += n
      if (this.month > 11) {
        this.year += 1
        this.month = 0
      }
      console.log(this.month, this.year)
    },
    getDays (year, month) {
      console.log(year, month)
      var daysOfMonth = new Date(year, month + 1, 0).getDate()
      var fisrtDay = new Date(year, month, 1).getDay()

      // adding empty days
      for (var i = 0; i < fisrtDay; i++) {
        this.dayslist.push(null)
      }

      //starting to add the numbers of dates
      for (var i = 1; i <= daysOfMonth; i++) {
        this.dayslist.push({
          day: i,
          month: month + 1,
          year: year
        })
      }
    },
    selectDay(day) {
      this.daySelected = day
      console.log(day)
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.initCalendar()
  }
}
