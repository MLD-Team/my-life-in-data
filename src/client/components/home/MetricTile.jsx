import React from 'react';
import { Modal, Card, Button, Icon, Progress } from 'semantic-ui-react';

import DataPopUp from './DataPopUp';

// MetricTile takes in props --> { metric, onClick }
export default function MetricTile({ metric, onClick }) {
  const { name, graphColor, pointsToday } = metric;

  const pointsTodayString = `${pointsToday} point${
    pointsToday > 1 ? 's' : ''
  } recorded today.`;

  return (
    <Card color={graphColor}>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{pointsTodayString}</Card.Meta>
        <Card.Description>
          <Progress percent={~~(Math.random() * 100)} indicating />
          <Button onClick={onClick} color={graphColor}>
            <Icon name="pencil alternate" />
            Record
          </Button>
          <DataPopUp />
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
