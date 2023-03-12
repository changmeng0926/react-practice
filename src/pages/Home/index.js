/**
 * Description：数据概览图表展示
 * **/
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import './index.scss'
import BarChart from '@/components/charts/BarChart'
import LineChart from '@/components/charts/LineChart'
import useStore from '@/store'

function Home() {
  const { homeStore } = useStore()
  useEffect(() => {
    homeStore.getChartData()
  }, [homeStore])

  return (
    <div className="home">
      <BarChart loading={homeStore.loading} {...homeStore.barData} />
      <LineChart loading={homeStore.loading} {...homeStore.lineData} />
    </div>
  )
}

export default observer(Home)
