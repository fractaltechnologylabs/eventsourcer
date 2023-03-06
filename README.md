# An event sourcing library for NodeJS

## Getting Started

```bash
npm install @peterwangartium/eventsourcer
```

## Usage

```node
import { eventSourcer } from '@peterwangartium/eventsourcer';

const EVENT_STORE_URL = '...';

const DATA_STORE_URL = '...';

const eventStore = eventSourcer(`${EVENT_STORE_URL}`);

// configure your event store

// eventsourcer will use resourceName as the name of the table
eventStore.configure('resourceName', (event) => {
  return event.data.tableName;
});

// eventsourcer will handle create, read, update, and delete eventTypes
eventStore.configure('eventType', (event) => {
  return event.action;
});

// eventsourcer will use the resourceData to take actions on the datastore
eventStore.configure('resourceData', (event) => {
  return event.data[event.data.tableName];
});

// connect a database to your event store
eventStore.connect().postgresUrl(`${DATA_STORE_URL}`);

// load data store with event store data
eventStore.restoreData();

// update data store with incoming event data 
eventStore.subscribe();

```
