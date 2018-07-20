export default {
  name: 'HelloWorld',
  data () {
    return {
      labelsWeek: ['Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sab'],
      labelsMonth: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      dayslist: [],
      daySelected: {}
    }
  },
  methods: {
    getActualDate() {
      var today = new Date()
      var actualDate = {
        month: today.getMonth(),
        year: today.getFullYear()
      }
      return actualDate
    },
    getEmptyArray() {
      var daysOfMonth = new Date(this.getActualDate().year, this.getActualDate().month + 1, 0).getDate()
      var fisrtDay = new Date(this.getActualDate().year, this.getActualDate().month, 1).getDay()

      // adding empty days
      for (var i = 0; i < fisrtDay; i++) {
        this.dayslist.push(null)
      }

      //starting to add the numbers of dates
      for (var i = 1; i <= daysOfMonth; i++) {
        this.dayslist.push(i)
      }
    },
    selectDay(day) {
      this.daySelected = day
      console.log(day)
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.getActualDate()
    this.getEmptyArray()
  }
}
