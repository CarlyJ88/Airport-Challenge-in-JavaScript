class Weather {
  isStormy(){
    return Math.floor(Math.random() * 11) >= 5 ? true : false;
  }
}

export default Weather;