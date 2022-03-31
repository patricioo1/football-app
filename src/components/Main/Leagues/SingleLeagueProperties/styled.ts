import styled from 'styled-components'
import { Tabs } from 'antd'

export const SingleLeagueNavigation = styled(Tabs)`
  width: 100%;
  height: auto;
  min-height: 50vh;
  .ant-tabs-nav {
    position: static;
    padding: 0 5px 0 5px;
  }
  .ant-tabs-nav-list {
    width: 100%;
  }
  .ant-tabs-tab-btn {
    width: 100%;
    text-align: center;
  }
  .ant-tabs-tab {
    width: 33%;
  }
`
