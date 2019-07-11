import React from 'react';
import { Box, DataTable, Meter, Text } from 'grommet';

const ReceivablesChart = () => (
  <Box flex align='center' justify='center'>
    <DataTable
      columns={[
        {
          property: 'name',
          header: <Text>Period</Text>,
          primary: true,
        },
        {
          property: 'percent',
          header: 'Amount',
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
  </Box>
);

export default ReceivablesChart;
