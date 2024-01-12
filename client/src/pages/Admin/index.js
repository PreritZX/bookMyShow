import React from "react";
// import PageTitle from "../../components/PageTitle";
import { Tabs } from "antd";
// import UpcomingList from "./UpcomingList";
import MoviesList from "./MoviesList";
// import TheatresList from "./TheatresList";

function Admin() {
  return (
    <div>
      {/* <PageTitle title="Admin" /> */}

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Movies" key="1">
          <MoviesList />
        </Tabs.TabPane>

        <Tabs.TabPane tab="Theatres" key="2">
          <h1>Theatres table</h1>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Upcoming Movies" key="3">
          <h1>upcoming movies</h1>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Admin;
