import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Layer,
  ResponsiveContext,
  Grommet,
  Stack,
  Text,
  TextInput,
  Menu,
  DataTable,
  Meter
} from 'grommet';
import { FormClose, Notification, User, FormSearch, Trigger } from 'grommet-icons';

import AppHeader from "./components/AppHeader";
import Hardware from "./components/Hardware";
import NotificationCard from "./components/NotificationCard";
import UtilizationCard from "./components/UtilizationCard";
import ReceivablesChart from "./components/ReceivablesChart";
import VirtualMachinesCard from "./components/VirtualMachinesCard";

import { hardware, utilization, vms, notification } from "./data";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Users } from "./pages";

const solaris = {
  global: {
    colors: {
      brand: '#FFFFFF',
      unreadNotifications: '#0000FF',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const App = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <Router>
      <Grommet theme={solaris} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill background='light-3'>
              <AppHeader>
                <Box direction='row' align='center'>
                  <Trigger color='red' size='large'/>
                  <Box>
                    <Button
                      label="Dashboard"
                      href="/"
                    />
                  </Box>
                  <Box>
                    <Menu
                      label='Billing & Paymnet'
                      disabled='true'
                      items={[
                        { label: 'First Action', onClick: () => {} },
                        { label: 'Second Action', onClick: () => {} },
                      ]}
                    />
                  </Box>
                  <Box>
                    <Menu
                      label='Sites'
                      disabled='true'
                      items={[
                        { label: 'Site List', onClick: () => {} },
                        { label: 'Add A Site', onClick: () => {} },
                      ]}
                    />
                  </Box>
                  <Box>
                    <Button
                      label='Users'
                      href='/users'
                      />
                  </Box>
                  <Box>
                    <Menu
                      label='Organizations'
                      disabled='true'
                      items={[
                        { label: 'First Action', onClick: () => {} },
                        { label: 'Second Action', onClick: () => {} },
                      ]}
                    />
                  </Box>
                  <Box>
                    <Menu
                      label='Reports'
                      disabled='true'
                      items={[
                        { label: 'First Action', onClick: () => {} },
                        { label: 'Second Action', onClick: () => {} },
                      ]}
                    />
                  </Box>
                </Box>
                <Box direction='row' align='center'>
                  <Box
                    margin={{ left: 'medium' }}
                    round='xsmall'
                    background={{ color: 'white', opacity: 'weak' }}
                    direction='row'
                    align='center'
                    pad={{ horizontal: 'small' }}
                    border='all'
                  >
                    <FormSearch color='gray' />
                    <TextInput plain placeholder='Search' type='search' />
                  </Box>
                  <Stack anchor='top-right'>
                    <Button
                      icon={<Notification />}
                      onClick={toggleSidebar}
                    />
                    <Box
                      background='unreadNotifications'
                      pad={{ horizontal: 'xsmall' }}
                      round
                    >
                      <Text
                        size='xsmall'>
                        1
                      </Text>
                    </Box>
                  </Stack>
                  <Button icon={<User />} />
                </Box>
              </AppHeader>
              <Box flex overflow="auto" gap="medium" pad="medium">
                <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                  <Box flex={false} direction="row-responsive" wrap>
                    <Box gap="large" flex="grow" margin="medium">
                      <NotificationCard data={notification} />
                      <VirtualMachinesCard data={vms} />
                    </Box>
                    <Box gap="large" flex="grow" margin="medium">
                      {utilization.map(data => (
                        <UtilizationCard key={data.name} data={data} />
                      ))}
                    </Box>
                    <Box flex="grow" margin="medium">
                      <Hardware data={hardware} />
                    </Box>
                  </Box>
                  <Box flex="grow" margin="medium">
                    <ReceivablesChart />
                  </Box>
                  {(!showSidebar || size !== 'small') ? (
                    <Collapsible direction='horizontal' open={showSidebar}>
                      <Box
                        width='medium'
                        background='light-2'
                        elevation='small'
                        align='center'
                        justify='center'
                      >
                        Unable to establish a connection with the Datalogger 123ABC.
                      </Box>
                    </Collapsible>
                  ): (
                    <Layer>
                      <Box
                        background='light-2'
                        tag='header'
                        justify='end'
                        align='center'
                        direction='row'
                        >
                        <Button
                          icon={<FormClose />}
                          onClick={toggleSidebar}
                        />
                      </Box>
                      <Box
                        fill
                        background='light-2'
                        align='center'
                        justify='center'
                      >
                        Unable to establish a connection with the Datalogger 123ABC.
                      </Box>
                    </Layer>
                  )}
                </Box>
              </Box>
              <Route path="/users" exact component={Users} />
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </Router>
  );
}

export default App;
