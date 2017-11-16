import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';
import React, { Component } from 'react';

const datetime = new Date(2015, 10, 16);
const min_datetime = new Date(new Date(datetime).setDate(8));
datetime.setHours(17);
datetime.setMinutes(28);

const localeExample = {
  months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
  monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
  weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
  weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
  weekdaysLetter: 'ig_al_ar_az_og_ol_lr'.split('_')
}

class DatePickerTest extends React.Component {
  state = {date2: datetime};

  handleChange = (item, value) => {
    this.setState({...this.state, [item]: value});
  };

  render () {
    return (
      <section>
        <DatePicker label='Birthdate' sundayFirstDayOfWeek onChange={this.handleChange.bind(this, 'date1')} value={this.state.date1} />
        <DatePicker label='Locale (String) - Spanish' locale='es' onChange={this.handleChange.bind(this, 'date1')} value={this.state.date1} />
        <DatePicker label='Locale (Object) - Basque' locale={localeExample} onChange={this.handleChange.bind(this, 'date1')} value={this.state.date1} />
        <DatePicker label='Expiration date' sundayFirstDayOfWeek minDate={min_datetime} onChange={this.handleChange.bind(this, 'date2')} value={this.state.date2} />
        <DatePicker label='Formatted date' sundayFirstDayOfWeek inputFormat={(value) => `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`} onChange={this.handleChange.bind(this, 'date3')} value={this.state.date3} />
      </section>
    );
  }
}

export default DatePickerTest;
