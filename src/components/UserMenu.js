import React from "react";

import { Menu, Text } from "grommet";

import { Power } from 'grommet-icons';

import { Avatar } from "./Avatar";

export const UserMenu = ({ user = {}, items = [], ...rest }) => (
  <Menu
    dropAlign={{ top: "bottom", right: "right" }}
    icon={false}
    items={items.map(item => ({
      ...item,
      label: <Text>{item.label}</Text>,
      onClick: () => {} // no-op
    }))}
    label={<Avatar name={user.name} url={user.thumbnail} />}
    {...rest}
  />
);
