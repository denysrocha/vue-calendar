<template>
  <div class="calendar">
    <h1>Vue Calendar</h1>

    <div class="month">
      <ul>
        <li class="prev" v-on:click="decrementMonth(+1)">&#10094;</li>
        <li class="next" v-on:click="incrementMonth(1)">&#10095;</li>
        <li>
          {{ labelsMonth[month] }}<br>
          <span style="font-size:18px">{{ year }}</span>
        </li>
      </ul>
    </div>
    <ul class="weekdays">
      <li v-for="label in labelsWeek">{{ label }}</li>
    </ul>

    <ul class="days">
      <li v-for="d in dayslist">
        <span v-if="d.day == null" class="empty">
          {{ d.day }}
        </span>
        <span v-else v-bind:class="{ active: d == daySelected }" v-on:click="selectDay(d)">
          {{ d.day }}
        </span>
      </li>
      <!-- <li><span class="active">10</span></li> -->
    </ul>
  </div>
</template>

<script src="./Calendar.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {box-sizing: border-box;}
ul {list-style-type: none;}
body {font-family: Verdana, sans-serif;}

.prev, .next {
  cursor: pointer;
}

.empty{
  background-color: #ddd;
  padding: 6px 14px;
  cursor: default;
  border-radius: 5px;
}

.calendar{
  max-width: 600px;
  margin: auto;
}

.calendar h1{
  text-align: center;
}

.month {
    padding: 70px 25px;
    width: 100%;
    background: #1abc9c;
    text-align: center;
}

.month ul {
    margin: 0;
    padding: 0;
}

.month ul li {
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
}

.month .prev {
    float: left;
    padding-top: 10px;
}

.month .next {
    float: right;
    padding-top: 10px;
}

.weekdays {
    margin: 0;
    padding: 10px 0;
    background-color: #ddd;
}

.weekdays li {
    display: inline-block;
    width: 13%;
    color: #666;
    text-align: center;
}

.days {
    padding: 10px 0;
    background: #eee;
    margin: 0;
}

.days li {
    list-style-type: none;
    display: inline-block;
    width: 13.6%;
    text-align: center;
    margin-bottom: 15px;
    font-size:12pt;
    color: #777;
    cursor: pointer;
}

.days li .active {
    padding: 5px;
    background: #1abc9c;
    border-radius: 5px;
    color: white !important;
    transition: 0.1s ease;
}

/* Add media queries for smaller screens */
@media screen and (max-width:720px) {
    .weekdays li, .days li {width: 13.1%;}
}

@media screen and (max-width: 420px) {
    .weekdays li, .days li {width: 12.5%;}
    .days li .active {padding: 2px;}
}

@media screen and (max-width: 290px) {
    .weekdays li, .days li {width: 12.2%;}
}
</style>
