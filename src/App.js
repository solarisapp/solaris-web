import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Layer,
  ResponsiveContext,
  Grommet
} from 'grommet';
import { FormClose, Notification } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
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
    elevation='medium'
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
              <Button
                icon={<Notification />}
                onClick={toggleSidebar}
              />
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
                    Notifications here ...
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
                    Notifications here ...
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
