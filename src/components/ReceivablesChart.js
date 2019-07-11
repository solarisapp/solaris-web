import React from 'react';
import { Box, DataTable, Meter, Text, Heading, Button } from 'grommet';

const ReceivablesChart = () => (
  <Box direction="column" gap="large">
    <Box round pad="medium" direction="column" background="white">
      <Box gap="small">
        <Heading level="5" margin="none" size="small">
          Receivables
        </Heading>
        <DataTable
          columns={[
            {
              property: 'name',
              primary: true,
            },
            {
              property: 'percent',
              render: datum => (
                <Box pad={{ vertical: 'xsmall' }}>
                  <Meter
                    values={[{ value: datum.percent }]}
                    thickness="small"
                    size="small"
                  />
                </Box>
              ),
            },
          ]}
          data={[
            { name: '< 30 Days', percent: 20 },
            { name: '31 - 60 Days', percent: 30 },
            { name: '61 - 90 Days', percent: 40 },
            { name: '> 90 Days', percent: 80 },
          ]}
        />
        <Button
          alignSelf='end'
          color='blue'
          size='2'
          onClick={() => {alert('Receivables: 100')}}
        >
          View All Receivables >
        </Button>
      </Box>
    </Box>
  </Box>
);

export default ReceivablesChart;
