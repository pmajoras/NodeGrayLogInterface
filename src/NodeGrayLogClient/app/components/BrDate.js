
var weekdaysLong = {
  // Make sure you start with the right day of the week!
  br: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
};
var weekdaysShort = {
  // Idem
  br: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
};
var months = {
  br: ["Janeiro", "Fevereiro", "Março", "Abril", "Mail", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
}
var firstDayOfWeek = {
  br: 0
};

var localeUtils = {
  formatWeekdayShort: function (index) { return weekdaysShort["br"][index]; },
  formatWeekdayLong: function (index) { return weekdaysLong["br"][index]; },
  getFirstDayOfWeek: function () { return firstDayOfWeek["br"]; },
  getMonths: function () { return months["br"]; },
  formatMonthTitle: function (d) { return `${months["br"][d.getMonth()]} ${d.getFullYear()}` },
}

window.BrDate = React.createClass({
  getInitialState: function() {
    return {
        selectedDay: null
    }
  },
  handleDayClick(e, day, modifiers) {
    this.setState({ selectedDay: day });
  },
  render: function() {
      
    var { selectedDay } = this.state;
    var modifiers = {
      selected: function (day) {
        if(!day || !selectedDay){
          return false;
        }
        return day.getDate() === selectedDay.getDate() &&
            day.getMonth() === selectedDay.getMonth() &&
            day.getFullYear() === selectedDay.getFullYear();
      }  
    };
      
    return (
        <div>
            <DayPicker locale={{locale:"br"}} localeUtils={localeUtils} modifiers={modifiers} onDayClick={this.handleDayClick} />
        </div>
    );
  }
});