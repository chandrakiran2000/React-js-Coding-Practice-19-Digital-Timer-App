// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {isTimerStarted: false, minutes: 25, seconds: 0, incDecTime: 25}

  startTimer = () => {
    this.setState(prevState => ({
      isTimerStarted: !prevState.isTimerStarted,
    }))

    const {isTimerStarted} = this.state
    if (!isTimerStarted) {
      this.timerId = setInterval(this.reducingTime, 1000)
    } else {
      clearInterval(this.timerId)
    }
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({
      isTimerStarted: !prevState.isTimerStarted,
      minutes: 25,
      seconds: 0,
      incDecTime: 25,
    }))
  }

  reducingTime = () => {
    const {minutes, seconds} = this.state
    if (minutes === 0 && seconds === 0) {
      clearInterval(this.timerId)
      this.setState(prevState => ({
        isTimerStarted: !prevState.isTimerStarted,
      }))
    } else {
      this.setState(prevState => ({
        minutes:
          prevState.seconds === 0 ? prevState.minutes - 1 : prevState.minutes,
        seconds: prevState.seconds === 0 ? 59 : prevState.seconds - 1,
      }))
    }
  }

  decreaseTime = () => {
    const {isTimerStarted} = this.state
    if (!isTimerStarted) {
      this.setState(prevState => ({
        minutes: prevState.minutes - 1,
        incDecTime: prevState.incDecTime - 1,
      }))
    }
  }

  increaseTime = () => {
    const {isTimerStarted} = this.state
    if (!isTimerStarted) {
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
        incDecTime: prevState.incDecTime + 1,
      }))
    }
  }

  render() {
    const {isTimerStarted, minutes, seconds, incDecTime} = this.state
    //  console.log(typeof seconds)
    const startPauseImg = isTimerStarted
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const imgAlt = isTimerStarted ? 'pause icon' : 'play icon'

    return (
      <div className="bg-card">
        <div className="digital-timer-card">
          <h1 className="digital-timer-heading">Digital Timer</h1>
          <div className="card">
            <div className="digital-card">
              <div className="time-card">
                <h1 className="digital-timer-text">
                  {minutes <= 9 ? `0${minutes}` : minutes}:
                  {seconds <= 9 ? `0${seconds}` : seconds}
                </h1>
                <p className="timer-text">
                  {isTimerStarted ? 'Running' : 'Paused'}
                </p>
              </div>
            </div>
            <div className="start-pause-reset-card">
              <div className="btn-card">
                <button
                  className="start-pause-btn start-pause-text"
                  type="button"
                  onClick={this.startTimer}
                >
                  <img
                    className="start-pause-img"
                    src={startPauseImg}
                    alt={imgAlt}
                  />{' '}
                  {isTimerStarted ? 'Pause' : 'Start'}
                </button>

                {/* <p className="start-pause-text">
                  {isTimerStarted ? 'Pause' : 'Start'}
                </p> */}

                <button
                  className="reset-btn reset-text"
                  onClick={this.resetTimer}
                  type="button"
                >
                  <img
                    className="reset-img"
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                  />{' '}
                  Reset
                </button>
                {/* <p className="reset-text">Reset</p> */}
              </div>
              <div className="set-card">
                <p className="set-timer-text">Set Timer limit</p>
                <div className="timer-card">
                  <button
                    className="minus-btn"
                    onClick={this.decreaseTime}
                    type="button"
                  >
                    -
                  </button>
                  <p className="number-text">
                    {incDecTime <= 9 ? `0${incDecTime}` : incDecTime}
                  </p>
                  <button
                    className="plus-btn"
                    onClick={this.increaseTime}
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
