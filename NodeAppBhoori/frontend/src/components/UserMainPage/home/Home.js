import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { Input, Space, Table } from 'antd';

import Header from '../../UserMainPage/Header/Header'
import Sidenav from '../../UserMainPage/Sidenav/Sidenav'


export const Home = () => {

  const columns = [
    {
      title: 'Total Confirmed',
      dataIndex: 'TotalConfirmed',
      key: 'TotalConfirmed'
    },
    {
      title: 'Total Deaths',
      dataIndex: 'TotalDeaths',
      key: 'TotalDeaths'
    },
    {
      title: 'Total Recovered',
      dataIndex: 'TotalRecovered',
      key: 'TotalRecovered'
    },
    {
      title: 'New Confirmed',
      dataIndex: 'NewConfirmed',
      key: 'NewConfirmed'
    }
  ]

  const cols = [
    {
      title: 'Country',
      dataIndex: 'Country',
      key: 'ID'

    },
    {
      title: 'Total Confirmed ',
      dataIndex: 'TotalConfirmed',
      key: 'ID'

    },
    {
      title: 'Total Deaths',
      dataIndex: 'TotalDeaths',
      key: 'ID'

    },
    {
      title: 'Total Recovered',
      dataIndex: 'TotalRecovered',
      key: 'ID'
    }
  ]

  const [api, setApi] = useState([]);
  const [search, setSearch] = useState();
  const [filteredData, setFilteredData] = useState();
  const apiURL = 'https://api.covid19api.com/summary';

  useEffect(() => {
    async function filterationOfData() {
      const response = await axios.get(apiURL)
      setApi(response.data)
      setFilteredData(response.data.Countries);
    }
    filterationOfData();
  }, []);

  const dataField = (event) => {
    setSearch(event.target.value);

    const Data = api.Countries?.filter(e => {
      return e.Country.toLowerCase().includes(event.target.value.toLowerCase())
    });
    setFilteredData(Data)
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Header />
        <Sidenav />
        <div className="routes-data">
          {/* <Route path="/home" component={Home} /> */}
          <Space style={{ marginTop: 90 }}>
            <Input
              size="large"
              placeholder="Search Here"
              value={search}
              onChange={dataField}
              span={4}
            />
          </Space>

          {search ? <></> :
            <div style={{ marginTop: "50px" }}>
              <h1>Global Data</h1>

              <div style={{ width: "880px", marginLeft: "110px" }}>
                <Table
                  columns={columns}
                  dataSource={[api.Global]}
                />
              </div>
            </div>
          }
          <div style={{ marginTop: "30px" }}>
            <h1>Country Data</h1>
            <div style={{ width: "880px", marginLeft: "110px" }}>
              <Table
                columns={cols}
                dataSource={filteredData}
                rowKey={filteredData?.ID}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;


