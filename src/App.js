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
  Text
} from 'grommet';
import { FormClose, Notification, User } from 'grommet-icons';

const theme = {
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

const AppHeader = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    style={{ zIndex: '1' }}
    {...props}
  />
);

const App = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill background="light-3">
            <AppHeader>
              <Heading level='3' margin='none'>My App</Heading>
              <Stack anchor="top-right">
                <Button
                  icon={<Notification />}
                  onClick={toggleSidebar}
                />
                <Box
                  background="unreadNotifications"
                  pad={{ horizontal: 'xsmall' }}
                  round
                >
                  <Text size='xsmall'>1</Text>
                </Box>
              </Stack>
              <Button icon={<User />} />
            </AppHeader>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align='center' justify='center'>
                app body
              </Box>
              {(!showSidebar || size !== 'small') ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    width='medium'
                    background='light-2'
                    elevation='small'
                    align='center'
                    justify='center'
                  >
                    Unable to establish connection with the Datalogger 123ABC.
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
                    Unable to establish connection with the Datalogger 123ABC.
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
