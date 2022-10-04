import StatisticsLine from 'components/Statistics/StatisticsLine'
const Statistics = (props) => {
    const {good, neutral, bad} = props;
    const average = ((good)/(good+neutral+bad))*100 || 0;
    const all=good+neutral+bad;
    return <>
    <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good}  />
          <StatisticsLine text="neutral" value={neutral}  />
          <StatisticsLine text="bad" value={bad}  />
          <StatisticsLine text="all" value={all}  />
          <StatisticsLine text="average" value={(good-bad)/(all) || 0}/>
          <StatisticsLine text="positive" value={average+"%"}/>
        </tbody>
      </table>
    </>;
  }

export default Statistics;