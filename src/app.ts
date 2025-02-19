import { defineOperationApp } from '@directus/extensions-sdk'

export default defineOperationApp({
  id: 'sql-operation',
  name: 'Run SQL Query',
  icon: 'database',
  description: 'Run a SQL query with parameter binding and return the results',
  overview: ({ query }) => [
    {
      label: 'Query',
      text: query,
    },
  ],
  options: [
    {
      field: 'query',
      name: 'Query',
      type: 'text',
      meta: {
        width: 'full',
        interface: 'input-code',
        options: {
          language: 'sql',
          lineWrapping: true,
          lineNumber: true,
        },
      },
    },
    {
      field: 'parameters',
      name: 'Parameters',
      type: 'json',
      meta: {
        width: 'full',
        interface: 'input-code',
        options: {
          language: 'json',
          lineWrapping: true,
          lineNumber: true,
        },
      },
    },
  ],
})
