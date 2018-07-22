export default {
  name: 'HelloWorld',
  data () {
    return {
      labelsWeek: ['Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sab'],
      labelsMonth: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      dayslist: [],
      months: [],
      years: [],
      daySelected: {},
      increment: 0,

      month: new Date().getMonth(),
      year: new Date().getFullYear()
    }
  },
  methods: {
    initCalendar () {
      this.getDays(this.year, this.month)
    },
    incrementMonth () {
      var actualDate = new Date()
      actualDate.setMonth(actualDate.getMonth() + this.increment)
      if (actualDate.getMonth() > 11) {
        actualDate.setFullYear(actualDate.getFullYear + this.increment)
        actualDate.setMonth(actualDate.getMonth(0))
      }
      this.increment ++
      this.getDays(actualDate.getFullYear(), actualDate.getMonth())
    },
    decrementMonth (n) {
      /*this.month -= n
      if (this.month < 0) {
        this.year -= 1
        this.month = 11
      }
      console.log(this.month, this.year)*/
    },
    getDays (year, month) {
      console.log(month, year)
      var daysOfMonth = new Date(year, month + 1, 0).getDate()
      var fisrtDay = new Date(year, month, 1).getDay()

      // adding empty days
      /*for (var i = 0; i < fisrtDay; i++) {
        this.dayslist.push({
          day: null,
          month: null,
          year: null
        })
      }*/
      //starting to add the numbers of dates
      /*this.months.push({
        id: month,
        days: daysList(daysOfMonth)
      })

      this.years.push({
        id: year,
        months: this.months
      })*/
      if (this.years.length == 0) {
        this.years.push({
          id: year,
          months: [{
            id: month,
            days: daysList(daysOfMonth)
          }]
        })
      }

      for (var i = 0; i < this.years.length; i++) {
        if (year == this.years[i].id) {
          this.years[i].months.push({
            id: month,
            dayslist: daysList(daysOfMonth)
          })
        } else {
          this.years.push({
            id: year,
            months: [{
              id: month,
              dayslist: daysList(daysOfMonth)
            }]
          })
        }
      }

      console.log(this.years)


      function daysList (list) {
        var result = []
        for (var i = 1; i < list; i++) {
          result.push(i)
        }
        return result
      }
      
      // for (var i = 1; i <= daysOfMonth; i++) {
      //   this.dayslist.month[i].days.push({ i })
      // }


      // console.log(JSON.stringify(this.months))
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
