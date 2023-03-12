/**
 * Description：折线图
 * **/
import { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
import initData from './initData'

function LineChart(props) {
  const domRef = useRef()
  useEffect(() => {
    const remoteOption = {
      title: {
        text: props.title,
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: props.legendData,
        right: 0,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: props.xData,
      },
      yAxis: {
        type: 'value',
      },
      series:
        props.yData?.map((i, d) => {
          return {
            type: 'line',
            data: i,
            smooth: true,
            name: props.legendData?.[d],
          }
        }) || [],
    }
    const myChart = echarts.init(domRef.current)
    let option = props.loading ? initData : remoteOption
    myChart.setOption(option)
    return () => {
      myChart.dispose()
    }
  }, [props])

  return (
    <div className="chart">
      <div style={{ width: '100%', height: '100%' }} ref={domRef}></div>
    </div>
  )
}

export default LineChart
